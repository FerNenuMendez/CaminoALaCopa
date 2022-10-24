const divPagina= document.getElementById("libro")

const cambiarOpcion=()=>{
    const bajadaOpcion=localStorage.getItem("Opcion")
    const parseBajada=JSON.parse(bajadaOpcion)
    let   hoja=parseBajada
    const hojaInicio = libro.filter((elemento) => {
            return elemento.id === hoja
    })

    const hojaEnDom=()=>{
        hojaInicio.forEach((filter) => {
            let hoja = document.createElement("div")
            hoja.setAttribute("class","divHoja")
            divPagina.append(hoja)
            let imgHoja = document.createElement("img")
            imgHoja.setAttribute("src", filter.img)
            imgHoja.setAttribute("alt",filter.alt)
            imgHoja.setAttribute("class","divHoja__img")
            let texto = document.createElement("p")
            texto.innerText = (filter.texto)
            texto.setAttribute("class","divHoja__p")
            let divBotones=document.createElement("div")
            divBotones.setAttribute("class","btnDiv")
            let opcion1 = document.createElement("button")
            opcion1.innerText = (filter.btn1)
            opcion1.setAttribute("class","btns")
            opcion1.setAttribute("id",filter.op1)
            let opcion2 = document.createElement("button")
            opcion2.innerText = (filter.btn2)
            opcion2.setAttribute("class","btns")
            opcion2.setAttribute("id",filter.op2)
    
            divBotones.append(opcion1, opcion2)
            hoja.append(imgHoja, texto, divBotones)
    
            opcion1.onclick=()=>{
                hoja=filter.op1
                console.log(hoja)
                const op1JSON=JSON.stringify(hoja)
                localStorage.setItem("Opcion",op1JSON)
                location. reload()
            }
            opcion2.onclick=()=>{
                hoja=filter.op2
                console.log(hoja)
                const op2JSON=JSON.stringify(hoja)
                localStorage.setItem("Opcion",op2JSON)
                location. reload()
            }
        })
    }
    hojaEnDom()
    }
    cambiarOpcion()
