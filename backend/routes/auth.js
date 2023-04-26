const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

router.post('/' ,[
  body('name').isLength({min : 3}),
  body('email').isEmail(),
  body('password').isLength({min : 5}),
], (req, res)=>{
    const result = validationResult(req);
  if (result.isEmpty()) {
    return res.status(400).json({errors : errors.array()});
  }
  User.create({
    name : req.body.name,
    password : req.body.password,
    email : req.body.email,
  }).then(user=>res.json(user));
  res.send(req.body);
})

module.exports = router;