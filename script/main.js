// define HTML elements as variables
const div1 = document.getElementById("nav-menu-button-div1");
const div2 = document.getElementById("nav-menu-button-div2");
const div3 = document.getElementById("nav-menu-button-div3");
const div4 = document.getElementById("nav-menu-button-div4");
const menu = document.getElementById("nav-menu-list");

console.log(div1.classList.contains("nav-menu-button-1and4-deactivated"))

// change the style of the menu button by adding and removing class
function toggleButton() {
    if (div1.classList.contains("nav-menu-button-1and4-activated") === false){
        div1.classList.add("nav-menu-button-1and4-activated");
        div2.classList.add("nav-menu-button-2-activated");
        div3.classList.add("nav-menu-button-3-activated");
        div4.classList.add("nav-menu-button-1and4-activated");
        if (div1.classList.contains("nav-menu-button-1and4-deactivated")) {
            div1.classList.remove("nav-menu-button-1and4-deactivated");
            div2.classList.remove("nav-menu-button-2-deactivated");
            div3.classList.remove("nav-menu-button-3-deactivated");
            div4.classList.remove("nav-menu-button-1and4-deactivated");
        }
    } else {
        div1.classList.add("nav-menu-button-1and4-deactivated");
        div1.classList.remove("nav-menu-button-1and4-activated");
        div2.classList.add("nav-menu-button-2-deactivated");
        div2.classList.remove("nav-menu-button-2-activated");
        div3.classList.add("nav-menu-button-3-deactivated");
        div3.classList.remove("nav-menu-button-3-activated");
        div4.classList.add("nav-menu-button-1and4-deactivated");
        div4.classList.remove("nav-menu-button-1and4-activated");

    }
}

// show/hide drawer menu
function toggleMenu() {
    if (menu.classList.contains("menu-show") === false){
        menu.classList.add("menu-show");
        menu.classList.remove("menu-hide");
    } else {
        menu.classList.add("menu-hide");
        menu.classList.remove("menu-show");
    }
}

// combine both functions above
function toggleButtonAndMenu() {
    toggleButton();
    toggleMenu();
}