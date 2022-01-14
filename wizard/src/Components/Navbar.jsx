import{Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navigation'>
      <h1>Hogwarts School of Witchcraft and Wizardry</h1>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/application" >APPLY</Link>
        </li>
        </ul>
      
    </div>
  )
}
