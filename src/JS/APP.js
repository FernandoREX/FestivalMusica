document.addEventListener("DOMContentLoaded", function() {
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
    NavegacionFija();
    scrolNav();
}

//funcion para mantener el navegador siempre fijo
function NavegacionFija(){
    const barra = document.querySelector(".header");
    const sobreFestival = document.querySelector(".sobre-festival");
    const body = document.querySelector("body");

    window.addEventListener("scroll", function() {
        if(sobreFestival.getBoundingClientRect().top < 0 ){
            barra.classList.add("fijo");
            body.classList.add("body-fijo");
        }else{
            barra.classList.remove("fijo");
            body.classList.remove("body-fijo");
        }
    });
}

//Funcion para hacer scroll mas estetico
function scrolNav(){
    const enlaces = document.querySelectorAll(".navegacion-principal a");
    enlaces.forEach( enlace => {
        enlace.addEventListener("click", function(e){
            e.preventDefault();

            const SeccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(SeccionScroll);
            seccion.scrollIntoView({behavior: "smooth"});
        });
    });
}

//Generando la galeria por js
function crearGaleria(){
    const galeria = document.querySelector(".galeria__imagenes");

    console.log(galeria);
    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement("picture");
        imagen.innerHTML = `
            <img width="200" height="300" src="src/img/thumb/${i}.jpg" alt="Imagen de galeria">
        `;
        //haciendo collback para mostrar imagen 
        imagen.onclick = function(){
            mostrarImg(i);
        }
        galeria.appendChild(imagen);
    }
}

function mostrarImg(id){
    const imagen = document.createElement("picture");
    imagen.innerHTML = `
        <img width="200" height="300" src="src/img/grande/${id}.jpg" alt="Imagen de galeria">
    `;
    //Creando un overlay
    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");
    overlay.onclick = function(){
        const body = document.querySelector("body")
        body.classList.remove("fijar-body");
        overlay.remove();
    }

    //Boton para cerrar el Modal
    const CerrarF = document.createElement("P");
    CerrarF.textContent = "X";
    CerrarF.classList.add("btn-cerrar");
    CerrarF.onclick = function(){
        const body = document.querySelector("body")
        body.classList.remove("fijar-body");
        overlay.remove();
    }
    overlay.appendChild(CerrarF);

    //Añade el overlay al html
    const body = document.querySelector("body")
    body.appendChild(overlay);
    body.classList.add("fijar-body");
}