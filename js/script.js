console.log("script.js loaded");

async function getDogFact() {
  const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
  const data = await response.json();
  const fact = data.facts[0];
  
  // Update the DOM with the dog fact
  const output = document.getElementById("dog-fact-output"); 
  output.textContent = fact;
}

getDogFact()

// getDogFact() code not shown
const button = document.getElementById("fetch-dog-btn"); 

button.addEventListener("click", function () { 
  getDogFact(); 
});