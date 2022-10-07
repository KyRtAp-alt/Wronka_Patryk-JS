const liczba1 = document.querySelector('#liczba1');
const liczba2 = document.querySelector('#liczba2');
const liczba3 = document.querySelector('#liczba3');
const liczba4 = document.querySelector('#liczba4');
const suma = document.querySelector('#suma');
const srednia = document.querySelector('#srednia');
const min = document.querySelector('#min');
const max = document.querySelector('#max');

// console.dir(liczba1);
// console.dir(liczba2);
// console.dir(liczba3);
// console.dir(liczba4);

const przeliczBtn = document.querySelector('#przelicz')
przeliczBtn.addEventListener('click', () => {
    suma.value = parseInt(liczba1.value) + parseInt(liczba2.value) + parseInt(liczba3.value) + parseInt(liczba4.value)
    srednia.value = (parseInt(liczba1.value) + parseInt(liczba2.value) + parseInt(liczba3.value) + parseInt(liczba4.value)) / 4
    min.value = Math.min(parseInt(liczba1.value), parseInt(liczba2.value), parseInt(liczba3.value), parseInt(liczba4.value))
    max.value = Math.max(parseInt(liczba1.value), parseInt(liczba2.value), parseInt(liczba3.value), parseInt(liczba4.value))
})

//Math.min(), .max()