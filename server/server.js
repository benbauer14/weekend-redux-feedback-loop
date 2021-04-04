const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
const feedbackRoute = require('./routes/feedback.router')
//POST route
app.use('/sendFeedback', feedbackRoute)
//GET route
app.use('/getFeedback', feedbackRoute)
//DELETE route
app.use('/delete', feedbackRoute)

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});