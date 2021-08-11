import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function PollOptionsList (props) {
    //assignmentsOfClass
    const pollOptions = props.pollOptions;
    console.log(pollOptions.length)
    const pollOptionsItems = pollOptions.map((pollOption) =>
    <div>
        <span>
        <p className='text-gray-600 text-lg'>{pollOption.option_code}</p>
        <p className='text-gray-600 text-lg'>{pollOption.option_name}</p>
        </span>
    </div>
        
    )
    return (
        <ul>{pollOptionsItems}</ul>
    )
  }
function PollCard (props) {
    console.log("PollCard")
  return (
       <div className='component rounded lg-shadow flex-col bg-white  my-4 pl-10 '>
           <div className='w-64 pt-3 pb-2  mt-4'>
                <p className='text-gray-600 font-bold text-lg'>{props.poll.pollText}</p>
           </div>

           <div className='w-3/4 pt-2 pb-4'>
                <p className='text-gray-500 text-md'>{props.assignment.description.substring(0, 80)}</p>
           </div>

           {/* <Link className='rounded-lg w-48 py-1 bg-purple-500 hover:bg-purple-400 ' to={
    {
      pathname: '/assignmentDetailPage/' + props.userId + '/' + props.userName,
      state: { assignment: props.assignment }
    } }> Go to Assignment </Link> */}

           <div className='grid grid-cols-6 gap-4'>
                <PollOptionsList pollOptions={props.poll.pollOptions} />
           </div>
       </div>
  )
}
export default PollCard