import express from 'express';
import Reaction from '../models/reactionModel.js'
import User from '../models/userModel.js'
const router = express.Router()
router.route('/').get((req, res) => {
  Reaction.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
    Reaction.findById(req.params.id)
      .then(r => res.json(r))
      .catch(err => res.status(400).json('Error: ' + err));
  });
export default router;