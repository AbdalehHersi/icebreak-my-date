let paragraph = document.getElementById("apiResults");

function hideEl() {
  var saveBtn = document.getElementById("btn-fav");
  if (saveBtn.style.display === "block") {
    saveBtn.style.display = "none";
  } else {
    saveBtn.style.display = "none";
  }
}

function showEl() {
  var saveBtn = document.getElementById("btn-fav");
  if (saveBtn.style.display === "none") {
    saveBtn.style.display = "block";
  } else {
    saveBtn.style.display = "block";
  }
}

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
  } catch (error) {
    console.log(error)
  }
}

document.getElementById('btn-hobby').addEventListener('click', getHobby);
document.getElementById('btn-fact').addEventListener('click', getFact);
document.getElementById('btn-bucket').addEventListener('click', getBucket);