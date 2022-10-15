let paragraph = document.getElementById("apiResults");
let aLink = document.getElementById("hobbyLink");
let saveBtn = document.getElementById("btn-fav");  

function hideEl() {
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

function hideLink() {
    if (aLink.style.display === "block") {
      aLink.style.display = "none";
    } else {
      aLink.style.display = "none";
    }
}

function showLink() {
  if (aLink.style.display === "none") {
    aLink.style.display = "block";
  } else {
    aLink.style.display = "block";
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
    hideLink()
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
    console.log(data);
    paragraph.textContent = data.hobby;
    aLink.textContent = data.link; 
    showLink();
    showEl();
  } catch (error) {
    console.log(error)
  }
}


// HISTORICAL EVENTS

async function getFact() {
  const url = "/api/request/fact";
  try {
    hideLink()
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