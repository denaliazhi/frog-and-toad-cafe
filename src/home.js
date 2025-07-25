// This code generates DOM elements for the home page

function setHeroText(text) {
    const heroText = document.createElement("h1");
    heroText.textContent = text;
    return heroText;
}

function setCtaButton(text) {
    const ctaButton = document.createElement("button");
    ctaButton.textContent = text;
    return ctaButton;
}

function setHoursTable(obj) {
    const hoursTable = document.createElement("table");
    let first = true;
    for (let key in obj) {
        const row = document.createElement("tr");
        if (first) {
            const header = document.createElement("th");
            header.textContent = "Hours";
            header.setAttribute("rowspan", "7");
            first = false;
            row.appendChild(header);
        }
        const col1 = document.createElement("td");
        const col2 = document.createElement("td");
        col1.textContent = key;
        col2.textContent = obj[key];
        row.append(col1, col2);
        hoursTable.appendChild(row);
    }
    return hoursTable;
}

function setHomePage() {
    const content = document.querySelector("#content");

    // Create a container to hold elements
    const home = document.createElement("div");
    home.id = "home";

    // Create elements for home page
    const heroText = setHeroText("Come for a cozy cup and the very best of friends.");
    const ctaButton = setCtaButton("Visit us: 12 Fern Lane, London WC2R 1BH");

    const hours = {
        Monday: "7:00 am - 5:00 pm",
        Tuesday: "7:00 am - 5:00 pm",
        Wednesday: "7:00 am - 5:00 pm",
        Thursday: "7:00 am - 5:00 pm",
        Friday: "7:00 am - 9:00 pm",
        Saturday: "9:00 am - 9:00 pm",
        Sunday: "Closed",
    }
    const hoursTable = setHoursTable(hours);

    // Add elements to container
    home.append(heroText, ctaButton, hoursTable);

    // Show container as content on page
    content.appendChild(home);
}

export default setHomePage;