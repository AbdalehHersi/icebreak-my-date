let paragraph = document.getElementById("apiResults");
var saveBtn = document.getElementById("btn-fav");

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
  
  var favourite = paragraph.textContent;

    const response = await fetch('/api/favourites', {
      method: 'POST',
      body: JSON.stringify({favourite}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      console.error(error)
    }
};

hideEl();

// BUCKET LIST API

async function getBucket() {
  const url = "/api/request/bucketlist";
  try {
    const response = await fetch(url);
    const data = await response.json();
    paragraph.textContent = data.item;
    showEl();
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
    paragraph.textContent = data.hobby;
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
    showEl();
  } catch (error) {
    console.log(error)
  }
};

document.getElementById('btn-hobby').addEventListener('click', getHobby);
document.getElementById('btn-fact').addEventListener('click', getFact);
document.getElementById('btn-bucket').addEventListener('click', getBucket);
document.getElementById('btn-fav').addEventListener('click', saveFavourite);