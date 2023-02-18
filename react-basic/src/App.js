import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, Profile, About, Skills, Contact} from "./index"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='profile' element={<Profile />} />
          <Route path='skills' element={<Skills />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
