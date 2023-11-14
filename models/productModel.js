const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        //this is a field name
        name:{
            type: String,  //type of the field  
            required: [true,"Please enter a product name"] //required property of the field + validation message
        },

        quantity:{
            type: Number,
            required: true,
            default:0
        },

        price: {
            type: Number,
            required: true
        },

        image:{
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product