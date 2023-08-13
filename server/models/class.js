const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    class_name: {
        type: String,
        required: true
    },
    class_id: {
        type: String,
        required: true
    },
    class_password: { //password to join a class with
        type: String,
        default: '', //If password is empty, then no password is needed to join the class
    },
    teacher: { //reference to the user who owns the class
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

})

module.exports = mongoose.model('Class', classSchema)