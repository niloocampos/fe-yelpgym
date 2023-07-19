import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './screens/LandingPage';
import Gyms from './screens/Gyms';
import Show from './screens/Show';
import New from './screens/New';
import Edit from './screens/Edit';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3001";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gyms" element={<Gyms />} />
        <Route path="/gym/:gymid" element={<Show />} />
        <Route path="/gym/:gymid/edit" element={<Edit />} />
        <Route path="/new" element={<New />} />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
