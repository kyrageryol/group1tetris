// function playSound() {
//     alert("ello");
//     document.getElementById('play').play();
//
var audioUrl = "http://www.realmofdarkness.net/audio/vg/sf/sf2/perfect.mp3";
$('.button').click(() => {
    return new Audio(audioUrl).play();
});
