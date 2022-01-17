import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../App.css';
import {Link} from 'react-router-dom'

const url = `https://hp-api.herokuapp.com/api/characters`

export default function AlumniList() {
  const [gryffindor, setGryffindor] = useState([]);
  const [hufflepuff, setHufflepuff] = useState([]);
  const [ravenclaw, setRavenclaw] = useState([]);
  const [slytherin, setSlytherin] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get(url)
      const filterGryffindor = res.data.filter(element => element.hogwartsStudent == true && element.house == "Gryffindor")
      const filterHufflepuff= res.data.filter(element => element.hogwartsStudent == true && element.house == "Hufflepuff");
      const filterRavenclaw= res.data.filter(element => element.hogwartsStudent == true && element.house == "Ravenclaw");
      const filterSlytherin= res.data.filter(element => element.hogwartsStudent == true && element.house == "Slytherin");
      setGryffindor(filterGryffindor);
      setHufflepuff(filterHufflepuff);
      setRavenclaw(filterRavenclaw);
      setSlytherin(filterSlytherin);
    }
    fetchStudents();
    
  }, [])

  return (
    <div className='old'>
      <div>
      <Navbar />
      </div>
      <br />

    <div className='list'>
        
      <div className='gryffindor'>
      <img className='image' src='/assets/Gryffindor.png' alt='Gryffindor house' />
      {gryffindor.map(student => {
        return (
          <div key={student.name}>
                <h1>{student.name}</h1>
                <h3>{student.ancestry}</h3>
              </div>
            )}    
            )}
      </div> 
      <br />


      <div className='ravenclaw'>
      <img className='image' src='/assets/Hufflepuff.png' alt='hufflepuff house' />
      {ravenclaw.map(student => {
        return (
          <div key={student.name}>
            <h1>{student.name}</h1>
                <h2>{student.ancestry}</h2>
              </div>
            )}    
            )}
      </div> 
      <br />


      <div className='hufflepuff'>
      <img className='image' src='/assets/Ravenclaw.png' alt='ravenclaw house' />
        {hufflepuff.map(student => {
          return (
            <div key={student.name}>
                <h1>{student.name}</h1>
                <h2>{student.ancestry}</h2>
              </div>
            )}    
            )}
      </div> 
      <br />


      <div className='slytherin'>
      <img className='image' src='/assets/Slytherin.png' alt='slytherin house' />
      {slytherin.map(student => {
            return (
              <div key={student.name}>
                <h1>{student.name}</h1>
                <h2>{student.ancestry}</h2>
              </div>
            )}    
            )}
      </div> 
      <br />
      </div>
      <footer>
        <small>© 2022 Rod Raymond. All rights reserved.</small>
        <br/>
        <Link to='https://www.linkedin.com/in/rod-raymond-281a0284/' >
          <img className='linkin' src='/assets/LinkIn.png' />
        </Link>
        </footer>
    </div>
  )
}
