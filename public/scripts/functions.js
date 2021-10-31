function onDrag({movementX, movementY}){
    folder = document.querySelector(".active").parentNode;
    
    let getStyle = window.getComputedStyle(folder);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    folder.style.left = `${leftVal + movementX}px`;
    folder.style.top = `${topVal + movementY}px`;
}
