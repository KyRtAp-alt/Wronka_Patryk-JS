const liczba1 = document.querySelector('#liczba1');
console.dir(liczba1);

const liczba2 = document.querySelector('#liczba2');
console.dir(liczba2);

const liczba3 = document.querySelector('#liczba3');
console.dir(liczba3);

const liczba4 = document.querySelector('#liczba4');
console.dir(liczba4);

const przeliczBtn = document.querySelector('#przelicz')
przeliczBtn.addEventListener('click', () => {
    console.log(liczba1.value)
})

//Math.min(), .max()