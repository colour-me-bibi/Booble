const localImageURI = chrome.extension.getURL("images/booble.png");
const siteURL = "https://melancholicredux.co";

// Get elements to modify
let div_lga = document.getElementById("lga");
let img_hplogo = document.getElementById("hplogo");
let div_searchform = document.getElementById("searchform");
let div_main = document.getElementById("main");
let searchButton = document.querySelectorAll('input[value="Google Search"]')[1];
let luckyButton = document.querySelectorAll('input[value="I\'m Feeling Lucky"]')[1];

// Change the search buttons' text
searchButton.value = "Booble Search";
luckyButton.value = "I'm Feeling Perky";

// Adjust main container elements' formatting
div_lga.style = "height: auto";
div_main.style = "height: auto";
div_searchform.style = "margin-top: 70px";

// Modify img_hplogo to fit the new image
img_hplogo.src = localImageURI;
img_hplogo.title = "Anime Tiddies XD";
img_hplogo.removeAttribute("srcset");
img_hplogo.removeAttribute("height");
img_hplogo.width = 400;
img_hplogo.style = "margin-left: 22px";

// Create link element to my site
let a_mysite = document.createElement("a");
a_mysite.href = siteURL;
a_mysite.target = "_blank";

// Wrap img_hplogo in a_mysite element
a_mysite.appendChild(img_hplogo.cloneNode(true));
img_hplogo.parentNode.replaceChild(a_mysite, img_hplogo);

// TODO check for holiday page and change accordingly
