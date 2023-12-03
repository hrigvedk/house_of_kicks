const mongoose = require('mongoose')

const sneakerAssetSchema = new mongoose.Schema({
    assetName: {
        type: String,
    },
    assetUrl: {
        type: Buffer,
    }
})

const SneakerAsset = mongoose.model('SneakerAsset', sneakerAssetSchema);

module.exports = SneakerAsset