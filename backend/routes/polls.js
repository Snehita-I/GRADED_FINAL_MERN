import express from 'express';
import Poll from '../models/pollModel.js';

const router = express.Router()
router.route('/').get((req, res) => {
  Poll.find()
    .then(polls => res.json(polls))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Poll.findByIdAndDelete(req.params.id)
    .then(() => res.json('Poll deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Poll.findById(req.params.id)
    .then(poll => res.json(poll))
    .catch(err => res.status(400).json('Error: ' + err));
});




export default router;