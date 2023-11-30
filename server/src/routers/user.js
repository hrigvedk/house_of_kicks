const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
const User = require('../models/user')
const auth = require('../middlewares/auth')
const router = new express.Router()

router.get('/user', async (req, res) =>  {
    res.send("YOOO")
})
// endpoint to create a user (register)
router.post('/user/signup', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch(e) {
        res.status(400).send(e)
    }
})

// endpoint to log in a user 
router.post('/user/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch(e) {
        res.status(400).send()
    }
})

// endpoint to log out a user
router.post('/user/logout', auth, async (req, res) =>  {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch(e) {
        res.status(500).send()
    }
})

// endpoint to get the user details
router.get('/user/me', auth, async (req, res) => {

    res.send(req.user) 

})

// endpoint to get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch(e) {
        res.status(500).send()
    }
})

// endpoint to update user details
router.patch('/user/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['firstName', 'lastName', 'email', 'password', 'phone', 'profilePicture']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        res.status(400).send({ error: 'Invalid updates!'})
    }

    try {
        
        updates.forEach((update) => req.user[update] = req.body[update])

        await req.user.save()

        // const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})

        res.send(req.user)
    }catch(e) {
        res.status(400).send(e)
    }
})

// endpoint to delete user account
router.delete('/user/me', auth,async (req, res) => {
    try {
        // const user = await User.findByIdAndDelete(req.user._id)

        // if(!user) {
        //     res.status(404).send()
        // }

        await req.user.remove()

        res.send(req.user)
    }catch(e) {
        res.status(500).send()
    }
})

// Uploading profile picture
const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('File must be an image'))
        }
        cb(undefined, true)
    }
})

router.post('/user/me/profilePicture', auth, upload.single('profilePicture'), async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({height: 250, width: 250}).png().toBuffer()
    req.user.profilePicture = buffer
    await req.user.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})

// endpoint for deleting profile picture 
router.delete('/user/me/profilePicture', auth, async(req, res) => {
    req.user.profilePicture = undefined
    await req.user.save()
    res.send()
})

// endpoint for getting user profile picture
router.get('/user/:id/profilePicture', async(req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if(!user || !user.profilePicture) {
            throw new Error()
        }

        res.set('Content-Type', 'image/png')
        res.send(user.profilePicture)
    } catch(e) {
        res.status(400).send()
    }
})

module.exports = router





