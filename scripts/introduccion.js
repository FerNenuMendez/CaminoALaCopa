const btnSeguir= document.getElementById("seguirBtnLibro")
const intro= document.getElementById("intro")
const dedi= document.getElementById("dedicatoria")
const divPrincipal= document.getElementById("libro")

const comienzo=()=>{
    btnSeguir.onclick=()=>{
        window.location.href='../paginas/libro.html'
    }
}
comienzo()