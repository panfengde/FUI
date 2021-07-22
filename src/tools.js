function createStyle(obj, shadowNode) {
    let style = document.createElement('style');
    style.type = "text/css";
    style.textContent = obj[0][1];
    shadowNode.append(style);
}

function createLink(url, shadowNode) {
    let link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = url;
    shadowNode.append(link);
}

export {createStyle, createLink};
