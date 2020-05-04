var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

const Suggestionsdata = require('../database/index.js')

router.get('/products', (req, res) => {
  Suggestionsdata.find()
  .exec()
  .then(doc => {
    console.log(doc);
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      err
    });
  })
});

// router.get('/:productId', function(req, res, next) {
//   const id = req.params.productId;
//   Suggestionsdata.findById(id)
//   .exec()
//   .then(doc => {
//     console.log(doc)
//     res.status(200).json(doc);
//   })
//   .catch(err => {
//     console.log(err));
//     res.status(500).json({
//       err
//     };
//   })
// });

module.exports = router;
