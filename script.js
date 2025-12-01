const modoOscuroBtn = document.getElementById("modo-oscuro");

// Al cargar la página, aplicar preferencia guardada
if (localStorage.getItem("modoOscuro") === "true") {
  document.body.classList.add("dark");
  modoOscuroBtn.textContent = "Modo claro";
}

// Alternar modo oscuro
modoOscuroBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const activo = document.body.classList.contains("dark");
  localStorage.setItem("modoOscuro", activo);

  // Cambiar texto del botón
  modoOscuroBtn.textContent = activo ? "Modo claro" : "Modo oscuro";
});


let productos = JSON.parse(localStorage.getItem("productos")) || [];

const panel = document.getElementById("gestor-corepc");
const toggleBtn = document.getElementById("toggleProductos");
const lista = document.getElementById("lista-productos");
const nombreInput = document.getElementById("nombre");
const precioInput = document.getElementById("precio");
const filtroInput = document.getElementById("filtro");
const agregarBtn = document.getElementById("agregar");
const mensaje = document.getElementById("mensaje");

// Mostrar/ocultar panel
toggleBtn.addEventListener("click", () => {
  panel.classList.toggle("oculto");
  toggleBtn.textContent = panel.classList.contains("oculto")
    ? "Mostrar productos"
    : "Ocultar productos";
});

// Guardar en localStorage
function guardarLocal() {
  localStorage.setItem("productos", JSON.stringify(productos));
}

// Mensaje flotante
function mostrarMensaje(texto) {
  mensaje.textContent = texto;
  mensaje.style.display = "block";
  setTimeout(() => mensaje.style.display = "none", 2000);
}

// Renderizar lista
function renderLista(filtro = "") {
  lista.innerHTML = "";
  productos
    .filter(p => p.nombre.toLowerCase().includes(filtro.toLowerCase()))
    .forEach(p => {
      const li = document.createElement("li");
      li.className = "producto";
      li.innerHTML = `
        <span>${p.nombre} - ${p.precio}€</span>
        <button onclick="eliminarProducto(${p.id})">Eliminar</button>
      `;
      lista.appendChild(li);
    });
}

// Eliminar producto
function eliminarProducto(id) {
  productos = productos.filter(p => p.id !== id);
  guardarLocal();
  renderLista(filtroInput.value);
  mostrarMensaje("Producto eliminado.");
}

// Agregar producto
agregarBtn.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  const precio = parseFloat(precioInput.value);
  if (!nombre || isNaN(precio)) {
    alert("Introduce un nombre y precio válido.");
    return;
  }
  productos.push({ id: Date.now(), nombre, precio });
  guardarLocal();
  renderLista(filtroInput.value);
  nombreInput.value = "";
  precioInput.value = "";
  mostrarMensaje("Producto agregado.");
});

// Filtrar productos
filtroInput.addEventListener("input", () => renderLista(filtroInput.value));

// Cargar datos externos
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    productos = productos.concat(data);
    guardarLocal();
    renderLista();
  })
  .catch(err => console.error("Error al cargar datos externos:", err));

// Inicializar
renderLista();

// Mostrar secciones al hacer clic en el menú
document.querySelectorAll("nav a, nav button").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    const id = el.getAttribute("href")?.replace("#", "") || el.id.replace("toggle", "").toLowerCase();
    document.querySelectorAll("section").forEach(sec => sec.classList.add("oculto"));
    const target = document.getElementById(id);
    if (target) target.classList.remove("oculto");
  });
});

// Cesta de compra (simulada)
const listaCesta = document.getElementById("lista-cesta");
const totalCesta = document.getElementById("total-cesta");
let cesta = [];

function agregarACesta(producto) {
  cesta.push(producto);
  renderCesta();
}

function renderCesta() {
  listaCesta.innerHTML = "";
  let total = 0;
  cesta.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - ${p.precio}€`;
    listaCesta.appendChild(li);
    total += p.precio;
  });
  totalCesta.textContent = `Total: ${total}€`;
}

// Formulario de contacto
const formContacto = document.getElementById("form-contacto");
const respuestaContacto = document.getElementById("respuesta-contacto");

formContacto.addEventListener("submit", e => {
  e.preventDefault();
  respuestaContacto.classList.remove("oculto");
  formContacto.reset();
  setTimeout(() => respuestaContacto.classList.add("oculto"), 3000);
});

const btnConfig = document.getElementById("btn-config");
const menuConfig = document.getElementById("menu-config");

btnConfig.addEventListener("click", () => {
  menuConfig.classList.toggle("oculto");
});

// Ejemplo de acciones de configuración
document.getElementById("modo-oscuro").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const registro = document.getElementById("registro");
const formRegistro = document.getElementById("form-registro");
const bienvenida = document.getElementById("bienvenida");
const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
const skipBtn = document.getElementById("skip");

// Comprobar si ya hay un usuario registrado
const usuarioGuardado = localStorage.getItem("usuario");
if (usuarioGuardado) {
  mostrarBienvenida(usuarioGuardado);
}

// Función para mostrar bienvenida
function mostrarBienvenida(nombre) {
  registro.classList.add("oculto");
  bienvenida.classList.remove("oculto");
  mensajeBienvenida.textContent = `Bienvenido ${nombre}, a CorePC`;
}

// Evento de registro
formRegistro.addEventListener("submit", e => {
  e.preventDefault();
  const nombre = document.getElementById("nombre-registro").value.trim();
  const email = document.getElementById("password").value.trim();

  if (!nombre || !email) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  localStorage.setItem("usuario", nombre);
  mostrarBienvenida(nombre);
});

// Evento de saltar registro
skipBtn.addEventListener("click", () => {
  mostrarBienvenida("invitado");
});


// Renderizar lista de productos con botón "Añadir a cesta"
function renderLista(filtro = "") {
  lista.innerHTML = "";
  productos
    .filter(p => p.nombre.toLowerCase().includes(filtro.toLowerCase()))
    .forEach(p => {
      const li = document.createElement("li");
      li.className = "producto";
      li.innerHTML = `
        <span>${p.nombre} - ${p.precio}€</span>
        <div>
          <button onclick="agregarACesta(${p.id})">Añadir a cesta</button>
          <button onclick="eliminarProducto(${p.id})">Eliminar</button>
        </div>
      `;
      lista.appendChild(li);
    });
}

// ------------------ CESTA ------------------
function agregarACesta(id) {
  const producto = productos.find(p => p.id === id);
  if (producto) {
    cesta.push(producto);
    renderCesta();
    mostrarMensaje(`${producto.nombre} añadido a la cesta.`);
  }
}

function renderCesta() {
  listaCesta.innerHTML = "";
  let total = 0;
  cesta.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - ${p.precio}€`;
    listaCesta.appendChild(li);
    total += p.precio;
  });
  totalCesta.textContent = `Total: ${total}€`;
}

// ------------------ COMPRA ------------------
const btnComprar = document.getElementById("btn-comprar");
const compraCompletada = document.getElementById("compra-completada");

btnComprar.addEventListener("click", () => {
  if (cesta.length === 0) {
    alert("Tu cesta está vacía.");
    return;
  }

  // Ocultar cesta y mostrar apartado de compra completada
  document.getElementById("cesta").classList.add("oculto");
  compraCompletada.classList.remove("oculto");

  // Vaciar cesta
  cesta = [];
  renderCesta();
});

