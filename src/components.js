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

function setImageText(obj) {
    const container = document.createElement("div");
    container.classList.add("image-text");

    const image = document.createElement("img");
    image.src = obj["image"];
    image.alt = obj["alt"];

    const text = document.createElement("div");

    const heading = document.createElement("h2");
    heading.textContent = obj["heading"];
    text.appendChild(heading);

    for (let item of obj["body"]) {
        const line = document.createElement("p");
        line.textContent = item;
        text.appendChild(line);
    }

    container.append(image, text);
    return container;
}

export {setTitle, setSubtitle, setImageText};