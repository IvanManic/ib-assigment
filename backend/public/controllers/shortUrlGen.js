var miniUrl = require('shortid');
const short = require('../models/short')



const shortUrlGen = (url) => {
    let shortUrl = miniUrl.generate()
    short.create({
        long: url,
        short: shortUrl
    })
    return (shortUrl)
}


module.exports = shortUrlGen;