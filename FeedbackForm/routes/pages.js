const { Router } = require('express');
const express = require('express');
const router = express.Router();
const data = require('../data/pages');




router.get('/',async (req,res)=>
{

res.render('pages/feedbackform',{})

})

router.post('/store',async(req,res)=>
{

username=req.body.username.trim()
email=req.body.email.trim()
rating=parseInt(req.body.rating)
feedback=req.body.feedback.trim()

    let response=await data.create(username,email,rating,feedback);
    res.render('pages/feedbackform',{})

})


module.exports= router;