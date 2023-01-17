let licznik = 0

const main = document.querySelector('main')
const slides = document.querySelector('.slides')

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







///////////////////////////////////////////////////////////////////

// Animacja-przesuwanie-obrakzow

// const intervalRef = setInterval(
//     () => {
//         licznik += 600
//         if (licznik > 1200) {
//             licznik = 0
//         }

//         slides.style.left = -licznik + 'px'

//         main.innerHTML = 'From interval ' + licznik / 600
//     },
//     5000
// )