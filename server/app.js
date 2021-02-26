const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const apiKey = require('../api-key.js')
const url = 'https://data.cityofchicago.org/resource/ydr8-5enu.json';
const headers = {
  'X-Auth-Token': apiKey
}
const params = {
  $limit: 10,
  $order: 'issue_date DESC'
}

const app = express();

app.use(express.static('./client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/getPermits', (req, res) => {
  axios.get(url, {
    params: params,
    headers: headers
  })
  .then(results => {
    console.log('results');
    res.send(results.data);
  })
  .catch(error => {
    console.log('error');
    console.log(error);
  })
})

module.exports = app;
