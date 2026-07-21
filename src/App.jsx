import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Agence from './pages/Agence';
import Project from './pages/Project';
import Navbar from './components/Navigation/Navbar';
// import FullScreenNav from './components/Navigation/FullScreenNav';
import FullScreenNav from './components/Navigation/FullScreenNav';


function App() {
  

  return (
    <div className='text-white'>

    <Navbar />
    <FullScreenNav /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agency' element={<Agence />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;