'use strict'

//Rutas del usuario
import { Router } from 'express'
import { addCourse, deleteCour, update } from './course.controller.js'

const api = Router()

api.post('/addCourse', addCourse)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteCour)

export default api 
