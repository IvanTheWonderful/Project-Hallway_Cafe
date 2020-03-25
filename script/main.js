const button = document.getElementById("btn");
const menu = document.getElementById("menu");


function toggleMenu() {
    if (menu.classList.contains("menu-show") === false){
        menu.classList.add("menu-show");
        menu.classList.remove("menu-hide");
    } else {
        menu.classList.add("menu-hide");
        menu.classList.remove("menu-show");
    }
}