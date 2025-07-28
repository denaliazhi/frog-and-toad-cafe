// This code generates DOM elements for the home page

import {setButton, setTitle, setSubtitle, setBody, setTwoCol} from "./components";


function setVisit(address, hours) {
    const visit = document.createElement("div");
    const heading = setBody("Visit us");
    const addr = setBody(address);
    const hr = document.createElement("hr");
    visit.append(heading, addr, hr, hours);
    visit.id = "visit";
    return visit;
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

    // Create elements for left side of page
    const leftCol = document.createElement("div");
    const title = setTitle("Your Home Away From Home");
    const subtitle = setSubtitle("Come for a cozy cup and the very best of friends.");
    const button = setButton("Browse Our Menu of the Month");
    leftCol.append(title, subtitle, button);

    // Create elements for right side of page
    const address = "12 Fern Lane, London WC2R 1BH";
    const hours = {
        Monday: "7am - 5pm",
        Tuesday: "7am - 5pm",
        Wednesday: "7am - 5pm",
        Thursday: "7am - 5pm",
        Friday: "7am - 9pm",
        Saturday: "9am - 9pm",
        Sunday: "Closed",
    }
    const hoursTable = setHoursTable(hours);
    const rightCol = setVisit(address, hoursTable);

    // Create a container to hold elements
    const home = setTwoCol(leftCol, rightCol);
    home.id = "home";

    // Show container as content on page
    content.appendChild(home);
}

export default setHomePage;