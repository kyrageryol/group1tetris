// function playSound() {
//     alert("ello");
//     document.getElementById('play').play();
//
// const test = document.getElementById('test');
//
const audioUrl = "sounds/zapsplat_multimedia_click_001_19367.mp3";
$('.test').click(() => {
    return new Audio(audioUrl).play();
});

function playSound(url){
    new Audio(audioUrl).play();
    window.open(url);
}
function playBeep(){
    new Audio(audioUrl).play();

}
