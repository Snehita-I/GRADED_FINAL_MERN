import express from 'express';
import Announcement from '../models/announcementModel.js';
import Comment from '../models/commentModel.js'
import Reaction from '../models/reactionModel.js'
import User from '../models/userModel.js'
const router = express.Router()
router.route('/').get((req, res) => {
  Announcement.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Announcement.findByIdAndDelete(req.params.id)
    .then(() => res.json('Assignment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Announcement.findById(req.params.id)
    .then(assignment => res.json(assignment))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id/:userId/addComment').post((req,res) =>{

  //REMEMBER:: studid id the one who has logged in
  const comment = req.body.comment;
  const commentId = req.body.commentId;
  console.log("comment" + comment);
  console.log("commentiD" + commentId);
  User.findById(req.params.userId)
    .then(user => {
      const newComment = new Comment({
        comment,
        commentId,
        user
      });
      newComment.save()
      .then(() => 
      {
        Announcement.findById(req.params.id).then((announcement) => {
          console.log("NEWWWWWWWW         " + newComment);
          
          announcement.commentsPosted.push(newComment);
        
            announcement.save().then(()=>{
              console.log('Comment Added');
            });
         console.log("aaa   "+announcement)
          
        });

      }).catch(err=>console.log("Err   "+err));
    })
    .catch(err => res.status(400).json('Error: ' + err));

 

  
});

router.route('/:id/:userId/addReaction').post((req,res) =>{

 
  const emoji = req.body.emoji;
  const reactionId = req.body.reactionId;
  console.log("emoji" + emoji);
  console.log("reactionId" + reactionId);
  User.findById(req.params.userId)
    .then(user => {
      const newReaction = new Reaction({
        emoji,
        reactionId,
        user
      });
      newReaction.save()
      .then(() => 
      {
        Announcement.findById(req.params.id).then((announcement) => {
          console.log("NEWWWWWWWW         " + newReaction);
          if(emoji==="smile")announcement.smile_count=announcement.smile_count+1;
          else if(emoji==="heart")announcement.heart_count=announcement.heart_count+1;
          else if(emoji==="clap")announcement.clap_count=announcement.clap_count+1;
          else if(emoji==="think")announcement.think_count=announcement.think_count+1;
          else if(emoji==="thumbsUp")announcement.thumbsUp_count=announcement.thumbsUp_count+1;
          else if(emoji==="thumbsDown")announcement.thumbsDown_count=announcement.thumbsDown_count+1;
          announcement.reactions.push(newReaction);
        
            announcement.save().then(()=>{
              console.log('Reaction Added');
            });
         console.log("aaa   "+announcement)
          
        });

      }).catch(err=>console.log("Err   "+err));
    })
    .catch(err => res.status(400).json('Error: ' + err));

 

  
});

export default router;