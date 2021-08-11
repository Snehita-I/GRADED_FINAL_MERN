import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

function ReactionCard (props) {
     
  return (
       <div className='component rounded lg-shadow flex-col bg-white  my-4 pl-10 '>
          
          
           <div className='w-64 pt-3 pb-2  mt-4 align-right'>
                <p className='text-gray-600 font-bold text-lg'>{props.announcement.announcementText}</p>
                
           </div>
           
       </div>
  )
}
export default ReactionCard
