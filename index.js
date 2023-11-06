
var drums = document.querySelectorAll('.drum').length;

//possibility of while loop usage
/*var i = 0;

while (i < drums){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    alert ("Hello world")
} )
i++;
}*/

//for loop for reaching each of the drums
for (var i=0; i < drums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){

var button = this.innerHTML;
playSound (button);
addAnimation (button);

  })
}

//for keyboard usage
document.addEventListener ("keydown", function (event){

playSound (event.key);
addAnimation (event.key);

})

//function which is used in both purposes
function playSound (key) {
  switch (key) {
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "a":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case "s":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "d":
    var kickBass = new Audio('sounds/kick-bass.mp3');
    kickBass.play();
    break;

    case "j":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "k":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "l":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    default:
    console.log (key.innerHTML)

  }

}

function addAnimation (key) {
var activeButton = document.querySelector ("." + key);
activeButton.classList.add("pressed");
setTimeout(function(){
activeButton.classList.toggle("pressed")

// bilo koja od ove dvije opcije je moguca
// activeButton.classList.remove("pressed")

}, 100);
}
