import mongoose from "mongoose";
import { stringify } from "qs";
const {Schema, model}= mongoose;


const postSchema= new Schema ({
    title: {
        type: String,
        required: [true, "el campo titte es obligatorio"]
    },

    description: {
        type: String,
        required: [true, "el campo titte es obligatorio"]
    },

    imgUrl: {
        type :String,
        default: null,
    },
    nameImage: String,



},{
    timestamps:true,
}
);

// postSchema.methods.setImg = function setImg(filename){
//   const url= `http://localhost:4000/public/`
//   this.imgUrl = url + filename;
//   this.nameImage=filename;
// }


postSchema.methods.setImg = function setImg({secure_url,public_id}){
    this.imgUrl = secure_url;
    this.nameImage= public_id;
  }
  

export const postModel =model("post", postSchema)