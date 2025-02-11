const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    // this is called validation
    name : {type: String,
         required: [true, "Must provide name"],
         trim: true,
        maxlength: [20, "Name cannot be more than 20 characters"],
    },
    completed :{type: Boolean, 
        default: false,
        required: [true, "Must provide"]},
})

module.exports = mongoose.model('Task', taskSchema);
