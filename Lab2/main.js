// let index = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("img");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     index++;
//     if (index > slides.length) {
//         index = 1
//     }
//     slides[index - 1].style.display = "block";
//     setTimeout(showSlides, 1000);
// }

let licznik = 0

const main = document.querySelector('main')
const slides = document.querySelector('.slides')

const intervalRef = setInterval(
    () => {
        licznik += 600
        if (licznik > 1200) {
            licznik = 0
        }

        slides.style.left = -licznik + 'px'

        main.innerHTML = 'From interval ' + licznik / 600
    },
    1000
)

document.querySelector('.next').addEventListener('click', () => {
    licznik = licznik + 600;
    if (licznik > 1200) {
        licznik = 0;
    }

    slides.style.left = -licznik + 'px';
})

document.querySelector('.prev').addEventListener('click', () => {
    licznik = licznik - 600;
    if (licznik < 0) {
        licznik = 1200;
    }

    slides.style.left = -licznik + 'px';
})

var playing = true;
var pauseButton = document.getElementById('pause');