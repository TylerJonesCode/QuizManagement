const mongoose = require('mongoose')

const quizResponseSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    multipleChoiceAnswers: {
        type: [Number],
    },
    frqAnswers: {
        type: [String],
    },
    frqGrades: {
        type: [Number],
    }
})

module.exports = mongoose.model('QuizResponse', quizSchema)