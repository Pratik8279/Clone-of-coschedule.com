import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
  return (
    <>
    <div id= {styles.contain}>
        {/* first box */}
            <div id= {styles.unit1}>
                  <img id= {styles.img} src ="https://yt3.ggpht.com/ytc/AKedOLSGwnEukofRe7SRyExHzC70QJU2QPOVFpew1gTNQA=s900-c-k-c0x00ffffff-no-rj"/>
                  <p>Sign Up</p>
                  <p>Request A Demo</p>
                  <p>Sign In</p>
                  <div id= {styles.imgContain}>
                      <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fg2crowd-badge.png&w=256&q=75" alt="" />
                      <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fgartner-badge.png&w=64&q=75" alt="" />
                      <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-badge.png&w=48&q=75" alt="" />
                  </div>
            </div>

           {/* second box */}

            <div>
                     <div id= {styles.products}>
                            <h3>PRODUCTS</h3>
                            <div>
                                <img src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=64&q=75" alt="" />
                                <p>Marketing Calender</p>
                            </div>                          
                            <div>
                                <img src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-suite-product-icon.png&w=64&q=75" alt="" />
                                <p>Marketing Suite</p>                               
                            </div>                        
                            <div>
                                <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_77217643bee6578bf2bde1b69e038bbf/headline-studio.png" alt="" />
                                <p>Headline Studio</p>                               
                            </div>                           
                            <div>
                                <img src="data:image/png;base64,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" alt="" />
                                <p>Actionalble Marketing Institute</p>         
                            </div>                          
                     </div>
     
                 <div id= {styles.products2}>
                       <h3>RESOURCES</h3>
                        <p>Marketing Blog</p>
                        <p>CoSchedule Guide</p>
                        <p>Marketing Strategy Report</p>
                        <p>Agile Marketing Guide</p>
                        <p>Actionable Marketing Podcast</p>
                        <p>10x Marketing Formula Book</p>
                        <p>Get Started With Agile Marketing Book</p>
                       </div>                   
            </div>

           {/* Third box */}

            <div>
                     <div id= {styles.products3}>
                           <h3>WHY COSCHEDULE</h3> 
                           <p>Customer Stories</p>
                           <p>Support</p>
                           <p>Product Announcements</p>
                           <p>Pricing</p>
                     </div>

                     <div id= {styles.products4}>
                           <h3>TOPIC LIBRARIES</h3> 
                           <p>Marketing</p>
                           <p>Marketing Ideas</p>
                           <p>Marketing Strategy</p>
                           <p>Content Marketing</p>
                     </div>
            </div>

            {/* Fourth box */}
            <div>
            <div id= {styles.products3}>
                           <h3>COMPANY</h3> 
                           <p>About</p>
                           <p>Jobs</p>
                           <p>Press</p>
                           <p>Contact Us</p>
                           <p>Affiliate Program</p>
                     </div>

                     <div id= {styles.products4}>
                           <h3>TOOLS</h3> 
                           <p>Headline Analyzer</p>
                           <p>Email Subject Line Tester</p>
                           <p>Social Message Optimizer</p>
                           <p>Marketing Dictionary</p>
                     </div>
            </div>
    </div>
        <div id= {styles.foot}>
             <p>© Copyright 2022, all rights reserved. See our <a href="">Terms & Policies</a> </p>
        </div>
    </>
  )
}

export default Footer