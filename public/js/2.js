//* Referencias a btns
let uno = document.querySelector("#btn1");
let dos = document.querySelector("#btn2");
let tres = document.querySelector("#btn3");

//* Referencias a etiqueetas <p>
let p1 = document.querySelector("#txt1");
let p2 = document.querySelector("#txt2");
let p3 = document.querySelector("#txt3");

//* Acción "Insertar texto en el correspondiento <p> y un salto de linea, en respuesta al evento -click- del btn en cueestion"
uno.addEventListener('click', ()=>{
    p1.innerText += "Primer mensaje.";
    //! Este -salto- viene del archivo 1.js
    p1.appendChild(salto);
})

dos.addEventListener('click', ()=>{
    p2.innerText += "Segundo mensaje.";
    p2.appendChild(salto);
})

tres.addEventListener('click', ()=>{
    p3.innerText += "Tercer mensaje";
    p3.appendChild(salto);
})