import mongoose from "mongoose";
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    _id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const Item = mongoose.model("item", ItemSchema);

export default Item;