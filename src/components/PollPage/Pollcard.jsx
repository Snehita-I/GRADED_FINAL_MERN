import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
function OptionCard(props){
    let option = props.option;
  return (
       <button>{option}</button>
  )
}

function PollOptions (props) {
    //assignmentsOfClass
    const options = props.options;
    
    const announcementItems = options.map((option) =>
        <OptionCard
          option={option}
          key={option._id}
        />
    )
    return (
        <ul>{announcementItems}</ul>
    )
  }
function PollCard (props) {
      
      //  let dataTemp = [];
       
      //  const [data, setData] = useState([])
      //  console.log("options"+props.poll.pollOptions)
      //  props.poll.pollOptions.map(async (option)=>{
      //   dataTemp.push(option.option_name);
      //   setData([...dataTemp]);
      //  })
      //  console.log("data  "+data)
  return (
       <div className='component rounded lg-shadow flex-col bg-white  my-4 pl-10 '>
            <div className='w-64 pt-3 pb-2  mt-4 align-right'>
                <p className='text-gray-600 font-bold text-lg'>{props.poll.pollText}</p>
                <button>Yes</button>
                <button>No</button>
           </div>
        </div>
  )
}

export default PollCard
