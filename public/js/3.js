//* Referencias a las imagenes
let img1 = document.createElement("img");
let img2 = document.createElement("img");
let img3 = document.createElement("img");

let caja1 = document.querySelector("#box1");
let caja2 = document.querySelector("#box2");
let caja3 = document.querySelector("#box3");

img1.src = "https://images.pexels.com/photos/17133050/pexels-photo-17133050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
img2.src = "https://images.pexels.com/photos/16944644/pexels-photo-16944644/free-photo-of-bunff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
img3.src = "https://images.pexels.com/photos/6653118/pexels-photo-6653118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

img1.classList.add("imgStyle");
img2.classList.add("imgStyle");
img3.classList.add("imgStyle");

img3.height = "10px";

caja1.append(img1);
caja2.append(img2);
caja3.append(img3);