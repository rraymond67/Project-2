import React from 'react'

export default function Form(props) {
  const {name, house, image, ancestry, address, essay, age} = props.input
  
  return (
    <form onSubmit={props.handleSubmit}>
    <div>
        <input
          id="name"
          value={name}
          placeholder='Full Name'
          onChange={props.handleTextInput}
        />
      <br />
          <input
          id="age"
          valueasnumber={age}
          placeholder='age'
          type="number"
          onChange={props.handleNumberInput}
        />
      <br />
        <input
          id="ancestry"
          value={ancestry}
          placeholder='Ancestry'
          onChange={props.handleTextInput}
        />
      <br /> 
      <input
          id="address"
          value={address}
          placeholder='Address'
          onChange={props.handleTextInput}
        />
      <br /> 
        <input
          id="essay"
          value={essay}
          placeholder='Whar makes you a good wizard? Please write a short essay'
          onChange={props.handleTextInput}
        />
      <br />
        <input
          id="image"
          value={image}
          placeholder='Add image url'
          onChange={props.handleTextInput}
        />
      <br />   
      <select 
        id="house"
        value={house}
        onChange={props.handleTextInput}
        >
          <option value="">-- Choose House --</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
    </div>
    <button>APPLY!</button>
    </form>
  )
}
