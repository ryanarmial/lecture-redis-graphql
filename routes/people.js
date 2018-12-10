const express = require('express');
const router = express.Router();
const axios = require('axios')
const redis = require("redis"),
    client = redis.createClient();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // const { data } = await axios.get('https://api.opendota.com/api/heroes')
  client.get('heroes', async (err, result) => {
    if(result == null) {
      const { data } = await axios.get('https://api.opendota.com/api/heroes')
      client.set('heroes', JSON.stringify(data), 'EX', 10);
      res
      .status(200)
      .json(data)
    } else {
      res
      .status(200)
      .json(result)
    }
  })
});

router.get('/simpan', async function(req, res, next) {
  
  res.send('berhasil')
});

module.exports = router;
