// form comprar
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const cedula = document.getElementById("cedula")
const formulario = document.getElementById("comprar1")
const parr = document.getElementById("warnings2")

form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings2 = ""
  let entrar = false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  parr.innerHTML=""
  if(nombre.value.length < 6){
    warnings2 += `El nombre no es valido <br>`
    entrar= true
  }
  if(apellido.value.length < 6){
    warnings2 += `El apellido no es valido <br>`
    entrar= true
  }
  console.log(regexEmail.test(email.value))
  if(!regexEmail.test(email.value)){
    warnings2 += `El correo no es valido <br>`
    entrar= true
  }
  
  if(cedula.value.length < 10){
    warnings2 += `El mensaje no es valido <br>`
    entrar= true
  }
  if(entrar){
    parr.innerHTML = warnings2
  }else{
    parr.innerHTML = "Enviado"
  }
  
})