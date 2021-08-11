/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react'

import { Link } from 'react-router-dom'
import { useEffect, useState, useParams } from 'react'
import axios from 'axios'
import CommentCard from './CommentCard.jsx'
function DisplayComments(props){
  const comments = props.comments
 //console.log('assignments: ', assignments)
  const commentItems = comments.map((comment) =>
      <CommentCard
        comment={comment}
        key={comment._id.toString()}
      />
  )
  return (
      <ul>{commentItems}</ul>
  )
}
function CommentForm(props) {
  const [data, setData] = useState([])
  const [comment, setComment] = useState('');
  const [commentId, setCommentId] = useState('');
  const [smile, setSmile] = useState(props.smile_count);
     const [think, setThink] = useState(props.think_count);
     const [heart, setHeart] = useState(props.heart_count);
     const [clap, setClap] = useState(props.clap_count);
     const [thumbsUp, setThumbsUp] = useState(props.thumbsUp_count);
     const [thumbsDown, setThumbsDown] = useState(props.thumbsDown_count);
  const userId = props.userId;
  const announcementId = props.announcementId;
  useEffect(() => {
    async function fetchData(){
    let dataTemp = []
     
      const response = await axios.get('http://localhost:5000/announcements/'+announcementId);
     
      response.data.commentsPosted.map(async (comment)=>{
      
      const response1 = await axios.get('http://localhost:5000/comments/'+comment);
      
      dataTemp.push(response1.data);
      setData([...dataTemp])
      }
      )
     }
    fetchData();
  }, [announcementId])

  const handleEmoji = (emoji,e) => {
    alert("entered")
    if(emoji=="smile"){
      let tmpsmile=smile;
      setSmile(tmpsmile+1);
    }
    else if(emoji=="clap"){
      let tmpclap=clap;
      setClap(tmpclap+1);
    }
    else if(emoji=="heart"){
      let tmpheart=heart;
      setHeart(tmpheart+1);
    }
    else if(emoji=="think"){
      let tmpthink=think;
      setThink(tmpthink+1);
    }
    else if(emoji=="thumpsUp"){
      let tmpthumbsUp=thumbsUp;
      setThumbsUp(tmpthumbsUp+1);
    }
    else if(emoji=="thumbsDown"){
      let tmpthumbsDown=thumbsDown;
      setThumbsDown(tmpthumbsDown+1);
    }
    
     axios({
      method: 'post',
      //http://localhost:5000/announcements/60bb8b78e963a3020099d3ad/60b4960b558c5556e85ca1bf/addComment
      url: 'http://localhost:5000/announcements/'+announcementId+'/'+userId+'/addReaction',
      data: {
        emoji: emoji,
        reactionId:emoji+userId
      }
    }).then(()=>
    alert("Announcement added")
    ).catch((err)=>
    alert("Annoucement not added"+err)
    )
  }

     const handleSubmit = async (event) => {
      
          //setSelectedTab(newValue)

          const response = await axios.get('http://localhost:5000/users/'+userId);
        
          axios({
            method: 'post',
            //http://localhost:5000/announcements/60bb8b78e963a3020099d3ad/60b4960b558c5556e85ca1bf/addComment
            url: 'http://localhost:5000/announcements/'+announcementId+'/'+userId+'/addComment',
            data: {
              comment: comment,
              commentId:commentId,
              user:response.data
            }
          }).then(()=>
          alert("Announcement added")
          ).catch((err)=>
          alert("Annoucement not added"+err)
          )
       
      }
  return (
     <div>
       <div>
       
          <button onClick={e=>{handleEmoji("smile",e)}}>&#128512;</button>
          <span>{smile}</span>
          <button onClick={e=>{handleEmoji("think",e)}}>&#129300;</button>
          <span>{think}</span>
          <button onClick={e=>{handleEmoji("heart",e)}}>&#128151;</button>
          <span>{heart}</span>
          <button onClick={e=>{handleEmoji("thumbsUp",e)}}>&#128077;</button>
          <span>{thumbsUp}</span>
          <button onClick={e=>{handleEmoji("clap",e)}}>&#128079;</button>
          <span>{clap}</span>
          <button onClick={e=>{handleEmoji("thumbsDown",e)}}>&#128078;</button>
          <span>{thumbsDown}</span>
       </div>
     <form  onSubmit={handleSubmit} className='container mt-1 py-1 bg-purple-300 my-auto pr-2 mr-2 border-white '>

     <div className='my-3 w-4/5'>
         <label className="text-black">
             Comment :
             <input type="text" className="text-gray-1000 rounded-lg" value={comment} onChange={(event) => { setComment(event.target.value) }} />
         </label>
     </div>
     <div className='my-3 w-4/5'>
         <label className="text-black">
             Comment Id:
             <input type="text" className="text-gray-1000 rounded-lg" value={commentId} onChange={(event) => { setCommentId(event.target.value) }} />
         </label>
     </div>
     
     <button className='bg-purple-200 text-purple-700 w-48 h-8 rounded-lg' type="submit" value="Submit">COMMENT</button>
      </form>
      <DisplayComments comments={data}/>
      </div>
  );
}
export default CommentForm;
