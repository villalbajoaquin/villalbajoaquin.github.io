let lin1 = document.querySelector(".lin1-menu");
let lin2 = document.querySelector(".lin2-menu");
let lin3 = document.querySelector(".lin3-menu");
let ul = document.querySelector("ul")

let animateMenu = () => {
    lin1.classList.toggle("onlin1-menu");
    lin2.classList.toggle("onlin2-menu");
    lin3.classList.toggle("onlin3-menu");

    ul.style.display == "block" ? ul.style.display = "none" : ul.style.display = "block";
};

document.querySelector(".menu").addEventListener("click", animateMenu);