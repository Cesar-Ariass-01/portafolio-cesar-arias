const botonTema=document.getElementById("botonTema");
const formulario=document.getElementById("formularioContacto");
const aviso=document.getElementById("mensajeFormulario");

document.getElementById("anioActual").textContent=new Date().getFullYear();

botonTema.addEventListener("click",()=>{
  const html=document.documentElement;
  const oscuro=html.getAttribute("data-bs-theme")==="dark";
  html.setAttribute("data-bs-theme",oscuro?"light":"dark");
  botonTema.innerHTML=oscuro?'<i class="bi bi-moon-stars-fill me-1"></i>Modo oscuro':'<i class="bi bi-sun-fill me-1"></i>Modo claro';
});

formulario.addEventListener("submit",event=>{
  event.preventDefault();
  const nombre=document.getElementById("nombre").value.trim();
  const correo=document.getElementById("correo").value.trim();
  const mensaje=document.getElementById("mensaje").value.trim();
  const correoValido=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  aviso.classList.remove("d-none","alert-danger","alert-success");
  if(!nombre||!correo||!mensaje){aviso.classList.add("alert-danger");aviso.textContent="Complete todos los campos antes de enviar.";return;}
  if(!correoValido){aviso.classList.add("alert-danger");aviso.textContent="Ingrese un correo electrónico válido.";return;}
  aviso.classList.add("alert-success");
  aviso.textContent=`Gracias, ${nombre}. El formulario fue validado correctamente.`;
  formulario.reset();
});
