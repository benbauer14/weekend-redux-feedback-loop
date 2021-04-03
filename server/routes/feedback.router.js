const express = require('express')
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req,res) =>{
    console.log('in router post', req.body.feeling, req.body.understand, req.body.supported, req.body.comments)
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`
    pool.query(queryText, [req.body.feeling, req.body.understand, req.body.supported, req.body.comments]).then ((results) =>{
        res.sendStatus(201)
    }).catch ((err) => {
        res.sendStatus (500)
    })
})

module.exports = router;