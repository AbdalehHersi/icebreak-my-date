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
  if (aLink.textContent) {
    var favourite = aLink.textContent;

    const response = await fetch('/api/favourites', {
      method: 'POST',
      body: JSON.stringify({ favourite }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const btnContainer = document.getElementById("btnContainer");
      btnContainer.classList.add("saveValidateError");
      setTimeout(() => {
        btnContainer.classList.remove("saveValidateError");
      }, 2000)
      console.error(error)
    } else {
      const btnContainer = document.getElementById("btnContainer");
      btnContainer.classList.add("saveValidate");
      setTimeout(() => {
        btnContainer.classList.remove("saveValidate");
      }, 2000)
    }
  } else {
    var favourite = paragraph.textContent;

    const response = await fetch('/api/favourites', {
      method: 'POST',
      body: JSON.stringify({ favourite }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const btnContainer = document.getElementById("btnContainer");
      btnContainer.classList.add("saveValidateError");
      setTimeout(() => {
        btnContainer.classList.remove("saveValidateError");
      }, 2000)
      console.error(error)
    } else {
      const btnContainer = document.getElementById("btnContainer");
      btnContainer.classList.add("saveValidate");
      setTimeout(() => {
        btnContainer.classList.remove("saveValidate");
      }, 2000)
    }
  }
};

hideEl();

// BUCKET LIST API

async function getBucket() {
  const url = "/api/request/bucketlist";
  try {
    aLink.textContent = "";
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
    paragraph.textContent = "";
    aLink.setAttribute("href", data.link);
    aLink.textContent = data.hobby;
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
    aLink.textContent = "";
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