import "./styles.css";
import setHomePage from "./home.js";
import setMenuPage from "./menu.js";
import setAboutPage from "./about.js";

// Display home page upon initial load
setHomePage();

const content = document.querySelector("#content");
const nav = document.querySelector("nav");
nav.addEventListener("click", togglePage);

function togglePage(e) {
    // Clear existing content
    const child = content.querySelector("div");
    content.removeChild(child);

    const clicked = e.target;
    // Set new content
    switch(clicked.textContent) {
        case "Home":
            setHomePage();
            break;
        case "Menu":
            setMenuPage();
            break;
        case "About":
            setAboutPage();
            break;
    }
}