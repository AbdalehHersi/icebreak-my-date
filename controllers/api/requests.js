const router = require('express').Router();
const axios = require('axios');


router.get("/bucketlist", async (req, res) => {
  return axios.get('https://api.api-ninjas.com/v1/bucketlist', {
    headers: {
      'X-Api-Key': 'cv/3TTGn9rsxmhNJCyXxtw==XZWUQGC4DsfeUJxP'
    }
  })
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
})


// BUCKET LIST


router.get({
  url: 'https://api.api-ninjas.com/v1/bucketlist',
  headers: {
    'X-Api-Key': 'cv/3TTGn9rsxmhNJCyXxtw==XZWUQGC4DsfeUJxP'
  },
}, function (error, response, body) {
  if (error) return console.error('Request failed:', error);
  else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});

// HOBBIES

// const request = require('request');
var category = 'general';
router.get({
  url: 'https://api.api-ninjas.com/v1/hobbies?category=' + category,
  headers: {
    'X-Api-Key': 'cv/3TTGn9rsxmhNJCyXxtw==XZWUQGC4DsfeUJxP'
  },
}, function (error, response, body) {
  if (error) return console.error('Request failed:', error);
  else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});

// HISTORICAL EVENT  

// const request = require('request');
var text = 'roman empire';
router.get({
  url: 'https://api.api-ninjas.com/v1/historicalevents?text=' + text,
  headers: {
    'X-Api-Key': 'cv/3TTGn9rsxmhNJCyXxtw==XZWUQGC4DsfeUJxP'
  },
}, function (error, response, body) {
  if (error) return console.error('Request failed:', error);
  else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});

module.exports = router;