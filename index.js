const piece = document.querySelector(".piece");
const box = document.querySelectorAll(".box");
const info = document.querySelector("#info");
let chessPiece;

piece.addEventListener("dragstart",(e) => {
    chessPiece = e.target;
})

piece.addEventListener("drag",(e) => {
    info.textContent = "You are dragging"+ e.target.id
})

box.forEach(square => {
square.addEventListener("dragover", (e) => {
    e.preventDefault()
})
square.addEventListener("drop", (e) => {
    e.target.append(chessPiece)
})


})