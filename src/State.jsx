import React, { useState } from 'react'

const State = () => {
    const [name, setName] = useState("Mr Bambo")
    const [jobState, setJobState] = useState("i run a cocoa farm")
    const [family, setFamily] = useState("i have one wife and two kids")
    const coronation = () => {
        setName("Prince Bambo")
        setJobState("I run a city")
        setFamily("I have 4 wives and 25 kids")
    }
  return (
    <div>
        <p>I am {name}, {jobState}, {family}</p>
        <button onClick={coronation} className=' bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded ring-1 border'>Coronation</button>
    </div>
  )
}

export default State