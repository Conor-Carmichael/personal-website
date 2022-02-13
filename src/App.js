import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SiteNav from './Components/SiteNav';
import Projects from './Components/Projects'
import Education from './Components/Education';
import MScProject from './Components/MScProject';
import Experience from './Components/Experience';
import Interests from './Components/Interests';

function App() {
  return (

    <Router>
      <SiteNav />

      <Routes>
        <Route path='/projects' element={<Projects />}      />
        <Route path='/education' element={<Education />}    />
        <Route path='/msc-project' element={<MScProject />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/interests' element={<Interests />} />
          
      </Routes>
      
    </Router>


  );
}

export default App;
