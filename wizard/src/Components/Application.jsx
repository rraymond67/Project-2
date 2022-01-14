import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Form from './Form'
import api from '../services/apiConfig'
import Navbar from './Navbar';

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
    const res = await api.post("", { fields })
    setInput(default_input);
    toast("New Character Created")
    navigate("/")
  }  

  return (
    <div>
      <div>
      <Navbar />
      </div>
      <h1>Student Application</h1>
      <Form
        input={input}
        handleSubmit={handleSubmit}
        handleTextInput={handleTextInput}
        handleNumberInput={handleNumberInput}
        type={"Create"}     
      />
    </div>
  )
}
