// DESKTOP

let projects = new Folder("My Projects", [
    new Folder("Python", [
        new App("Whatsappy", "whatsapp", () => {})
    ]),
]);
let socialMedia = new Folder("My Social Media", [
    new App("Instagram", "instagram-new", () => {
        window.location.href = "http://instagram.com/italo.sseara";
    }),
    new App("Github", "github", () => {
        window.location.href = "http://github.com/italoseara";
    })
]);
let contactme = new App("Contact Me", "contacts", () => {});
let aboutme = new App("About Me", "info--v1", () => {});
let readme = new App("README.txt", "document--v1", () => {});

projects.desktop()
socialMedia.desktop()
contactme.desktop();
aboutme.desktop();
readme.desktop();
