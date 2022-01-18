import React from 'react'
import api from '../services/apiConfig'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import '../App.css';
import DeleteButton from './DeleteButton'


export default function Gryffindor() {
  const [students, setStudents] = useState([])
  const [toggle, setToggle] = useState(false)
  const img = '/assets/Profile.png'
  const approved = '/assets/Approved.png'
  const rejected = '/assets/Rejected.png'

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await api.get()
      const filterResponse = res.data.records.filter(element => element.fields.house ==="Gryffindor")
      setStudents(filterResponse)
    }
    fetchStudents(); 
  }, [toggle])
  
  return (
    <div>
      <Navbar />
    <div>
        <img className='image' src='/assets/Gryffindor.png' alt='Gryffindor house' />
        <br />
        <Link to="/alumni">
        <button className='alumni'> Alumni List</button>
        </Link>
    </div>
      <ul className='student-list'>
      {students.map(student => {
            return (
              <div className='student' key={student.id}>
              <div className='head-pic'>
                <img className='profile'
                src={
                  student.fields?.image ? student.fields?.image : img }
                  alt={student.fields?.name} />
                <img className='status-image' src={student.fields?.age >18 ? rejected : approved} alt="status" />
              </div>
              <div className='detail'>
                <h1 className='inside'>Name: {student.fields?.name}</h1>
                <h2 className='inside'>Age: {student.fields?.age}</h2>
                <h2 className='inside'>Ancestry: {student.fields?.ancestry}</h2>
                <h2 className='inside'>Address: {student.fields?.address}</h2>
                <DeleteButton studentId={student.id} setToggle={setToggle} />
              </div>
              <div className='essay'>
              <p className='text'>{student.fields?.essay}</p>
              </div>
            </div>
            )
          }    
        )}
      </ul>
      <footer>
        <small>© 2022 Rod Raymond. All rights reserved.</small>
        <br/>
        <Link to='https://www.linkedin.com/in/rod-raymond-281a0284/' >
          <img className='linkin' src='/assets/LinkIn.png' alt='link in link'/>
        </Link>
        </footer>
    </div>
  )
}
