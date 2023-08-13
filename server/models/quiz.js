const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        required: true
    },
    unlock_time: {
        required: true
    },
    lock_time: {
        required: false
    },
    class: { //reference to the class that the quiz belongs to
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    //format for questions: for multiple choice: "MQuestion,Answer1,Answer2,..."
    //for frq: "FQuestion"
    questions: { 
        type: [String],
    }

})

module.exports = mongoose.model('Quiz', quizSchema)