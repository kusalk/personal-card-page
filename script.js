let rotateDeg = 0;
const card = document.getElementById('card');
const flipIcons = document.querySelectorAll('.flip');
flipIcons.forEach(icon => icon.addEventListener('click', rotate));

function rotate() {
    rotateDeg += 180;
    card.style.transform = `rotateY(${rotateDeg}deg)`;
}
