import mongoose from 'mongoose'

const teacherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})