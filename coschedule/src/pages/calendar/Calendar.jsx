import React from 'react';
import styles from "./Calendar.module.css";

function Calendar() {
  return (
    <div>
          <h1 id= {styles.h1}>Create My Marketing Calendar</h1>
          <p id= {styles.p}>Free for life. No credit card required.</p>
         <form id= {styles.form} >
            <div id= {styles.item}></div>
            <p >Full Name</p>
              <input type="text" placeholder='Full Name' />
              <p>Email Address</p>
              <input type="text" placeholder='Work email address'/>
              <p>Company</p>
              <input type="text" placeholder='Company Name'/>
              <p>Website URL</p>
              <input type="text" placeholder='Company Website URL'/>
              <p>Password</p>
              <input type="text" placeholder='Password (minimum 8 characters)' />
               <button>Get Started Now</button>
               <p>By clicking "Get Started Now", you agree to CoSchedule’s <a href= "">terms of service , end user agreement, and privacy policy;</a> you are 16 years or older; and you will receive information from CoSchedule from which you can opt out at any time.</p>
         </form>
    </div>
  )
}

export default Calendar