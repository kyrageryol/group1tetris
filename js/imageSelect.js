//array for images
var images = [
  "liquid.jpg",
  "moon.jpg",
  "rain.jpg",
  "mountain.jpg",
  "lighthouse.jpg",
  "turtle.jpg"
];

var img = document.getElementById("canvas");

function imgPick(num)
{
  var num = Math.floor(Math.random() * 6);
  img.style.backgroundImage = 'url("' + images[num] + '")';
  img.style.backgroundRepeat = "no-repeat";
}
imgPick();
