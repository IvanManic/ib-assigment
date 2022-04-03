var express = require('express');
var router = express.Router();
const short = require('../public/models/short')

router.get('/', async (req, res) => {
    //if (shortUrl == null) return res.sendStatus(404)
    const urls = await short.find()
    console.log(urls)
    res.send(urls)
})



router.get('/:shortUrl', async (req, res) => {
    const shortUrl = await short.findOne({ short: req.params.shortUrl })
    if (req.params.shortUrl == null) return res.sendStatus(404)
    console.log(shortUrl.long)
    res.redirect(shortUrl.long)
})

module.exports = router;