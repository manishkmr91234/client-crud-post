//import logo from './logo.svg';
import './App.css';
import Createpost from './component/Createpost';
import Showpost from './component/Showpost';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Updatepost from './component/Updatepost';
import Login from './component/Login';
import Shownewpost from './component/Shownewpost';

function App() {
  return (
    <div className='container'>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Shownewpost/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/createpost" element={<Createpost/>}></Route>
    <Route path="/read" element={<Showpost/>}></Route> 
    <Route path="/update" element={<Updatepost/>}></Route>
    

    
   </Routes>
   </BrowserRouter>
   </div>
  
  
    
  )
}

export default App;
