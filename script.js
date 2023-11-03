var len= document.querySelectorAll(".kit").length;

for(var i=0;i<len;i++){
document.querySelectorAll(".kit")[i].addEventListener("click", function() {
    var keyValue = this.innerHTML;
    playdrum(keyValue);
});
}
document.addEventListener("keypress", function(event) {
        var keyValue = this.innerHTML;
        console.log(event.key);
        playdrum(event.key);
    });
function playdrum(keyValue){
    switch(keyValue){
        case 'w':
          var audio = new Audio ('./sounds/tom-1.mp3');
            break;
        case 'a':
            var audio = new Audio ('./sounds/tom-2.mp3');
            break;
        case 's':
            var audio = new Audio ('./sounds/tom-3.mp3');
            break;
        case 'd':
            var audio = new Audio ('./sounds/tom-4.mp3');
            break;
        case 'j':
            var audio = new Audio ('./sounds/snare.mp3');
            break;
        case 'k':
            var audio = new Audio ('./sounds/kick-bass.mp3');
            break;
        case 'l':
            var audio = new Audio ('./sounds/crash.mp3');
            break;
        default:
            console.log(buttonInnerHTML);
    }
    audio.play();
}
