let saludo = ['Hola,', 'Hi,', 'Bienvenido,', 'Welcome,', 'Hi!!!!,', 'Que onda,', 'Holap,', 'Que tal,', 'Buenos días,', 'Buenas tardes,'];
let contenido = ['Lorem, ipsum dolor.', 'Lorem, ipsum dolor.', 'Lorem, ipsum dolor.', 'Lorem, ipsum dolor.', 'Lorem, ipsum dolor.', 'Lorem, ipsum dolo.', 'Lorem, ipsum dolor.', 'Lorem, ipsum dolor.', 'Lorem, ipsum dolor.', 'Lorem, ipsum dolor.'];
let despedida = ['Adios.', 'Adios.', 'Adios.', 'Adios.', 'Adios.', 'Adios.', 'Adios.', 'Adios.', 'Adios.', 'Adios.'];

let destino = document.querySelector("#destino");
let salto = document.createElement('br');
let mensajes = [];

for (let index = 0; index < saludo.length; index++) {
    mensajes[index] = `${index+1}. ${saludo[index]} ${contenido[index]} ${despedida[index]}`;
}

for (const item of mensajes) {
    destino.innerHTML += item;
    destino.appendChild(salto);
}

