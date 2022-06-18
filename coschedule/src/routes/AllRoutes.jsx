import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddSchedule from '../pages/addShedule/AddSchedule'
import Calendar from '../pages/calendar/Calendar'
import Home from '../pages/home/Home'
import Pricing from '../pages/pricing/Pricing'
import Schedule from '../pages/schedule/Schedule'
import Register from '../pages/Signin/Register'
import RequiredAuth from '../pages/Signin/RequiredAuth'
import Signin from '../pages/Signin/Signin'

function AllRoutes() {
  return (
   <Routes>
         <Route path = "/" element= {<Home/>}/>
         <Route path = "signin" element= {<Signin/>}/>
         <Route path = "register" element = {<Register/>}/>
         <Route path= "pricing" element= {<Pricing/>}/>
         <Route path= "calendar" element= {<Calendar/>}/>
         <Route path= "schedule" element = { <RequiredAuth><Schedule/></RequiredAuth>}/>
         <Route path= "addschedule" element = {<AddSchedule/>}/>
   </Routes>
  )
}

export default AllRoutes