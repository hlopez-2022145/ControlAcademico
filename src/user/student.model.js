
import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        minLength: [8, 'Password must be 8 charcaters'],
        required: true
    },
    role: {
        type: String,
        required: [true, 'The role is required'],
        default: 'STUDENT_ROLE'
    }
})

export default mongoose.model('user', studentSchema)