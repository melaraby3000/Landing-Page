/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

/**
 * End Global Variables
 * 
 * Start Helper Functions
 * creating sections dynamically
*/
function createListItem() {
    for (section of sections) {
        ListItem = document.createElement("li");
        ListItem.innerHTML = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
        navList.appendChild(ListItem);
    }
}
createListItem();

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
///////// using Element.getBoundingClientRect() instead of Intersection Observer API ///////////////////
// Set sections as active


window.onscroll = function () {
    document.querySelectorAll("section").forEach(function (active) {
        // let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
        if (active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150) {

            active.classList.add("your-active-class");


        }
        else {
            active.classList.remove("your-active-class");

        }
    });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Scroll to section on link click
/**
 * when you click on nav links will go smoothly to the correct section
 * i can shortcut this code just using CSS (html{ scroll-behavior: "smooth"})
 * but I think it better to use what I learn
 * I use setTimeout to earn some time to scroll smoothly
 */
navBar.addEventListener("click", (toSection) => {
    toSection.preventDefault();
    if (toSection.target.dataset.nav) {
        document
            .getElementById(`${toSection.target.dataset.nav}`)
            .scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
            location.hash = `${toSection.target.dataset.nav}`;
        }, 170);
    }
});




