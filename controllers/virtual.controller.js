const Virtual = require('../models/virtual.model');

exports.getAll = (request, response) => {
    Virtual.find({})
        .lean().exec((error, virtuals) => {
            if (error) throw error;
            return response.send(virtuals);
        });

}

exports.getByMarkerID = (request, response) => {
    const image_id = request.params.image_id;
    Virtual.findOne({
        image_id: image_id
    })
        .lean().exec((error, virtuals) => {
            if (error) throw error;
            return response.send(virtuals);
        });
}


/*
exports.save = (request, response) => {
    let virtual = new Virtual();
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

    virtual.save((error, virtuals) => {
        if (error) throw error;
        return response.send(virtuals);
    })

}*/