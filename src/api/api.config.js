const axios = require('axios');

const api = axios.create({
  baseURL: '/api'
});

module.exports = api;
