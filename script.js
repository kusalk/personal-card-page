let rotateDeg = 0;
const card = document.getElementById("card");
const front = document.getElementById("front");
const back = document.getElementById("back");
const flipIcons = [front, back].map(el => el.querySelector(".flip"));
flipIcons.forEach(icon => icon.addEventListener("click", e => clickFlip(e.target)));
back.setAttribute("inert", "");

// Tease spin on initial load
setTimeout(() => setRotate(30), 1);
setTimeout(() => setRotate(0), 500);

function clickFlip(target) {
    rotate180();
    setFocusInert();
    flipIcons.filter(i => i !== target)[0].focus();
}

function rotate180() {
    setRotate(rotateDeg + 180);
}

function setRotate(deg) {
    rotateDeg = deg;
    card.style.transform = `rotateY(${rotateDeg}deg)`;
}

function setFocusInert() {
    let focused = front;
    let unfocused = back;
    if (rotateDeg % 360) {
        focused = back;
        unfocused = front;
    }
    unfocused.setAttribute("inert", "");
    focused.removeAttribute("inert");
}
