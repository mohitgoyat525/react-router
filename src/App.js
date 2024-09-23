
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Contact from './Views/Contact';
import Home from './Views/Home';

function App() {
  return (
  
   <BrowserRouter>
   <Routes>
        <Route path='/' element={<Home/> } />
          <Route path='contact-us' element={ <Contact/>} />
        </Routes>
      </BrowserRouter> 
  );
}

export default App;
