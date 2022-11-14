var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "1":
            var boom = new Audio('/Lab3/sounds/boom.wav');
            boom.play();
            break;

        case "2":
            var clap = new Audio('/Lab3/sounds/clap.wav');
            clap.play();
            break;

        case "3":
            var hihat = new Audio('/Lab3/sounds/hihat.wav');
            hihat.play();
            break;

        case "4":
            var kick = new Audio('/Lab3/sounds/kick.wav');
            kick.play();
            break;

        case "5":
            var openhat = new Audio('/Lab3/sounds/openhat.wav');
            openhat.play();
            break;

        case "6":
            var ride = new Audio('/Lab3/sounds/ride.wav');
            ride.play();
            break;

        default:
            console.log(key);

    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}