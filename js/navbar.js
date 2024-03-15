const dropDownButon = document.querySelector(".nav-bar-toggle-igac");
const nav = document.querySelector(".navbarigac");
const navLogos = document.querySelector(".navbarigac .logos");
const dropDownMenu = document.querySelector(".navbarnavigac");
const dropDowntoggle = document.querySelector(".dropdownToggle");
const dropDown = document.querySelector(".dropDown");
const linklist = document.querySelector("#link-list")
const logoIgac = document.querySelector(".navbar-brand-igac")
const barraIgac = document.querySelector(".barra_gov")

dropDownButon.addEventListener('click', function handleClick(event) {
    dropDownMenu.classList.toggle('expandMenu');
});

// Tablet responsive
function tabletSize(x) {
    if (x.matches) {
        dropDownMenu.append(linklist);
    } else {
        linklist.remove()
        nav.append(linklist);
    }
}
var x = window.matchMedia("(max-width: 768px)")
tabletSize(x)
x.addListener(tabletSize)


// Mobile responsive
function tabletMobile(x) {
    if (x.matches) {
        barraIgac.append(logoIgac);
    } else {
        logoIgac.remove()
        navLogos.append(logoIgac);
    }
}

var x = window.matchMedia("(max-width: 526px)")
tabletMobile(x)
x.addListener(tabletMobile)

// collapse menu
if (document.querySelector(".nav-bar-toggle-igac")) {
    const collapseButton_1 = document.querySelector(".collapse-button-1");
    const collapseMenu_1 = document.querySelector(".collapse-menu-1");

    const collapseButton_2 = document.querySelector(".collapse-button-2");
    const collapseMenu_2 = document.querySelector(".collapse-menu-2");
    
    collapseButton_1.addEventListener("click", (event) => {
        collapseMenu_2.classList.remove("expand");
        collapseMenu_1.classList.toggle("expand");
    });
    
    collapseButton_2.addEventListener("click", (event) => {
        collapseMenu_1.classList.remove("expand");
        collapseMenu_2.classList.toggle("expand");
    });
}