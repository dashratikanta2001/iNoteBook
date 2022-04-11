const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj={
        a:'rati',
        number:1234
    }
    res.json(obj)
})

module.exports = router