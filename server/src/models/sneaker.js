const mongoose = require('mongoose')

const sneakerAssetSchema = new mongoose.Schema({
    assetName: {
        type: String,
    },
    assetUrl: {
        type: Buffer,
    }
})


const sneakerSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    modelName: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    availableSizes: {
        type: [Number],
        required: true,
    },
    assets: {
        img: [sneakerAssetSchema],
        vid: [sneakerAssetSchema],
        mtl: [sneakerAssetSchema],
    },
    rating: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    ankleType: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Sneaker = mongoose.model('Sneaker', sneakerSchema);

module.exports = Sneaker