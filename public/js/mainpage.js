let paragraph = document.getElementById("apiResults");

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