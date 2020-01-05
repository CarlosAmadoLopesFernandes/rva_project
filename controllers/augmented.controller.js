const Augmented = require('../models/augmented.model');

exports.getAll = (request, response) => {
    Augmented.find({})
        .lean().exec((error, elements) => {
            if (error) throw error;
            return response.send(elements);
        });

}

exports.getByMarkerID = (request, response) => {
    const marker_id = request.params.marker_id;
    Augmented.findOne({
            marker_id: marker_id
        })
        .lean().exec((error, elements) => {
            if (error) throw error;
            return response.send(elements);
        });
}

exports.save = (request, response) => {
    let augmented = new Augmented();
    augmented.marker_id = request.body.marker_id;
    augmented.pt = {
        left_info: request.body.left_info_pt,
        right_info: request.body.right_info_pt,
        place_info: request.body.place_info_pt
    };
    augmented.en = {
        left_info: request.body.left_info_en,
        right_info: request.body.right_info_en,
        place_info: request.body.place_info_en
    };

    augmented.save((error, augmenteds) => {
        if (error) throw error;
        return response.send(augmenteds);
    })
}

exports.update = (request, response) => {
    let data = request.body;
    Augmented.findOneAndUpdate({
        marker_id: request.params.marker_id
    }, data, { new: true }).lean().exec((error, augmented) => {
        if (error) throw error;
        return response.send(augmented);
    });
}