import React from 'react'
import api from '../services/apiConfig'
import { useState, useEffect } from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

export default function Ravenclaw() {
  const [students, setStudents] = useState([]);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await api.get()
      const filterResponse = res.data.records.filter(element => element.fields.house == "Ravenclaw")
      setStudents(filterResponse)
    }
    fetchStudents();
    
  },[toggle])

console.log(students)

  return (
    <div>
      <Navbar />
      <div>
        <img className='image' src='/assets/Ravenclaw.png' alt='ravenclaw house' />
        <br />
        <Link to="/alumni">
        <button className='alumni'> Alumni List</button>
        </Link>
      </div>
      <ul>
        {students.map(student => {
            return (
              <div key={student.id}>
                <div>
                  <img src={student.fields?.image} alt={student.fields?.name}/>
                </div>
                <h1>Name: {student.fields?.name}</h1>
                <h2>Age: {student.fields?.age}</h2>
                <h2>Ancestry: {student.fields?.ancestry}</h2>
                <h2>Address: {student.fields?.address}</h2>
                <DeleteButton studentId={student.id} setToggle={setToggle}/>
              </div>
            )
          }    
        )}
      </ul>
    </div>
  )
}
