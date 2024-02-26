// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');
  const[color,setColor]=useState('light');
  const toggleMode=(event)=>{
   
   if(event.target.value==="green"){
    if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor="white"

    }else{
      setMode("dark")
      setColor("#2d4029")
      document.body.style.backgroundColor="#2d4029"
    }
  
   }else if(event.target.value==="red"){
    if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor="white"

    }else{
    setMode("dark")
    setColor("#521d20");
    document.body.style.backgroundColor="#521d20"
    }
   }else{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#041032db"

    }else{
      setMode("light")
      document.body.style.backgroundColor="white"
    }
  }
  }

  return (
  <>
    {/* <BrowserRouter> */}

  <Navbar title="Text Utils" aboutText="About us" mode={mode} togglemode={toggleMode} />
  <div className="container my-3" >
  <TextForm heading="Enter the text"  mode={mode} color={color}/>
  {/* <Routes>
          <Route exact path="/about" element={<About />}></Route>	
          <Route exact path="/" element={<TextForm heading="Enter the text"  mode={mode} color={color}/>}>
          </Route>
         
</Routes> */}

</div>
{/* </BrowserRouter> */}
  </>
  
  );
}

export default App;
