class Folder {
    constructor(name, content) {
        this.func = this.openFolder;
        this.name = name;
        this.content = content;
        let folder = new App(name, "folder-invoices--v1", () => {
            this.openFolder();
        });
        
        this.app = folder.app;
    }

    openFolder() {

        let html_str = `
            <div class="folder">
            <header>
                <div id="close" style="background: red;"></div>
                <div id="maximize" style="background: yellow;"></div>
                <div id="minimize" style="background: green;"></div>
            </header>

            <div class="explorer">
                <i class="fas fa-arrow-left"></i>
                <i class="fas fa-arrow-right"></i>
                <i class="fas fa-chevron-down"></i>
                <i class="fas fa-arrow-up"></i>

                <div class="path">
                    <img src="https://img.icons8.com/color/48/000000/folder-invoices--v1.png">
                    <div class="text">
                        This PC
                        <i class="fas fa-chevron-right"></i>
                        Desktop
                        <i class="fas fa-chevron-right"></i>
                        ${this.name}
                    </div>
                </div>

                <div class="search-bar">
                    <i class="fas fa-search"></i>
                    Search ${this.name}
                </div>
            </div>

            <div class="body">
                <div class="lateral">
                    <ul>
                        <li>
                            <img style="width: 1.6em;" src="https://img.icons8.com/color/48/000000/folder-invoices--v1.png"/>
                            <label>This PC</label>
                        </li>

                        <li>
                            <img style="width: 1.6em;" src="https://img.icons8.com/color/48/000000/folder-invoices--v1.png"/>
                            <label>Network</label>
                        </li>
                    </ul>
                </div>

                <div class="content"></div>
            </div>
            </div>
        `

        let folder = new DOMParser().parseFromString(html_str, "text/html").body.firstChild;

        this.content.forEach(element => {
            let clone = element.app.cloneNode(true);

            folder.querySelector(".content").appendChild(clone);

            clone.addEventListener("dblclick", () => {
                element.func();
            })
        });

        const header = folder.querySelector("header");

        header.addEventListener("mousedown", () => {
            header.classList.add("active");
            document.addEventListener("mousemove", onDrag);
        });

        document.addEventListener("mouseup", () => {
            header.classList.remove("active");
            document.removeEventListener("mousemove", onDrag);
        });

        folder.querySelector("#close").addEventListener("click", () => {
            folder.remove();
        })

        document.querySelector("#desktop").appendChild(folder);
    }

    desktop() {
        const desktop = document.querySelector("#desktop > #apps");

        desktop.appendChild(this.app);
    }
}

class App {
    constructor(name, icon, func) {
        this.func = func;
        this.name = name;
        this.app = document.createElement("div");
        let image = document.createElement("img");
        let label = document.createElement("label");
        this.app.classList.add("app");
        image.src = `https://img.icons8.com/color/48/000000/${icon}.png`;
        label.textContent = name;

        this.app.addEventListener("dblclick", () => {
            this.func()
        })
        this.app.appendChild(image);
        this.app.appendChild(label);
    }

    desktop() {
        const desktop = document.querySelector("#desktop > #apps");

        desktop.appendChild(this.app);
    }
}
