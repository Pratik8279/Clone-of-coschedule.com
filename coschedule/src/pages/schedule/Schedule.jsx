
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider'
import { get_todoData } from '../../redux/todo/actions'
import styles from "./Schedule.module.css"


function Schedule() {
  const {logout} = useContext(AuthContext);
  const dispatch = useDispatch()
  const data= useSelector((state)=>state.todo.data);

  useEffect(()=>{
      dispatch(get_todoData())
  },[])


  const navigate= useNavigate();
  return (
    <>
    <div id= {styles.main}>
          <div id= {styles.sidebar}>
          <div>
            <img  onClick={()=>navigate("/")}  src="https://www.vhv.rs/dpng/d/408-4088622_senior-care-icon-grey-transparent-home-icon-hd.png" alt="" />
            </div>
            <div>
            <img src="https://icones.pro/wp-content/uploads/2021/03/icone-de-calendrier-gris.png" alt="" />
            </div>
            <div>
            <img src="https://cdn5.vectorstock.com/i/1000x1000/45/24/mobile-signal-icon-line-vector-21084524.jpg" alt="" />
            </div>
            <div>
            <img src="https://i.pinimg.com/originals/b5/71/03/b57103d22630558e5533a6f7d6baed62.jpg" alt="" />
            </div>
          </div>
     {/* side bar ends */}

           <div>
               {/* work calendar */}
                 <div id={styles.work}>
                          <div id={styles.first}>
                              <p>5</p>
                              <h2 onClick= {()=>navigate("/addschedule")}>+</h2>
                                {data.map((item)=>(
                                     
                                         <p id= {styles.list}>{item.title}</p>
                                     
                                ))}
                          </div>
                          <div id= {styles.second}>
                             <p>6</p>
                             <h2 onClick= {()=>navigate("/addschedule")}>+</h2>
                          </div>

                          <div id={styles.anotherShow}>
                            <div> <p>7</p>
                            <h2 onClick= {()=>navigate("/addschedule")}>+</h2>
                            </div>

                            <div> <p>8</p>
                            <h2 onClick= {()=>navigate("/addschedule")}>+</h2>
                            </div>
                            
                            <div> <p>9</p>
                            <h2 onClick= {()=>navigate("/addschedule")}>+</h2>
                            </div>
                            <div> <p>10</p>
                            <h2 onClick= {()=>navigate("/addschedule")}>+</h2>
                            </div>
                            <div> <p>11</p>
                            <h2 onClick= {()=>navigate("/addschedule")}>+</h2>
                            </div>
                          </div>
                 </div>
                 {/* show calendar */}
                   <div id= {styles.show}>
                           <div><p>12</p></div>
                           <div><p>13</p></div>
                           <div><p>14</p></div>
                           <div><p>15</p></div>
                           <div><p>16</p></div>
                           <div><p>17</p></div>
                           <div><p>18</p></div>
                           <div><p>19</p></div>
                           <div><p>20</p></div>
                           <div><p>21</p></div>
                           <div><p>22</p></div>
                           <div><p>23</p></div>
                           <div><p>24</p></div>
                           <div><p>25</p></div>
                           <div><p>26</p></div>
                           <div><p>27</p></div>
                           <div><p>28</p></div>
                           <div><p>29</p></div>
                           <div><p>30</p></div>
                           <div><p>july1</p></div>
                           <div><p>2</p></div>
                   </div>
           </div>
    </div>
    
    </>
  )
}

export default Schedule