import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Form from './Form'
import api from '../services/apiConfig'
import Navbar from './Navbar';
import {Link} from 'react-router-dom'

export default function Application() {
  const navigate = useNavigate()

  const default_input = {
    name: "",
    house: "",
    image: "",
    ancestry: "",
    address: "",
    essay: "",
    age:0
  }

  const [input, setInput] = useState(default_input)

  const handleTextInput = (event) => {
    const { id, value } = event.target;
    setInput((prevInput) => ({
        ...prevInput,
        [id]: value
      })
    )
  }

  const handleNumberInput = (event) => {
    const { id, valueAsNumber } = event.target;
    setInput((prevInput) => ({
        ...prevInput,
        [id]: valueAsNumber
      })
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    await api.post("", { fields })
    setInput(default_input);
    toast("New Character Created")
    navigate("/")
  }  

  return (
    <div>
      <div>
      <Navbar />
      </div>
      <h1 className='student-application'>Student Application</h1>
      <div className='application-page'>
      <Form
        input={input}
        handleSubmit={handleSubmit}
        handleTextInput={handleTextInput}
        handleNumberInput={handleNumberInput}
        type={"Create"}     
      />
      </div>
      <footer className='application-footer'>
        <small className='application-text'>© 2022 Rod Raymond. All rights reserved.</small>
        <br/>
        <Link to='https://www.linkedin.com/in/rod-raymond-281a0284/' >
          <img className='linkin' src='/assets/LinkIn.png' alt='link in link'/>
        </Link>
        </footer>
    </div>
  )
}
