var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')


const Suggestionsdata = require('../database/index.js')

router.get('/products', (req, res) => {
  Suggestionsdata.find()
  .exec()
  .then(doc => {
    //console.log(doc);
    res.send(doc)
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      err
    });
  })
});
router.post('/search', (req, res) => {
  console.log("req.body value HERE", req.body.productname)
  Suggestionsdata.find({"productname": { $regex: req.body.productname, $options: 'i'}})
  .exec()
  .then(doc => {
    //console.log(doc);
    res.send(doc)
    res.status(200).json(doc);
  })
  .catch(err => {
    console.log(err.errmsg);
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
