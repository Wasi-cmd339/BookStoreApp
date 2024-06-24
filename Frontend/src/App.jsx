import React from 'react';
import {Routes,Route, Navigate} from "react-router-dom";
import Home from "./Home/Home";
import Courses from './Courses/Courses';
import SignUp from './Components/SignUp';
import ContactFrom from './ContactForm/ContactForm';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider';
// import Contact from './Components/Contact'


const App = () => {
  const [authUser, setAuthUser]= useAuth();
  console.log(authUser);
  return (
   <>
   <div className="dark:bg-slate-950 dark:text-white">
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={authUser ? <Courses/> : <Navigate to="/signup" /> } />
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/contact" element={<ContactFrom/>}/>
   </Routes>
   <Toaster />
   </div>
   </>
  )
}

export default App
