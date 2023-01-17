const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

const holeX = 50;
const holeY = 50;

let ballX = 0;
let ballY = 0;

const radius = 25;

ctx.beginPath();
ctx.arc(ballX, ballY, radius, 0, Math.PI * 2);
ctx.fillStyle = '#AAA';
ctx.fill();

let startTime = null;

let records = [];

function handleMove(event) {
    ballX = event.gamma;
    ballY = event.beta;
}

if (ballX === holeX && ballY === holeY) {
    let endTime = Date.now();
    let timeElapsed = endTime - startTime;
    records.push(timeElapsed);
}


window.addEventListener('deviceorientation', handleMove);