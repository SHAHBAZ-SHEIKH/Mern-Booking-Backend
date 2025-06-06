import mongoose from 'mongoose';


const roomSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    maxPeople:{
        type:Number,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    roomNumbers:{
        type:[{number:Number, unavailableDates:{type : [Date]} }],
    
    },
    

},{timestamps : true})

export default mongoose.model("Room",roomSchema)