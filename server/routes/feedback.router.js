// const express = require('express')
// const router = express.Router();
// const pool = require('../modules/pool')

// router.post('/', (req,res) =>{
//     console.log('in router post')
//     let queryText = (`INSERT INTO "feedback" (feeling, understanding, support, comments) 
//                     VALUES ($1, $2, $3. $4. $5, $6)`)
//     pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]).then ((results) =>{
//         res.sendStatus(201)
//     }).catch ((err) => {
//         res.sendStatus (500)
//     })
// })