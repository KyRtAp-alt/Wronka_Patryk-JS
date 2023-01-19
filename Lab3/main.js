document.addEventListener("keypress", buttonPress)

const recordBtn1 = document.querySelector("#startRecord1")

const recordBtn2 = document.querySelector("#startRecord2")

const recordBtn3 = document.querySelector("#startRecord3")

const recordBtn4 = document.querySelector("#startRecord4")

const endRecordBtn = document.querySelector("#stopRecord")

const playBtn1 = document.querySelector("#playRecord1")

const playBtn2 = document.querySelector("#playRecord2")

const playBtn3 = document.querySelector("#playRecord3")

const playBtn4 = document.querySelector("#playRecord4")

let recordTime;
let firstRecording = []
let secondRecording = []
let thirdRecording = []
let forthRecording = []
let activeRecording;

recordBtn1.addEventListener("click", startRecording)

recordBtn2.addEventListener("click", startRecording)

recordBtn3.addEventListener("click", startRecording)

recordBtn4.addEventListener("click", startRecording)

endRecordBtn.addEventListener("click", endRecording)

playBtn1.addEventListener("click", playRecording)

playBtn2.addEventListener("click", playRecording)

playBtn3.addEventListener("click", playRecording)

playBtn4.addEventListener("click", playRecording)

function buttonPress(event) {
    let sound;
    switch (event.key) {
        case "1":
            sound = "boom"
            break
        case "2":
            sound = "clap"
            break
        case "3":
            sound = "hihat"
            break
        case "4":
            sound = "kick"
            break
        case "5":
            sound = "openhat"
            break
        case "6":
            sound = "ride"
            break
        default:
            return
    }
    playSound(sound);
}

function playSound(sound) {
    if (isRecording) {
        recordSound(sound)
    }
    const audioTag = document.querySelector(`#${sound}`)
    const button = document.querySelector(`#${sound}.key`)
    button.classList.add("active")
    audioTag.currentTime = 0
    audioTag.play()
    audioTag.addEventListener("ended", () => {
        button.classList.remove("active")
    })
}

let isRecording = false

function startRecording() {
    if (this.id === "startRecord1") {
        activeRecording = firstRecording
    } else if (this.id === "startRecord2") {
        activeRecording = secondRecording
    } else if (this.id === "startRecord3") {
        activeRecording = thirdRecording
    } else if (this.id === "startRecord4") {
        activeRecording = forthRecording
    } else {
        console.log("error")
    }
    console.log("Recording!")
    isRecording = true
    recordTime = Date.now()
}

function endRecording() {
    isRecording = false
}

function playRecording() {
    if (this.id === "playRecord1") {
        activeRecording = firstRecording
    } else if (this.id === "playRecord2") {
        activeRecording = secondRecording
    } else if (this.id === "playRecord3") {
        activeRecording = thirdRecording
    } else if (this.id === "playRecord4") {
        activeRecording = forthRecording
    } else {
        console.log("error")
    }

    if (activeRecording.length === 0) return;
    activeRecording.forEach((record) => {
        setTimeout(() => {
            playSound(record.key)
        }, record.recordStartTime)
    });
}

function recordSound(sound) {
    activeRecording.push({
        key: sound,
        recordStartTime: Date.now() - recordTime,
    })
}













// OLD CODE

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {

//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {

//         var buttonInnerHTML = this.innerHTML;

//         makeSound(buttonInnerHTML);

//         buttonAnimation(buttonInnerHTML);

//     });

// }

// document.addEventListener("keypress", function (event) {

//     makeSound(event.key);

//     buttonAnimation(event.key);

// });


// function makeSound(key) {

//     switch (key) {
//         case "1":
//             var boom = new Audio('/Lab3/sounds/boom.wav');
//             boom.play();
//             break;

//         case "2":
//             var clap = new Audio('/Lab3/sounds/clap.wav');
//             clap.play();
//             break;

//         case "3":
//             var hihat = new Audio('/Lab3/sounds/hihat.wav');
//             hihat.play();
//             break;

//         case "4":
//             var kick = new Audio('/Lab3/sounds/kick.wav');
//             kick.play();
//             break;

//         case "5":
//             var openhat = new Audio('/Lab3/sounds/openhat.wav');
//             openhat.play();
//             break;

//         case "6":
//             var ride = new Audio('/Lab3/sounds/ride.wav');
//             ride.play();
//             break;

//         default:
//             console.log(key);

//     }
// }



// // function buttonAnimation(currentKey) {

// //     var activeButton = document.querySelector("." + currentKey);

// //     activeButton.classList.add("pressed");

// //     setTimeout(function () {
// //         activeButton.classList.remove("pressed");
// //     }, 100);

// // }