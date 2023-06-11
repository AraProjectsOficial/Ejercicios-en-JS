//* Referencia a caja contenedora del formulario
let formBox = document.querySelector("#formulario");

//* Creación de inputs
let inputEmail = document.createElement("input");
let inputPass = document.createElement("input");

//* Creando titulo
let titulo1 = document.createElement("h3");

//* Creando btn de envio
let btnSubmit = document.createElement("button");

//* Creación de form
let form = document.createElement("form");

//* Creando div para btn
let btnBox = document.createElement("div");

//* Agregando atributos a inputs, btns y formulario
inputEmail.type = "email";
inputPass.type = "password";
inputEmail.placeholder = "Ingresa tu email: ";
inputPass.placeholder = "Ingresa tu contraseña:";
inputEmail.name = "email";
inputPass.name = "password";
btnSubmit.type = 'submit';
btnSubmit.innerText = "Enviar";
form.method = "POST";
form.action= "/form1";

//* Agregando texto al titulo
titulo1.innerText = "Inicio de sesión";

//* Agregando clases a inputs
inputEmail.classList.add('input');
inputPass.classList.add('input');
//* Agregando clases al titulo
titulo1.classList.add("titulo1");
//* Agregando clases al btn
btnSubmit.classList.add("btn");
//* Agregando clases al div del btn
btnBox.classList.add("btnBox");

//* Agregando btn al div
btnBox.append(btnSubmit);
//* Insertando titulo, inputs, btn de encio y salto en el formulario
form.append(titulo1);
form.append(inputEmail);
form.append(inputPass);
form.append(btnBox);

//* Agregando el formulario a la referencia de la caja
formBox.append(form);