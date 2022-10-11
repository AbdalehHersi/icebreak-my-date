
// // BUCKET LIST
// function getHobby() {

//   return fetch('https://api.api-ninjas.com/v1/bucketlist', {
//     headers: {
//       'X-Api-Key': 'cv/3TTGn9rsxmhNJCyXxtw==XZWUQGC4DsfeUJxP'
//     },
//   }).then((res) => {
//     return res.json()
//   })
//     .then((data) => {
//       console.log(data)
//     })
// }

// async function getHobby2() {
//   try {
//     const response = await fetch('https://api.api-ninjas.com/v1/bucketlist', {
//       headers: {
//         'X-Api-Key': 'cv/3TTGn9rsxmhNJCyXxtw==XZWUQGC4DsfeUJxP'
//       }
//     })
//     const data = await response.json()
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }

async function getBucket() {
  const url = "/api/request/bucketlist";
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}


const bucketButton = document.getElementById('btn-bucket');
console.log("BUCKET BUTTON PRESSED", bucketButton);
bucketButton.addEventListener('click', getBucket);
// document.getElementById('btn-hobby').addEventListener('click', getHobby);
