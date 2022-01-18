import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function HouseList() {
  return (
    <div className='page'>
      <div className='header'>
        <h1>Hogwarts School <br /> of <br />Witchcraft and Wizardry</h1>
        <br/>
        <Link to="/application">
          <button className='application'>Application</button>
        </Link>
      </div>
      <div className='houses'>
      <Link to="/gryffindor">
        <img className='imagine' src='/assets/Gryffindor.png' alt='Gryffindor house' />
      </Link>
      <Link to="/hufflepuff">
        <img className='imagine' src='/assets/Hufflepuff.png' alt='hufflepuff house' />
      </Link>
        <Link to="/ravenclaw">
        <img className='imagine' src='/assets/Ravenclaw.png' alt='ravenclaw house' />
      </Link>
      <Link to="/slytherin">
        <img className='imagine' src='/assets/Slytherin.png' alt='slytherin house' />
      </Link>
      </div>
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
