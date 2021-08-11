/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function CommentCard (props) {
    const [userName, setUserName] = useState([])
    const userId = props.comment.user;
    useEffect(() => {
        async function fetchData(){
          const response = await axios.get('http://localhost:5000/users/'+userId);
          setUserName(response.data.userName);
          console.log("okkk"+response.data.userName)
         }
        fetchData();
      }, [userId])
    return(
       <div className='component rounded lg-shadow flex-col bg-whitepl-10 '>
           <div className='w-64 pt-3 pb-2 '>
               
                <p className='text-gray-600'>{userName} : {props.comment.comment}</p>
           </div>
       </div>
  )
}
export default CommentCard
