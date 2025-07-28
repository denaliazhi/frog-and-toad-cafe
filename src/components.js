function setTitle(text) {
    const title = document.createElement("h1");
    title.textContent = text;
    return title;
}

function setSubtitle(text) {
    const subtitle = document.createElement("h2");
    subtitle.textContent = text;
    return subtitle;
}

function setBody(text) {
    const body = document.createElement("p");
    body.textContent = text;
    return body;
}

function setImage(source, altText) {
    const image = document.createElement("img");
    image.src = source;
    image.alt = altText;
    return image;
}

function setTwoCol(first, second) {
    const container = document.createElement("div");
    container.classList.add("two-col");
    container.append(first, second);
    return container;
}

function setButton(text) {
    const button = document.createElement("button");
    button.textContent = text;
    return button;
}

export {setTitle, setSubtitle, setImage, setBody, setTwoCol, setButton,};