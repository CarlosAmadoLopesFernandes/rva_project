var mongoose = require('../config/database');

// Define our beer schema
const schema = {
    marker_id: String,
    pt: {
        left_info: [String],
        right_info: [String],
        place_info: [String]
    },
    en: {
        left_info: [String],
        right_info: [String],
        place_info: [String]
    }
};

const collectionName = "augmenteds";
const augmentedSchema = mongoose.Schema(schema);
const Augmented = mongoose.model(collectionName, augmentedSchema);
module.exports = Augmented;