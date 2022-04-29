// form contacto
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const asunto = document.getElementById("asunto")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("contacto1")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings = ""
  let entrar = false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  parrafo.innerHTML=""
  if(nombre.value.length < 6){
    warnings += `El nombre no es valido <br>`
    entrar= true
  }
  console.log(regexEmail.test(correo.value))
  if(!regexEmail.test(correo.value)){
    warnings += `El correo no es valido <br>`
    entrar= true
  }
  if(asunto.value.length < 6){
    warnings += `El asunto no es valido <br>`
    entrar= true
  }
  if(asunto.value.length < 8){
    warnings += `El mensaje no es valido <br>`
    entrar= true
  }
  if(entrar){
    parrafo.innerHTML = warnings
  }else{
    parrafo.innerHTML = "Enviado"
  }
  
})

// form comprar
const usuario = document.getElementById("usuario")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const cedula = document.getElementById("cedula")
const formulario = document.getElementById("form")
const parr = document.getElementById("warnings")

form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings = ""
  let entrar = false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  parr.innerHTML=""
  if(usuario.value.length < 6){
    warnings += `El nombre no es valido <br>`
    entrar= true
  }
  if(apellido.value.length < 6){
    warnings += `El apellido no es valido <br>`
    entrar= true
  }
  console.log(regexEmail.test(email.value))
  if(!regexEmail.test(email.value)){
    warnings += `El correo no es valido <br>`
    entrar= true
  }
  
  if(cedula.value.length < 10){
    warnings += `El mensaje no es valido <br>`
    entrar= true
  }
  if(entrar){
    parr.innerHTML = warnings
  }else{
    parr.innerHTML = "Enviado"
  }
  
})