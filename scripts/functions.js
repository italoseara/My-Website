function onDrag({movementX, movementY}){
    folder = document.querySelector(".active").parentNode;
    
    let getStyle = window.getComputedStyle(folder);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    folder.style.left = `${leftVal + movementX}px`;
    folder.style.top = `${topVal + movementY}px`;
}

async function openApp(contentFile) {

    let content = await fetch(`../html/${contentFile}.html`)
        .then(function(response) {
            return response.text()
        })
    
    let appHtml = `
    <div class="folder">
        <header>
            <div id="close" style="background: red;"></div>
            <div id="maximize" style="background: yellow;"></div>
            <div id="minimize" style="background: green;"></div>
        </header>

        <div class="body">
            ${content}
        </div>
    </div>
    `

    let app = new DOMParser().parseFromString(appHtml, "text/html").body.firstChild;
    
    const header = app.querySelector("header");

    header.addEventListener("mousedown", () => {
        header.classList.add("active");
        document.addEventListener("mousemove", onDrag);
    });

    document.addEventListener("mouseup", () => {
        header.classList.remove("active");
        document.removeEventListener("mousemove", onDrag);
    });

    app.querySelector("#close").addEventListener("click", () => {
        app.remove();
    })

    document.querySelector("#desktop").appendChild(app);

    return app;
}