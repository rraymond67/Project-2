import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function HouseList() {
  return (
    <div>
      <div>
        <h1>Hogwarts School of Witchcraft and Wizardry</h1>
        <Link to="/application">
          <button>Application</button>
        </Link>
      </div>
      <div className='houses'>
      <Link to="/gryffindor">
        <img className='image' src='/assets/Gryffindor.png' alt='Gryffindor house' />
      </Link>
      <Link to="/hufflepuff">
        <img className='image' src='/assets/Hufflepuff.png' alt='hufflepuff house' />
      </Link>
        <Link to="/ravenclaw">
        <img className='image' src='/assets/Ravenclaw.png' alt='ravenclaw house' />
      </Link>
      <Link to="/slytherin">
        <img className='image' src='/assets/Slytherin.png' alt='slytherin house' />
      </Link>
      </div>
    </div>
  )
}
