const content = document.querySelector(".content");
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
const button = document.querySelector(".button");

function createGrid(size) {
    const sqaureDivs = size * size;
    for (let i = 0; i < sqaureDivs; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square-div");
    content.appendChild(squareDiv);
    squareDiv.style.width = 100 / size+"%";
    let opacity = 0;
    squareDiv.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    opacity += 0.1;
    event.target.style.opacity = opacity;
    });
    }
}

function getUserChoice() {
    content.textContent = "";
    let choice = +prompt("input Squares per side:"); 
    while (choice >= 100) {
        choice = +prompt("Please enter a number less than 100:");
    }
    createGrid(choice);
}
button.addEventListener("click", getUserChoice);
const defaultGrid = 16;
createGrid(defaultGrid);