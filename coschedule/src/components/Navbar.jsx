import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div id={styles.nav}>
      <div id={styles.unit1}>
        <img
          id={styles.img}
          src="https://mma.prnewswire.com/media/846690/CoSchedule_Logo.jpg?p=twitter"
          alt=""
        />
        <div>
          <h4 id={styles.l1}>Products</h4>
          {/* <div>
              
          </div> */}
        </div>
        <div id={styles.l2Contain}>
          <h4 id={styles.l2}>Why coschedule</h4>
             <div id={styles.drop2}>
                <div>
                <h4>Customer Stories</h4>
                 <p>See how coschedule customers have found success</p>
                </div>
                 <div>
                 <h4>Build Your Case Coschedule</h4>
                 <p>Get your custom ROI report & see what your team could save by switching to coschedule!</p>
                 </div>
             </div>
        </div>
        <div>
          <h4 id={styles.l3}>Resources</h4>
        </div>
        <div>
          <h4 id={styles.l}>Pricing</h4>
        </div>
      </div>

      <div id={styles.unit2}>
        <div>
          <h4 id={styles.h4}>Sign In</h4>
        </div>

        <div>
          <h4>Get A Demo</h4>
        </div>

        <button id={styles.btn}>Create My Calendar</button>
      </div>
    </div>
  );
}

export default Navbar;
