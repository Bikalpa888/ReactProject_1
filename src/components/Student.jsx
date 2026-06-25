import React from 'react'

const Student = (props) => {
  return (
    <div className="p-10 text-2xl">
        <h1> Name: {props.name}</h1>
        <h1> Roll No: {props.roll}</h1>
        <h1> Address: {props.address}</h1>
    </div>
  )
}

export default Student