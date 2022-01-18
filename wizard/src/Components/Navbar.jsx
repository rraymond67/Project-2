import{Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navigation'>
      <Link to="/">
      <h1 className='nav-text'>Hogwarts School of Witchcraft and Wizardry</h1>
      </Link>
      <ul className='nav-items'>
        <li>
          <Link className='bar' to="/">HOME</Link>
        </li>
        <li>
          <Link className='bar' to="/application" >APPLY</Link>
        </li>
        <li>
          <Link className='bar' to="/gryffindor" >GRYFFINDOR</Link>
        </li>
        <li>
          <Link className='bar' to="/hufflepuff" >HUFFLEPUFF</Link>
        </li>
        <li>
          <Link className='bar' to="/ravenclaw" >RAVENCLAW</Link>
        </li>
        <li>
          <Link className='bar' to="/slytherin" >SLYTHERIN</Link>
        </li>
        </ul>
      
    </nav>
  )
}