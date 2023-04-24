const express = require('express');
const router = express.Router();
const { query, validationResult } = require('express-validator');

router.post('/' ,query('person').notEmpty(), (req, res)=>{
    const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(`Hello, ${req.query.person}!`);
  }

  res.send({ errors: result.array() });
})

module.exports = router;