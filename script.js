document.addEventListener("DOMContentLoaded", function () {
const toggle = document.getElementById("darkModeToggle");

    // Activar/desactivar modo oscuro
    toggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

    // Guardar preferencia en localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    }     
    else {
        localStorage.setItem("theme", "light");
    }
});

// Aplicar preferencia guardada
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});



function funBtnLogin() { 
    let userInput = document.getElementById("inputUser");
    let valorUser = userInput.value;

    let passInput = document.getElementById("inputPass");
    let valorPass=passInput.value;

//    if(valorUser=="Yony"){
        //window.alert("USUARIO CORRECTO");
//        if(valorPass=="123456"){
            //window.alert("PASS CORRECTO");
//            window.alert("LOGIN CORRECTO");
//        }
//        else{
//            window.alert("PASS INCORRECTO");
//        }
//    }
//    else{
//        window.alert("USUARIO INCORRECTO");
//    }

    

    //window.alert("SE PRESIONO LOGIN!!!!");
}


//function funBtnRegister(){
//    let divRegister = document.getElementById("divRegister");
//    let divLogin = document.getElementById("divLogin");
//    divRegister.hidden=false;
//    divLogin.hidden=true;
//}

function funBtnRegister(){
        let userReInput = document.getElementById("inputReUser");
        let valorReUser = userReInput.value;

        let passReInput = document.getElementById("inputRePass");
        let valorRePass = passReInput.value;

        let passRe2Input = document.getElementById("inputRePass2");
        let valorRe2Pass = passRe2Input.value;

        if(valorReUser !=""){
        // Mostrar el nombre de usuario en el div fijo
        //document.getElementById("usuarioDisplay").textContent = `Usuario: ${valorReUser}`;
        //document.addEventListener("DOMContentLoaded", () => {
        //    document.getElementById("usuarioDisplay").textContent = `Usuario: ${valorReUser}`;
            //}
        //);
            if(valorRePass==valorRe2Pass){
                alert("Registro completado");
            localStorage.setItem("usuario", valorReUser);
            const display = document.getElementById("usuarioDisplay");
                if (display) {
                    display.textContent = `Bienvenido/a, ${valorReUser}`;
                    display.style.position = "fixed";
                    display.style.top = "10px";
                    display.style.right = "10px";
                    display.style.zIndex = "9999";
                }
                }
            else{
                alert("Las contraseñas no son iguales");
            }
        }
        else{
            alert("Indique el nombre de usuario")
        }
        localStorage.setItem("usuario", valorReUser);
        window.addEventListener("DOMContentLoaded", () => {
        const usuario = localStorage.getItem("usuario");
            if (usuario) {
                document.getElementById("usuarioDisplay").textContent = `Bienvenido/a, ${usuario}`;
            }
        }
    );
}

document.addEventListener("DOMContentLoaded", () => {
    const usuario = localStorage.getItem("usuario");
    const display = document.getElementById("usuarioDisplay");
    if (usuario && display) {
    display.textContent = `Bienvenido/a, ${usuario}`;
    display.style.position = "fixed";
    display.style.top = "10px";
    display.style.right = "10px";
    display.style.zIndex = "9999";
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const seccion = document.getElementById("section");

  seccion.addEventListener("mouseover", () => {
    seccion.style.backgroundColor = "#7c7a7a46";
  });

  seccion.addEventListener("mouseout", () => {
    seccion.style.backgroundColor = ""; // Vuelve al color original
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const seccion = document.getElementById("article");

  seccion.addEventListener("mouseover", () => {
    seccion.style.backgroundColor = "#7c7a7a46";
  });

  seccion.addEventListener("mouseout", () => {
    seccion.style.backgroundColor = ""; // Vuelve al color original
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const seccion = document.getElementById("aside");

  seccion.addEventListener("mouseover", () => {
    seccion.style.backgroundColor = "#7c7a7a46";
  });

  seccion.addEventListener("mouseout", () => {
    seccion.style.backgroundColor = ""; // Vuelve al color original
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const fecha = new Date();

  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const fechaFormateada = fecha.toLocaleDateString("es-ES", opciones);

  const contenedor = document.getElementById("fechaActual");
  if (contenedor) {
    contenedor.textContent = `📅 ${fechaFormateada}`;
    contenedor.style.position = "fixed";
    contenedor.style.bottom = "10px";
    contenedor.style.right = "10px";
    contenedor.style.zIndex = "9999";
  }
      // Función para actualizar la hora cada segundo
    function actualizarFechaHora() {
      const ahora = new Date();
      const opcionesFecha = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      const fecha = ahora.toLocaleDateString("es-ES", opcionesFecha);
      const hora = ahora.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

      contenedor.textContent = `📅 ${fecha} 🕒 ${hora}`;
    }

    // Actualizar inmediatamente y luego cada segundo
    actualizarFechaHora();
    setInterval(actualizarFechaHora, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("toggleMenu");
  const menu = document.getElementById("menuDesplegable");

  boton.addEventListener("click", () => {
    // Alterna entre mostrar y ocultar el menú
    if (menu.classList.contains("visible")) {
      menu.classList.remove("visible");
      menu.classList.add("oculto");
    } else {
      menu.classList.remove("oculto");
      menu.classList.add("visible");
    }
  });
});

window.addEventListener("scroll", () => {
  const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
  const scrollActual = window.scrollY;
  const porcentaje = (scrollActual / scrollTotal) * 100;

  const barra = document.getElementById("barraScroll");
  if (barra) {
    barra.style.width = `${porcentaje}%`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const imagenes = [
    src = "./imagenes/imagen1.webp",
    src = "./imagenes/imagen2.jpg",
    src = "./imagenes/imagen3.jpg"
  ];

  let indiceActual = 0;
  const imagen = document.getElementById("sliderImage");
  const btnAnterior = document.getElementById("prevBtn");
  const btnSiguiente = document.getElementById("nextBtn");

  function mostrarImagen(indice) {
    imagen.src = imagenes[indice];
  }

  btnAnterior.addEventListener("click", () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
  });

  btnSiguiente.addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
  });

  mostrarImagen(indiceActual);
});

document.addEventListener("DOMContentLoaded", () => {
  // Espera un momento antes de mostrar la página suavemente
  setTimeout(() => {
    document.body.classList.add("visible");
  }, 100);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactoForm");

  form.addEventListener("submit", (e) => {
    let valido = true;

    // Limpiar errores previos
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // Validar nombre
    const nombre = document.getElementById("nombre");
    if (nombre.value.trim() === "") {
      document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
      valido = false;
    }

    // Validar email
    const email = document.getElementById("email");
    if (!email.value.includes("@")) {
      document.getElementById("errorEmail").textContent = "El correo debe contener '@'.";
      valido = false;
    }

    // Validar asunto
    const asunto = document.getElementById("asunto");
    if (asunto.value.trim() === "") {
      document.getElementById("errorAsunto").textContent = "El asunto es obligatorio.";
      valido = false;
    }

    // Validar mensaje
    const mensaje = document.getElementById("mensaje");
    if (mensaje.value.trim().length < 10) {
      document.getElementById("errorMensaje").textContent = "El mensaje debe tener al menos 10 caracteres.";
      valido = false;
    }

    // Si hay errores, cancelar envío
    if (!valido) {
      e.preventDefault();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactoForm");
  const mensajeExito = document.getElementById("mensajeExito");

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");

  // 🔹 Al cargar la página, rellenar con lo guardado en localStorage
  if (localStorage.getItem("nombre")) {
    nombre.value = localStorage.getItem("nombre");
  }
  if (localStorage.getItem("email")) {
    email.value = localStorage.getItem("email");
  }

  form.addEventListener("submit", (e) => {
    let valido = true;

    // Limpiar errores previos
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // Validar nombre
    if (nombre.value.trim() === "") {
      document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
      valido = false;
    }

    // Validar email
    if (!email.value.includes("@")) {
      document.getElementById("errorEmail").textContent = "El correo debe contener '@'.";
      valido = false;
    }

    // Validar asunto
    const asunto = document.getElementById("asunto");
    if (asunto.value.trim() === "") {
      document.getElementById("errorAsunto").textContent = "El asunto es obligatorio.";
      valido = false;
    }

    // Validar mensaje
    const mensaje = document.getElementById("mensaje");
    if (mensaje.value.trim().length < 10) {
      document.getElementById("errorMensaje").textContent = "El mensaje debe tener al menos 10 caracteres.";
      valido = false;
    }

    if (!valido) {
      e.preventDefault();
      return;
    }

    // Guardar nombre y correo en localStorage
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("email", email.value);

    // Evitar recarga y mostrar mensaje animado
    e.preventDefault();
    mensajeExito.innerHTML = `<span class="icono">✅</span> Mensaje enviado correctamente`;
    mensajeExito.classList.add("ok");

    // Limpiar formulario (excepto nombre y correo, que se mantienen)
    document.getElementById("asunto").value = "";
    document.getElementById("mensaje").value = "";

    // Ocultar después de 5s
    setTimeout(() => {
      mensajeExito.classList.remove("ok");
      setTimeout(() => {
        mensajeExito.style.display = "none";
      }, 800);
    }, 5000);
  });
});