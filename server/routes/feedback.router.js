const express = require('express')
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req,res) =>{
    console.log('in router post', req.body.feeling, req.body.understand, req.body.supported, req.body.comments)
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "name") VALUES ($1, $2, $3, $4, $5)`
    pool.query(queryText, [req.body.feeling, req.body.understand, req.body.supported, req.body.comments, req.body.name]).then ((results) =>{
        res.sendStatus(201)
    }).catch ((err) => {
        res.sendStatus (500)
    })
})

router.delete('/', (req, res) => {
        console.log("in put", req.body.id)
        pool.query(`DELETE FROM "feedback" WHERE "id"=${req.body.id}`).then((response) =>{
        res.sendStatus(200)
    }).catch ((err) => {
        res.sendStatus(500)
    })
})


router.get('/', (req, res) => {
    console.log("in GET")
    pool.query(`SELECT * FROM "feedback" ORDER BY "date" ASC`).then((response) =>{
        res.send(response)
    }).catch((err) => {
        console.log('error', err)
        res.sendStatus(500)
    })
})

module.exports = router;