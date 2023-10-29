import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Articles from './pages/Articles';

function App() {

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/articles' element={<Articles/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
