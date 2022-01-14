import './App.css';
import { Routes, Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Application from './Components/Application';
import HouseList from './Components/HouseList';
import Gryffindor from './Components/Gryffindor';
import Hufflepuff from './Components/Hufflepuff';
import Ravenclaw from './Components/Ravenclaw';
import Slytherin from './Components/Slytherin';
import AlumniList from './Components/AlumniList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HouseList />} />
        <Route path="/application" element={<Application />} />
        <Route path="/gryffindor" element={<Gryffindor />} />
        <Route path="/hufflepuff" element={<Hufflepuff />} />
        <Route path="/ravenclaw" element={<Ravenclaw />} />
        <Route path="/slytherin" element={<Slytherin />} />
        <Route path="/alumni" element={<AlumniList /> }/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
