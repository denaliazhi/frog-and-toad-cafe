// This code generates DOM elements for the menu page

import { setTitle, setSubtitle, setBody, setImage } from "./components";
const images = require.context("./assets", false, /\.(png|jpe?g|svg)$/);

function setMenuSection(title, obj) {
    const section = document.createElement("div");
    section.classList.add("menu-section");
    
    const sectionTitle = setSubtitle(title);

    const menuItems = document.createElement("div");
    for (let key in obj) {
        const item = setMenuCard(obj[key]);
        menuItems.appendChild(item);
    }
    section.append(sectionTitle, menuItems);

    return section;
}

function setMenuCard(arr) {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const image = setImage(images(`./${arr[0]}`));
    image.alt = arr[1];

    const caption = setBody(arr[1]);

    card.append(image, caption);
    return card;
}

function setMenuPage() {
    const content = document.querySelector("#content");

    // Create a container to hold elements
    const menu = document.createElement("div");
    menu.id = "menu";

    // Create elements for menu page
    const title = setTitle("Menu");
    const subtitle = setBody("There's no rush here. Sip, snack, and stay awhile.");

    const drinks = {
        1: ["cappuccino.png", "Frog's hopping cappuccino"],
        2: ["chamomile.png", "Toad's soothing chamomile"],
        3: ["green-tea.png", "Lilypad green"],
        4: ["chai.png", "Cozy cottage chai"],
        5: ["earl-grey.png", "Good day, earl grey"]
    }

    const bites = {
        1: ["herb-scone.png", "Garden herb scone"],
        2: ["mushroom-tart.png", "Woodland mushroom tart"],
        3: ["snail-bun.png", "Chocolate swirl snail bun"],
        4: ["madelines.png", "Browned butter madeline"],
        5: ["letter-biscuit.png", "Raspberry jam letter biscuit"]
    }

    const drinksMenu = setMenuSection("For sipping", drinks);
    const bitesMenu = setMenuSection("For snacking", bites);

    menu.append(title, subtitle, drinksMenu, bitesMenu);
    content.appendChild(menu);
}

export default setMenuPage;