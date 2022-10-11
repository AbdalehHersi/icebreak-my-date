const router = require('express').Router();
const axios = require('axios');

// BUCKET LIST

router.get("/bucketlist", async (req, res) => {
  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/bucketlist', {
      headers: {
        'X-Api-Key': process.env.API_KEY,
      },
    })
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    throw new Error(error.message);
  }
})


// HOBBIES

var category = 'general';

router.get("/hobbies", async (req, res) => {
  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/hobbies?category=' + category, {
      headers: {
        'X-Api-Key': process.env.API_KEY,
      },
    })
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    throw new Error(error.message);
  }
})

// FACT

router.get("/fact", async (req, res) => {
  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/facts?limit=' + 1, {
      headers: {
        'X-Api-Key': process.env.API_KEY,
      },
    })
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    throw new Error(error.message);
  }
})


module.exports = router;