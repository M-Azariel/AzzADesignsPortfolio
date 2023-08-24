const d=document;

const nav = d.querySelector("#nav");
const abrir = d.querySelector("#abrir");
const cerrar = d.querySelector("#cerrar")

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})

