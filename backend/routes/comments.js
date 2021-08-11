import express from 'express';
import Comment from '../models/commentModel.js'
import User from '../models/userModel.js'
const router = express.Router()
router.route('/').get((req, res) => {
  Comment.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Comment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Comment.findById(req.params.id)
    .then(comment => res.json(comment))
    .catch(err => res.status(400).json('Error: ' + err));
});
export default router;