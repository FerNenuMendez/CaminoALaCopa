const btn=document.getElementById('inicio')
const nombre=document.getElementById('nombre')
const apellido=document.getElementById('apellido')
const apodo=document.getElementById('apodo')

const subirInformacion=()=>{
    btn.onclick=()=>{
        window.location.href='paginas/introduccion.html'
        const inicioHoja=13
        const inicio=JSON.stringify(inicioHoja)
        const nombreInicio=JSON.stringify(nombre.value)
        const apellidoInicio=JSON.stringify(apellido.value)
        const apodoInicio=JSON.stringify(apodo.value)
        localStorage.setItem("Opcion",inicio)
        localStorage.setItem("Nombre",nombreInicio)
        localStorage.setItem("Apellido",apellidoInicio)
        localStorage.setItem("Apodo",apodoInicio)
        console.log(nombreInicio)
        console.log(apellidoInicio)
        console.log(apodoInicio)
    }
}
subirInformacion()