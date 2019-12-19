var mongoose = require('../config/database');

// Define our beer schema
const schema = {
    image_id: String,
    pt: {
        desc: String,
        year: String,
        title: String
    },
    en: {
        desc: String,
        year: String,
        title: String
    }
};

const collectionName = "virtuals";
const virtualSchema = mongoose.Schema(schema);
const Virtual = mongoose.model(collectionName, virtualSchema);
module.exports = Virtual;