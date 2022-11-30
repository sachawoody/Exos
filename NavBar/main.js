let openNavSelector = document.querySelector(".clickNav");
let navSelector = document.querySelector("nav");

let navItems = document.querySelector("a");

openNavSelector.addEventListener("click", function () {
    let navStatus = navSelector.getAttribute("value");

    if (navStatus == "false") {
        navSelector.setAttribute(
            "style",
            "transition: all 1s ease-out;transform: translateY(5%);margin-top: 0"
        );
        navSelector.setAttribute("value", "true");
        console.navStatus;
    } else if (navStatus == "true") {
        navSelector.setAttribute(
            "style",
            "transition: all 1s ease-out;transform: translateY(5%);margin-top: -35%;invisibility: hidden;"
        );
        navSelector.setAttribute("value", "false");
    }
});