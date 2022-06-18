import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import styles from "./Signin.module.css";
import { useDispatch } from "react-redux"
import { get_auth } from '../../redux/auth/actions';
import { AuthContext } from '../../contexts/AuthProvider';

function Signin() {
  const {token} = useContext(AuthContext);
  console.log(token)
  const [formData,setFormData] = useState({})
  const navigate= useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/schedule";
  const dispatch= useDispatch();

  useEffect(()=>{
    if(token == "QpwL5tke4Pnpja7X4"){
      navigate(from ,{replace:true})
    }
  },[token ])
   const handleChange= (e)=>{
         let inputName = e.target.name;
       setFormData({
        ...formData,
        [inputName] : e.target.value
       })
   }

   const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(get_auth(formData))
   }
  return (
    <div id= {styles.main} onSubmit= {handleSubmit}>  
          <form id= {styles.form}>
          <img id= {styles.img} src="https://mma.prnewswire.com/media/846690/CoSchedule_Logo.jpg?p=twitter" alt="" />
            <p id= {styles.p}>EMAIL ADDRESS</p>
            <input id= {styles.inp} type="text" name= "email" onChange= {handleChange} placeholder="Email Address"/>
            <p>PASSWORD</p>
            <input id= {styles.inp} type="text" name= "password" onChange= {handleChange}  placeholder= "Password" />
            <input id= {styles.btn} type="submit" value= "Sign In" />
            <div id= {styles.quest}>
            <Link to= "/calendar"><a>Need an account?</a></Link>
            <div id= {styles.vr}></div>
            <Link to= "/register"><a >Forgot your password?</a></Link>
            </div>
            
          </form>
    </div>
  )
}

export default Signin
