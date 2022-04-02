const { Schema } = require('mongoose');

const itemSchema = new Schema({
    collection: [
        {
            type: String,
        },
    ],
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // saved item id from database
    itemId: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    },


})

module.exports = itemSchema;