
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Contact from './Views/Contact';
import Home from './Views/Home';
import Learn from './components/Learn/Learn';

function App() {
  return (
  
   <BrowserRouter>
   <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='contact-us' element={<Contact />} />
        <Route path='Learn-with-us' element={<Learn/>}/>
        </Routes>
      </BrowserRouter> 
  );
}

export default App;
