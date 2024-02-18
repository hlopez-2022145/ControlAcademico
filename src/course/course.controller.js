'use strick'

import Course from './course.model.js'
//import User from '../user/student.model.js'

export const addCourse = async(req, res) =>{
    try{
        let { name, description, student} = req.body 
        
        //let coruseExists = await Course.findOne({name})
        //if(name == coruseExists){
        //    return res.status(400).send({message: 'Ya estas inscrio en este curso'})
        //}

        let user = await Course.countDocuments({student})
        if(user >= 3) return res.status(404).send({message: 'You can no longer be in more than 3 courses'})
        
        let newCourse = new Course({
            name,
            description,
            student
        });

        await newCourse.save()
        return res.send({message: 'Course aggregate successfully'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error Aggregate course', err})
    }
}

//UPDATE
export const update = async(req, res) => {
    try{
        let { id } = req.params
        let data = req.body

        let updateCou = await Course.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )

        if(!updateCou) return res.status(401).send({message: 'Course not found and not updated'})
        return res.send({message: 'Updated Course', updateCou})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error updating course'})
    }
}

//DELETE 
export const deleteCour = async (req, res) => {
    try {
        let { id } = req.params
        let deleteCourse = await Course.findOneAndDelete({_id: id})
        if(!deleteCourse) return res.status(404).send({message: ' Course not found and not deleted'})        
        return res.send({ message: `Deleted course seccessfully` })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error deleting course' })
    }
}