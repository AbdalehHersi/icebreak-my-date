let paragraph = document.getElementById("apiResults");
let aLink = document.getElementById("hobbyLink");
let saveBtn = document.getElementById("btn-fav");  

function hideEl() {
  var saveBtn = document.getElementById("btn-fav");
  if (saveBtn.style.display === "block") {
    saveBtn.style.display = "none";
  } else {
    saveBtn.style.display = "none";
  }
}

function showEl() {
  if (saveBtn.style.display === "none") {
    saveBtn.style.display = "block";
  } else {
    saveBtn.style.display = "block";
  }
};




const saveFavourite = async () => {
  
  console.log(paragraph.textContent);
  var favourite = paragraph.textContent;
 
    const response = await fetch('/api/favourites', {
      method: 'POST',
      body: JSON.stringify({favourite}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/main');
    } else {
      alert(response.statusText);
    }
  
};


// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

// document.querySelector(".login-form").addEventListener('submit', loginFormHandler);

hideEl();

// BUCKET LIST API

async function getBucket() {
  const url = "/api/request/bucketlist";
  try {
    const response = await fetch(url);
    const data = await response.json();
    paragraph.textContent = data.item;
  } catch (error) {
    console.log(error)
  }
}

// HOBBIES

async function getHobby() {
  const url = "/api/request/hobbies";
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    paragraph.textContent = data.hobby;
    aLink.textContent = data.link; 
    
    showEl();
  } catch (error) {
    console.log(error)
  }
}


// HISTORICAL EVENTS

async function getFact() {
  const url = "/api/request/fact";
  try {
    const response = await fetch(url);
    const data = await response.json();
    paragraph.textContent = data[0].fact;
  } catch (error) {
    console.log(error)
  }
};



document.getElementById('btn-hobby').addEventListener('click', getHobby);
document.getElementById('btn-fact').addEventListener('click', getFact);
document.getElementById('btn-bucket').addEventListener('click', getBucket);
document.getElementById('btn-fav').addEventListener('click', saveFavourite);