var validUrl = require('valid-url');
const isValidURL = (url) => {
    if (validUrl.isUri(url)) {
        return true;
    } else {
        return false;
    }

}

module.exports = isValidURL;