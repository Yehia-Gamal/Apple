let img = document.querySelector(".img-phone");
let backgroundColor = document.querySelector("body");

function phones(phone) {
  img.src = phone;
}

function colors(color) {
  backgroundColor.style.background = color;
}

let menu = document.getElementById("menu");
let actions = document.getElementById("actions");

menu.addEventListener("click", () => {
  hundlMenu();
});

function hundlMenu() {
  menu.classList.toggle("is-active");
  actions.classList.toggle("is-active");
}
