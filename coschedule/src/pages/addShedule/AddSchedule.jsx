import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { get_todoData, post_todo } from '../../redux/todo/actions'
import styles from "./AddSchedule.module.css"
import Product from './Sidebar'

function AddSchedule() {
  const [text,setText] = useState("")
  const data= useSelector((state)=>state.todo.data);
  const error= useSelector((state)=>state.todo.error);
  const loading= useSelector((state)=>state.todo.loading);
  const navigate= useNavigate();
  console.log(data)
    const dispatch = useDispatch();
   useEffect(()=>{
      dispatch(get_todoData())
   },[])

   const handleChange= (e)=>{
      setText(e.target.value)
   }
  
   const handleClick = ()=>{
      dispatch(post_todo(text)).then(()=>{
        dispatch(get_todoData())
      })
   }

    if(error)return <div>Something Went Wrong here...</div>
  return (
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

          <div id= {styles.unit}>
                  <div id= {styles.unit1}>
                         <h4>Lets get To Work!</h4>
                         <p>Organize your project by adding custom attachments.</p>
                         <div id={styles.circle}>
                           <img src="https://www.seekpng.com/png/detail/52-522437_x-cross-close-symbol-icon-button-gui-close.png" alt="" />
                         </div>
                         <div id= {styles.iconContain}>
                               <div id= {styles.first}>
                                       <div>
                                            <img src= "https://cdn4.iconfinder.com/data/icons/photography-and-video-ui/24/_t-512.png"/>
                                            <p>Text Editor</p>
                                       </div>
                                       <div>
                                        <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_77217643bee6578bf2bde1b69e038bbf/headline-studio.png" alt="" />
                                        <p>Headline</p>
                                       </div>
                                       <div>
                                        <img src="https://app.coschedule.com/img/empty-file-f8025d61ea85a4615ee15a35c7640718.svg" alt="" />
                                        <p>Files</p>
                                       </div>
                                       <div>
                                        <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png" alt="" />
                                        <p>Google Doc</p>
                                       </div>
                               </div>
                                 
                                 <div id= {styles.second}>
                                        <div>
                                        <img src="https://abilitynet.org.uk/sites/abilitynet.org.uk/files/admin/ANNOUNCEMENT-Grey.png" alt="" />
                                        <p>Social Campaign</p>
                                       </div>
                                       <div>
                                        <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFnkmwQrxwIEQ/company-logo_200_200/0/1631798144053?e=2147483647&v=beta&t=IdiiOsjJRWCbKl8KVn6QPCt-BHZnS-RajJ-F15wfZko" alt="" />
                                        <p>Linked Projects</p>
                                       </div>
                                 </div>
                         </div>
                  </div>
           {/* first unit ends */}

                  <div id= {styles.todoContain}>
                        <h4>Tasks</h4>
                          <div>
                              {data.map((item,index)=>(
                                <>
                                   {loading && <div>Loading...</div>}
                                  <p id={styles.item}>{index+1}.  {item.title}</p>
                                  </>
                              ))}
                          </div>
                      <input type="text" placeholder='New task...' onChange= {handleChange}/>
                      <p onClick={handleClick} id= {styles.p}>+Schedule</p>
        

                  </div>
          </div>
    </div>
  )
}

export default AddSchedule