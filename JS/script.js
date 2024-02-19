let pdfA = document.querySelector(".pdf");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal--map");
let image = document.querySelector(".contacts img");


pdfA.onclick = function(){
    pdfA.style.display = "none";
}

overlay.onclick = function(){
    overlay.style.display = "none";
    modal.style.display = "none";
}

image.onclick = function(){
    overlay.style.display = "block";
    modal.style.display = "block";
}