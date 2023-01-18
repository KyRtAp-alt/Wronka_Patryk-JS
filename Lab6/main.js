window.addEventListener(`deviceorientation`, handleOrientation, true);

const ball = document.querySelector(".ball");

const space = document.querySelector(".space");

const exit = document.querySelector(".exit");

const maxX = space.clientWidth - ball.clientWidth;

const maxY = space.clientHeight - ball.clientHeight;

function handleOrientation(event) {
    const absolute = event.absolute;
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;
}

function handleOrientation(event) {
    let x = event.beta;
    let y = event.gamma;

    if (x > 90) {
        x = 90;
    }
    if (x < -90) {
        x = -90;
    }
    x += 90;
    y += 90;

    ball.style.top = `${(maxY*y) / 180 - 10}px`;
    ball.style.left = `${(maxX * x) / 180 - 10}px`;
}