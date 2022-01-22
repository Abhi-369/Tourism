const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.imgbox').children;
const totalImages = images.length;

let imageSources = ["/img/dubai.jpg", "/img/france.jpg", "/img/singapore.jpg", "/img/canada.jpg", "/img/goa-beach.jpg", "/img/australia.jpg", "/img/india.jpg", "/img/london.jpg", "/img/spain.jpg", "/img/big-ben.jpg"]

let texts = ["Dubai", "France", "Singapore", "Canada", "Goa Beach", "Australia", "India", "London", "Spain", "Big Ben"]

index = 0;
setInterval(function () {
    if (index === imageSources.length) {
        index = 0;
    }
    document.getElementById("image").src = imageSources[index];
    document.getElementById("text").innerHTML = texts[index];
    index++;
}, 3000);