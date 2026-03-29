console.log("script.js loaded");

// Store the container and button
const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");

// Array to store images
let images = [];

// Function to fetch GIF data from Giphy
async function getGifs() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=9r3pFzDO8hcv09qFzGnQkcfM6d7QYNPQ&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
  );

  const data = await response.json();

  // Store images in the images array
  images = data.data.map(function (gif) {
    return gif.images.original.url;
  });

  // Show the images
  console.log(images);
}

// Button click event
button.addEventListener("click", async function () {
  // Clear old GIFs so they do not duplicate every click
  gifContainer.innerHTML = "";

  // Fetch the GIFs first
  await getGifs();

  // Show them on the page
  for (let i = 0; i < images.length; i++) {
    gifContainer.innerHTML += `<img src="${images[i]}" class="col-3 mb-3">`;
  }
});