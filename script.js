const content = document.querySelector(".content");
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square-div");
    content.appendChild(squareDiv);
    squareDiv.style.width = "6.25%";
    let opacity = 0;
    squareDiv.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#333333";
    opacity = opacity + 0.1;
    event.target.style.opacity = opacity;
})}

const squareDiv = document.querySelector(".square-div");

const button = document.querySelector(".button");


function getUserChoice() {
    content.textContent = "";
    let choice = +prompt("input Squares per side:"); 
    while (choice >= 100) {
        choice = +prompt("Please enter a number less than 100:");
    }
    console.log(choice)
    const result = choice * choice;
    for (let i = 0; i < result; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square-div");
    content.appendChild(squareDiv);
    squareDiv.style.width = 100 / choice+"%";
    squareDiv.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = `#333333`;
    });
    }
}

button.addEventListener("click", getUserChoice);