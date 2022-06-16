import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Register.module.css"

function Register() {
  return (
    <div>
        <form  id= {styles.form}>
            <img id= {styles.img} src="https://mma.prnewswire.com/media/846690/CoSchedule_Logo.jpg?p=twitter" alt="" />
            <p id= {styles.p}>To recover your account, enter your email address and we'll send a confirmation email.</p>
            <input id= {styles.inp} type="text" placeholder='Email Address'/>
            <input id= {styles.btn} type="submit" />
           <Link to= "/signin"> <p  id= {styles.p2}>Back to Login</p></Link>
        </form>
        
    </div>
  )
}

export default Register