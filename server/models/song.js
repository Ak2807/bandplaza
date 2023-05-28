const mongoose = require("mongoose")

const songSchema = mongoose.Schema(
   {
    name:{
        type:String,
        require:true,
    },
    imageURL:{
        type:String,
        require:true,
    },
    songURl:{
        type:String,
        require:true, 
    },
    album:{
        type:String,
       
    },
    band:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        required: true,
    }
} ,
{ timestamps:true}
)

module.exports = mongoose.model("song",songSchema)
    