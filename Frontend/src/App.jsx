import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./Home/Home"
import Courses from './Courses/Courses'
import SignUp from './Components/SignUp'
import ContactFrom from './ContactForm/ContactForm'
// import Contact from './Components/Contact'


const App = () => {
  return (
   <>
   <div className="dark:bg-slate-950 dark:text-white">
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/contact" element={<ContactFrom/>}/>
   </Routes>
   </div>
   </>
  )
}

export default App
