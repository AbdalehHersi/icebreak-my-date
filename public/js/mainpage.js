
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

function getBucket() {
  console.log("INSIDE FUNCTION")
  fetch("/api/request/bucketlist")
  .then((res) => {
    console.log("SENT FETCH");
    console.log(res);
  })
  .catch((error) => {
    console.error(error)
  })
  .finally(function(){
    console.log("INSIDE FINALLY")
  })
}
const bucketButton = document.getElementById('btn-bucket');
console.log("BUCKET BUTTON PRESSED", bucketButton);
bucketButton.addEventListener('click', getBucket);
// document.getElementById('btn-hobby').addEventListener('click', getHobby);
