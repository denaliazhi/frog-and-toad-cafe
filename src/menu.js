// This code generates DOM elements for the menu page

const images = require.context("./assets", false, /\.(png|jpe?g|svg)$/);

function setTitle(text) {
    const title = document.createElement("h1");
    title.textContent = text;
    return title;
}

function setSubtitle(text) {
    const subtitle = document.createElement("p");
    subtitle.textContent = text;
    return subtitle;
}

function setMenuSection(title, obj) {
    const section = document.createElement("div");
    section.classList.add("menu-section");
    
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = title;

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

    const image = document.createElement("img");
    image.src = images(`./${arr[0]}`);
    console.log(image.src);
    image.alt = arr[1];

    const caption = document.createElement("p");
    caption.textContent = arr[1];

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
    const subtitle = setSubtitle("There's no rush here. Sip, snack, and stay awhile.");

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


/* <div id="menu">
<h1>Menu</h1>
<p>There's no rush here. Sip, snack, and stay awhile.</p>
<div class="menu-section">
    <h2>For sipping</h2>
    <div>
        <div class="menu-card">
            <img src="assets/cappuccino.png" alt="">
            <p>Frog's hopping capppuccino</p>
        </div>
        <div class="menu-card">
            <img src="assets/chamomile.png" alt="">
            <p>Toad's soothing chamomile</p>
        </div>
        <div class="menu-card">
            <img src="assets/green-tea.png" alt="">
            <p>Lilypad green</p>
        </div>
        <div class="menu-card">
            <img src="assets/chai.png" alt="">
            <p>Cozy cottage chai</p>
        </div>
        <div class="menu-card">
            <img src="assets/earl-grey.png" alt="">
            <p>Good day, earl grey</p>
        </div>
    </div>
</div>
<div class="menu-section">
    <h2>For snacking</h2>
    <div>
        <div class="menu-card">
            <img src="assets/herb-scone.png" alt="">
            <p>Garden herb scone</p>
        </div>
        <div class="menu-card">
            <img src="assets/mushroom-tart.png" alt="">
            <p>Woodland mushroom tart</p>
        </div>
        <div class="menu-card">
            <img src="assets/snail-bun.png" alt="">
            <p>Chocolate swirl snail bun</p>
        </div>
        <div class="menu-card">
            <img src="assets/madelines.png" alt="">
            <p>Browned butter madeline</p>
        </div>
        <div class="menu-card">
            <img src="assets/letter-biscuit.png" alt="">
            <p>Raspberry jam letter biscuit</p>
        </div>
    </div>
</div>
</div> */