// BUCKET LIST
function getHobby() {

    fetch('https://api.api-ninjas.com/v1/bucketlist',{
        headers: {
          'X-Api-Key': 'cv/3TTGn9rsxmhNJCyXxtw==XZWUQGC4DsfeUJxP'
        },
      }).then((res)=>{
          return res.json()
      })
      .then((data)=>{
          console.log(data)
      })

}

document.getElementById('btn-hobby').addEventListener('click', getHobby)
