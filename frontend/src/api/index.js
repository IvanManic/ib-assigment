//get all short URLs
import axios from 'axios'
export const getShortUrls = async () => await axios.get('http://localhost:5000/');
export const createShortUrl = async (url) => await axios.post('http://localhost:5000/shorten/', url, { params: { url } });