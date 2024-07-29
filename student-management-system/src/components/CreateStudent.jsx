import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebaseConfig'

function CreateStudent({getStudents}) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [isCreatingStudent, setIsCreatingStudent] = useState(false)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            setIsCreatingStudent(true)
            await addDoc(collection(db,'students'),{
                name: name,
                age: Number(age)
            })
            setName('')
            setAge('')
            setIsCreatingStudent(false)
            // get updated students
            await getStudents()
        }
        catch (error){
            console.log("Error creating user:",error)
            setIsCreatingStudent(false)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter student name' required />
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter student age' required />
            <button type='submit'>{isCreatingStudent ? 'Creating...': 'Create Student'}</button>
        </form>
    </div>
  )
}

export default CreateStudent
