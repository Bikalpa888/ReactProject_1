import React, { useContext } from 'react'
import Student from '../components/Student'
import { MyContext } from '../hooks/MyContext'

const Classroom = () => {
    let msg= useContext(MyContext)
    return (
    <div>
        <h1>{msg}</h1>
        <Student  name='Bikalpa' roll='1' address='Raniban'/>
         <Student  name='Bijay' roll='2' address='Australia'/>
        <Student  name='Mina' roll='3' address='Kathmandu'/>

    </div>
  )
}

export default Classroom