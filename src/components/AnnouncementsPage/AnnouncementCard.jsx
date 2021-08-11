import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AssignmentDetailPage from '../AssignmentDetailPage/AssignmentDetailPage'
import CommentForm from '../Comments/CommentForm'
import ReactionCard from './ReactionCard'
import axios from 'axios'
function ReactionsList (props) {
     //assignmentsOfClass
     const reactions = props.reactions;
     
     const reactionItems = reactions.map((reaction) =>
         <ReactionCard
           reaction={reaction}
           key={reaction._id}
            
         />
     )
     return (
         <ul>{reactionItems}</ul>
     )
   }
function AssignmentCard (props) {
     console.log("entered")
     const [data, setData] = useState([])
     const [space,setSpace] = useState(['  ']);
  

  return (
       <div className='component rounded lg-shadow flex-col bg-white  my-4 pl-10 '>
          
          
           <div className='w-64 pt-3 pb-2  mt-4 align-right'>
                <p className='text-gray-600 font-bold text-lg'>{props.announcement.announcementText}</p>
           </div>
           <CommentForm userId={props.userId} 
           announcementId={props.announcement._id}
           smile_count={props.announcement.smile_count}
           think_count={props.announcement.think_count}
           heart_count={props.announcement.heart_count}
           clap_count={props.announcement.clap_count}
           thumbsUp_count={props.announcement.thumbsUp_count}
           thumbsDown_count={props.announcement.thumbsDown_count}
           />

       </div>
  )
}

export default AssignmentCard
