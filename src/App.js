
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Dash2 from './components/Dash2';
import Navbar2 from './components/Navbar2';


function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      {/* <Dashboard/> */}
      <Navbar/> 
      {/* <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes> */}
     
    {/* <Login/> */}
     {/* <Dash2/> */}
     {/* <Navbar2/> */}
    </div>
  );
}

export default App;
