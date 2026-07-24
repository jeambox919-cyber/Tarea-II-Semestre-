const productosPorPagina = 6;
let paginaActual = 1;
const productos = [

{
    img:"https://images.unsplash.com/photo-1558980664-2506fca6bfc2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo:"Harley Davidson",
    categoria:"Alto cilindraje",
    descripcion:"Moto de alto cilindraje alto tamaño, perfecto para viajes",
    precio:"₡1,850,000"
},

{
    img:"https://images.unsplash.com/photo-1652277233915-04dca318402e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo:"Honda Shadow",
    categoria:"Medio cilindraje",
    descripcion:"Moto de medio cilindraje para viajes tramquilos",
    precio:"₡880,000"
},

{
    img:"https://images.unsplash.com/photo-1660725997525-3cee7da82aec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo:"Yamaha r6",
    categoria:"Alto cilindraje",
    descripcion:"Moto de alto cilindraje para pistas.",
    precio:"₡1,145,000"
},

{
    img:"https://images.unsplash.com/photo-1635073958756-f91504bab98c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo:"Bmw 1000rr",
    categoria:"Alto cilingraje",
    descripcion:"Moto de gran rendimiento usos recreativos",
    precio:"₡3,420,000"
},

{
    img:"https://images.unsplash.com/photo-1591378603223-e15b45a81640?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo:"Duke 350",
    categoria:"Medio cilindraje",
    descripcion:"Ideal para el dia a dia",
    precio:"₡ 520,000"
},

{
    img:"https://images.unsplash.com/photo-1657008480911-652f533fd0af?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo:"Minsk 200",
    categoria:"bajo cilindraje",
    descripcion:"Moto para principiantes",
    precio:"₡275,000"
},

{
    img:"https://images.unsplash.com/photo-1750254603139-5ac2b5228bce?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo:"Bmw gs",
    categoria:"Medio alto cilindraje",
    descripcion:"Moto de medio rendimiento util para trabajo.",
    precio:"₡1,200,000"
},

{
    img:"https://images.unsplash.com/photo-1728372853272-6a433a444e29?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo:"CRF 600",
    categoria:"Alto cilindraje",
    descripcion:"Moto todo terreno para competicion.",
    precio:"₡3,995,000"
}
,

{
    img:"https://images.unsplash.com/photo-1680329519639-95aea96d8890?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo:"Honda Navy",
    categoria:"Medio cilindraje",
    descripcion:"Multifuncional inalámbrica.",
    precio:"₡4,595,000"
}

,

{
    img:"https://images.unsplash.com/photo-1625640029965-4c6bb36eefe2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo:"Honda a2teker ",
    categoria:"Bajo cilindraje",
    descripcion:"Moto perfecta para viajes.",
    precio:"₡2,295,000"
}


];


function mostrarProductos(){

    const contenedor =
    document.getElementById(
        "contenedorProductos"
    );

    contenedor.innerHTML = "";

    const inicio =
    (paginaActual - 1) *
    productosPorPagina;

    const fin =
    inicio + productosPorPagina;

    const productosPagina =
    productos.slice(inicio, fin);

    productosPagina.forEach(producto => {

        const columna =
        document.createElement("div");

        columna.className =
        "col-md-4 mb-4";

        columna.innerHTML = `

        <div class="card producto-card h-100">

            <img src="${producto.img}"
                 class="card-img-top">

            <div class="card-body">

                <h5 class="card-title">
                    ${producto.titulo}
                </h5>

                <span class="badge bg-primary mb-2">
                    ${producto.categoria}
                </span>

                <p>
                    ${producto.descripcion}
                </p>

                <h4 class="text-primary">
                    ${producto.precio}
                </h4>

                <button
                    class="btn btn-primary w-100 comprar-btn">
                    Comprar
                </button>

            </div>

        </div>

        `;

        contenedor.appendChild(columna);

    });

mostrarPaginacion();

iniciarBotonesComprar();
iniciarAnimaciones();
}


function mostrarPaginacion(){

    const paginacion =
    document.getElementById(
        "paginacion"
    );

    paginacion.innerHTML = "";

    const totalPaginas =
    Math.ceil(
        productos.length /
        productosPorPagina
    );

    for(let i=1; i<=totalPaginas; i++){

        const li =
        document.createElement("li");

        li.className =
        `page-item ${
            i===paginaActual
            ? "active"
            : ""
        }`;

        const enlace = document.createElement("button");

enlace.className =
"page-link";

enlace.textContent = i;

enlace.addEventListener(
    "click",
    () => {
        paginaActual = i;
        mostrarProductos();
    }
);

li.appendChild(enlace);
        li.addEventListener(
            "click",
            (e)=>{

                e.preventDefault();

                paginaActual = i;

                mostrarProductos();

                window.scrollTo({
                    top:
                    document.getElementById(
                        "productos"
                    ).offsetTop - 100,
                    behavior:"smooth"
                });

            }
        );

        paginacion.appendChild(li);
    }
}

// ESPERAR A QUE CARGUE LA PÁGINA
document.addEventListener("DOMContentLoaded", () => {
    iniciarContadores();
    iniciarBotonTop();
        mostrarProductos();
    iniciarBotonesComprar();
    iniciarAnimaciones();

});
// CONTADORES ANIMADOS
function iniciarContadores(){
    const contadores =
    document.querySelectorAll(".contador");
    contadores.forEach(contador => {
        const objetivo =
        parseInt(
            contador.getAttribute("data-numero")
        );
        let valorActual = 0;
        const incremento =
        objetivo / 100;
        const actualizar = () => {
            valorActual += incremento;
            if(valorActual < objetivo){
                contador.innerText =
                Math.floor(valorActual);
                requestAnimationFrame(actualizar);
            }else{
                contador.innerText =
                objetivo.toLocaleString();
            }
        };
        actualizar();
    });
}
// BOTÓN VOLVER ARRIBA
function iniciarBotonTop(){
    const boton =
    document.getElementById("btnTop");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 300){//si el usuario ha bajado 300 pixeles se muestra
            boton.classList.add("mostrar");
        }else{
            boton.classList.remove("mostrar");
        }
    });
    boton.addEventListener("click", () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"//desplazamiento suave, sino se coloca se hace de una vez
        });
    });
}
// MENSAJE AL COMPRAR
function iniciarBotonesComprar(){
    const botones =
    document.querySelectorAll(".comprar-btn");
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            alert(
                "Producto agregado al carrito."
            );
        });
    });
}
// ANIMACIONES DE SCROLL
function iniciarAnimaciones(){
    const elementos =
    document.querySelectorAll(
        ".producto-card, .testimonial"
    );
    const observer =
    new IntersectionObserver(
        entradas => {
            entradas.forEach(entrada => {
                if(entrada.isIntersecting){
                    entrada.target.classList.add(
                        "visible"
                    );
                }
            });
        },
        {
            threshold:0.2
        }
    );
    elementos.forEach(elemento => {
        observer.observe(elemento);
    });
}
// CAMBIO DE COLOR DEL MENÚ
window.addEventListener("scroll", () => {
    const navbar =
    document.querySelector(".navbar");
    if(window.scrollY > 100){
        navbar.classList.add("navbar-scroll");
    }else{
        navbar.classList.remove(
            "navbar-scroll"
        );
    }
});
// SCROLL SUAVE MENÚ
document
.querySelectorAll('a[href^="#"]')
.forEach(enlace => {
    enlace.addEventListener( "click",
        function(e){
            e.preventDefault();
            const destino =
            document.querySelector(
                this.getAttribute("href")
            );
            if(destino){
                destino.scrollIntoView({
                    behavior:"smooth"
                });
            }
        }
    );

});
 // INICIALIZAR EMAILJS
    emailjs.init("d2fgpoRNyMcjmqQzZ");
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function(e){

      e.preventDefault();

      emailjs.sendForm(
          "service_zsco0tf",
          "template_yur0ton",
          this
      )
      .then(() => {

          document.getElementById("success").style.display = "block";

          formulario.reset();

      })
      .catch((error) => {

          alert("Error al enviar");

          console.log(error);

      });

  });
