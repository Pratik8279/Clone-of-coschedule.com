import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Home.module.css";

function Home() {
  return (
     <>
        <h1 id= {styles.h1}>Organize All Of Your Marketing In One Place. From Any Place.</h1>
        <p id= {styles.p}>Get more done in less time with the only work management software for marketers.</p>
        <Link to= ""><button id= {styles.btn}>Get Started Free</button></Link>
       <p id= {styles.p2}>Why not? It's free forever.</p>

       <img id= {styles.img} src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhome-calendar.png&w=1200&q=75'/>

      <div id= {styles.companies}>

      <h2 id= {styles.h2}>30,000 marketers start their day with CoSchedule</h2>
        <div id= {styles.companiesImg1}>
            <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-logo.webp&w=256&q=75" alt="" />
            <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fyamaha-logo.webp&w=256&q=75" alt="" />
            <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Funicef-logo.webp&w=256&q=75" alt="" />
            <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fconvertkit-logo.webp&w=256&q=75" alt="" />
            <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fwalgreens-logo.webp&w=256&q=75" alt="" />
        </div>
        <div id= {styles.companiesImg2}>
           <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fdictionary-com-logo.webp&w=256&q=75" alt="" />
           <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fp-and-g-logo.webp&w=256&q=75" alt="" />
           <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fschwans-logo.webp&w=256&q=75" alt="" />
        </div>

      </div>
       
       <h2 id= {styles.prod}>Our Products</h2>

       <div id= {styles.carrier1}>
              <div id= {styles.unit1}>
                      <img id= {styles.pic1} src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1200&q=100" alt="" />
                      <img id= {styles.icon1} src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=64&q=75" alt="" />
                      <h3 id= {styles.head}>Marketing Calendar</h3>
                      <p id= {styles.p1}>A calendar that helps you see, schedule, and share your marketing.</p>
                      <div id= {styles.list}>
                      <p>See everything together in one place</p>
                      <p>Share your progress with higher-ups</p>
                      <p>Show what your marketing is doing</p>
                      </div>
                    <button id= {styles.explore}>Explore More</button>
              </div>

              <div id= {styles.unit1}>
                      <img id= {styles.pic1} src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1200&q=100" alt="" />
                      <img id= {styles.icon1} src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=64&q=75" alt="" />
                      <h3 id= {styles.head}>Marketing Calendar</h3>
                      <p id= {styles.p1}>A calendar that helps you see, schedule, and share your marketing.</p>
                      <div id= {styles.list}>
                      <p>See everything together in one place</p>
                      <p>Share your progress with higher-ups</p>
                      <p>Show what your marketing is doing</p>
                      </div>
                    <button id= {styles.explore}>Explore More</button>
              </div>
       </div>


       <div id= {styles.carrier2}>
       <div id= {styles.unit1}>
                      <img id= {styles.pic1} src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1200&q=100" alt="" />
                      <img id= {styles.icon1} src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=64&q=75" alt="" />
                      <h3 id= {styles.head}>Marketing Calendar</h3>
                      <p id= {styles.p1}>A calendar that helps you see, schedule, and share your marketing.</p>
                      <div id= {styles.list}>
                      <p>See everything together in one place</p>
                      <p>Share your progress with higher-ups</p>
                      <p>Show what your marketing is doing</p>
                      </div>
                    <button id= {styles.explore}>Explore More</button>
              </div>

              <div id= {styles.unit1}>
                      <img id= {styles.pic1} src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1200&q=100" alt="" />
                      <img id= {styles.icon1} src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=64&q=75" alt="" />
                      <h3 id= {styles.head}>Marketing Calendar</h3>
                      <p id= {styles.p1}>A calendar that helps you see, schedule, and share your marketing.</p>
                      <div id= {styles.list}>
                      <p>See everything together in one place</p>
                      <p>Share your progress with higher-ups</p>
                      <p>Show what your marketing is doing</p>
                      </div>
                    <button id= {styles.explore}>Explore More</button>
              </div>
       </div>
  
    </>
  )
}

export default Home