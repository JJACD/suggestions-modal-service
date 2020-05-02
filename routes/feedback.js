var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

const Feedbackdata = require('../database/index.js')

router.post('/feedback', (req, res, next) =>{
    const feedback = new Feedbackdata({
      _id: new mongoose.Types.ObjectId(),
      rec_rating: req.body.recrating,
      exp_rating: req.body.exprating,
      comment: req.body.comment,
      followup: {
        request: req.body.request,
        name: req.body.name,
        email: req.body.email
      },
      screencapture: req.body.scrnurl
    });
    Feedbackdata
    .save()
    .then( result => {
      console.log(result);
    });
    .catch( err => console.log(err))
    res.status(201).json({
      message: 'Handling POST request to suggestions',
      createdFeedback : feedback
    });
});