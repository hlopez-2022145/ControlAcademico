'use strict'

//Rutas del usuario
import express from 'express'
import { validateJwt } from '../middlewares/validate-jwt.js'
import { test, login, registerUser} from './student.controller.js'

const api = express.Router()

api.get('/test', validateJwt, test)
api.post('/registerUser', registerUser)
api.post('/login', login)
//api.put('/update/:id', update)
//api.delete('/delete/:id', deleteCour)

export default api 