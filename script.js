const content = document.querySelector(".content-grid");
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
const button = document.querySelector(".button-choice");

let color = "#333333";

function createGrid(size) {
    const squareDivs = size * size;
    for (let i = 0; i < squareDivs; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square-div");
    squareDiv.style.width = `${100 / size}%`;
    squareDiv.style.height = `${100 / size}%`;
    squareDiv.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = color;
    });
    content.appendChild(squareDiv);
    }git 
}

function getUserChoice() {
    let choice = prompt("Input Squares per side (1-99):"); 
    if (choice === null) return;

    choice = Number(choice);

    if (isNaN(choice) || choice <= 0 || choice >= 100) {
        choice = +prompt("Invalid input! Please enter a number between 1 and 99:");
        if (choice === 0) return
    }

    content.textContent = "";
    color = "#333333"
    createGrid(choice);
}

const rootStyles = getComputedStyle(document.documentElement);

const eraserBtn = document.querySelector(".eraser");
const whiteFromCss = rootStyles.getPropertyValue('--bg-white').trim();
eraserBtn.addEventListener("click", () => {
    color = whiteFromCss;
});

const eraserEveryThing = document.querySelector(".reset");
eraserEveryThing.addEventListener("click", () => {
    const squareDivs = document.querySelectorAll(".square-div");
    squareDivs.forEach((item) => {
        item.style.backgroundColor = whiteFromCss;
    });
    color = whiteFromCss;
});

const defaultBtn = document.querySelector(".default-button");
const blackFromCss = rootStyles.getPropertyValue('--primary-color').trim();
defaultBtn.addEventListener("click", () => {
    color = blackFromCss;
});

const redBtn = document.querySelector(".red-button");
const redFromCss = rootStyles.getPropertyValue('--red-color').trim();
redBtn.addEventListener("click", () => {
    color = redFromCss;
});

const greenBtn = document.querySelector(".green-button");
const greenFromCss = rootStyles.getPropertyValue('--green-color').trim();
greenBtn.addEventListener("click", () => {
    color = greenFromCss;
});

const yellowBtn = document.querySelector(".yellow-button");
const YellowFromCss = rootStyles.getPropertyValue('--yellow-color').trim();
yellowBtn.addEventListener("click", () => {
    color = YellowFromCss;
});

const blueBtn = document.querySelector(".blue-button");
const blueFromCss = rootStyles.getPropertyValue('--blue-color').trim();
blueBtn.addEventListener("click", () => {
    color = blueFromCss;
});

const orangeBtn = document.querySelector(".orange-button");
const orangeFromCss = rootStyles.getPropertyValue('--orange-color').trim();
orangeBtn.addEventListener("click", () => {
    color = orangeFromCss;
});

const softPinkBtn = document.querySelector(".soft-pink-button");
const softPinkFromCss = rootStyles.getPropertyValue('--soft-pink').trim();
softPinkBtn.addEventListener("click", () => {
    color = softPinkFromCss;
});

const skyBlueBtn = document.querySelector(".sky-blue-button");
const skyBlueFromCss = rootStyles.getPropertyValue('--sky-blue').trim();
skyBlueBtn.addEventListener("click", () => {
    color = skyBlueFromCss;
});

const mintGreenBtn = document.querySelector(".mint-green-button");
const mintGreenFromCss = rootStyles.getPropertyValue('--mint-green').trim();
mintGreenBtn.addEventListener("click", () => {
    color = mintGreenFromCss;
});

const lightPurpleBtn = document.querySelector(".light-purple-button");
const lightPurpleFromCss = rootStyles.getPropertyValue('--light-purple').trim();
lightPurpleBtn.addEventListener("click", () => {
    color = lightPurpleFromCss;
});

const paleYellowBtn = document.querySelector(".pale-yellow-button");
const paleYellowFromCss = rootStyles.getPropertyValue('--pale-yellow').trim();
paleYellowBtn.addEventListener("click", () => {
    color = paleYellowFromCss;
})

button.addEventListener("click", getUserChoice);
const defaultGrid = 16;
createGrid(defaultGrid);