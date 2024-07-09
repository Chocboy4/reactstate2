// step 1 : Import the useState from react
import { useState } from 'react'
import React from 'react'
import State from './State'
import Form from './Form'
import Form2 from './Form2'

const App = () => {
  // step 2: create state variable and a function
  const [nameState, setNameState] = useState("Bolu")
  const [jobTitleState, setJobTitleState] = useState("Upcoming Artist")
  const [location, setLocation] = useState("i came from the gutters")
  const meetApostle = () => {
    setNameState("BoluCello")
    setJobTitleState("Super Star")
    setLocation("I now live in London")
  }
  return (
    <>
      <div>
      Hello My name is {nameState}, I am an {jobTitleState} and i play the cello and {location}
      </div>
      <button onClick={meetApostle} className='border p-1 rounded ring mt-3 bg-gradient-to-r from-purple-500 to-pink-500 py-2'>meet Apostle</button>

      <State />
      <Form />
      <Form2 />
    </>
  )
}

export default App
