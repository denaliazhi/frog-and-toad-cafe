// This code generates DOM elements for the about page
import frogAndToad from "./assets/frog-and-toad.png"
import { setTitle, setSubtitle, setImageText } from "./components";

function setAboutPage() {
    const content = document.querySelector("#content");

    // Create a container to hold elements
    const about = document.createElement("div");
    about.id = "about";

    // Create elements for about page
    const title = setTitle("About");

    const assets = {
        image: frogAndToad,
        alt: "A rendering of Frog and Toad sitting at a table in the cafe",
        heading: '"I felt good because the sun was shining and I have you as a friend."',
        body: [
            "Our cafe is an homage to two beloved children’s book characters and their simple yet joyful world.",
            "Here you can find a cozy spot to rest, a steaming pot of tea, scrumptious biscuits in the oven, and no shortage of good company.",
            "We hope you’ll stop by soon."
        ]
    }
    const imageText = setImageText(assets);

    about.append(title, imageText);
    content.appendChild(about);
}

export default setAboutPage;