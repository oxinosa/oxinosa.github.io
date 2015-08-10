var message = "Hello World!";

function TextEffect() {
    this.showText = function(target, message, index, interval) {

        if(index < message.length) {
            document.getElementById("indicator").style.display = "block";
            document.getElementById(target).innerHTML += message[index++];
            setTimeout(function(){
                new TextEffect().showText(target, message, index, interval);
            }, interval);
        } else {
            document.getElementById("indicator").style.display = "none";
        }
    }
}



document.addEventListener("DOMContentLoaded", function(event) {
    new TextEffect().showText("msg", message, 0, 100);
});