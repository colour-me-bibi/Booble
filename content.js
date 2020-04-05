/*
TODOs
    Change the image, retain attributes
    Change image height to be porportional to the width of the searchbar
    Change the manifest to include any google page
*/

const localImageURI = chrome.extension.getURL("images/booble.png");
const siteURL = "https://melancholicredux.co";

document.getElementById('searchform').style = "margin-top: 120px";

const hp_logo = document.getElementById('hplogo');

if (hp_logo.hasChildNodes()) { // it's a google event
    const main_image_link = document.querySelector("#hplogo a");
    const main_image = document.querySelector("#hplogo img");

    main_image_link.href = siteURL;
    main_image_link.target = "_blank";
    main_image.src = localImageURI;
    main_image.alt = "Anime Tiddies XD";
    main_image.title = "Anime Tiddies XD";
    main_image.height = main_image.width;
} else { // it's a regular google search page
    // TODO create image wrapped in a link and innsert it into hplogo div, probably...
}

document.querySelectorAll('input[value="Google Search"]')[1].value = "Booble Search";
document.querySelectorAll('input[value="I\'m Feeling Lucky"]')[1].value = "I'm Feeling Perky";
