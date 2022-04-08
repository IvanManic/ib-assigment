var express = require('express');
var router = express.Router();
var validator = require('../public/controllers/isValidURL')
var miniUrl = require('../public/controllers/shortUrlGen')
var mongoose = require('mongoose')

var mongo_conn_str = ''
console.log("Env: " + process.env.SHORTNER_ENV)
if (process.env.SHORTNER_ENV === 'DOCKER') {
    mongo_conn_str = 'mongodb://admin:password@mongo-db:27017/shortner'
} else {
    mongo_conn_str = 'mongodb://localhost:27017/shortner'
}

mongoose.connect(mongo_conn_str, {
    useNewUrlParser: true, useUnifiedTopology: true
})
router.post('/', (req, res) => {
    const url = req.query.url
    let isValid = validator(url)
    console.log("URL valid: " + isValid)
    if (validator(url)) {
        return res.json({ "shortenedUrl": "http://localhost:5000/" + miniUrl(url) })
    }
    else {
        return res.json({ "message": url + "- is not valid url" })
    }
})




module.exports = router;
