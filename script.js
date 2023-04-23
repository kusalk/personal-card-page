let rotateDeg = 0;
const card = document.getElementById('card');
const flipIcons = document.querySelectorAll('.flip');
flipIcons.forEach(icon => icon.addEventListener('click', rotate180));
setTimeout(() => setRotate(30), 1);
setTimeout(() => setRotate(0), 500);

function rotate180() {
    setRotate(rotateDeg + 180);
}

function setRotate(deg) {
    rotateDeg = deg;
    card.style.transform = `rotateY(${rotateDeg}deg)`;
}
