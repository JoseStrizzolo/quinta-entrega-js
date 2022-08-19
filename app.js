let capital=parseInt(prompt("Introduzca el capital solicitado"));
alert('Eliga entre las siguiente opciones');

let boton3 = document.createElement('button'); 
boton3.type = 'button'; 
boton3.innerText = '3 cuotas con un interes de 10%'; 
document.getElementById('boton3').appendChild(boton3).onclick = function(){
alert('Elegiste 3 cuotas con un interes del 10%'); 	
let i3 = 10/100*capital;
let valorCuota3 = (capital + i3) / 3
alert("El monto de $"+capital+" en 3 cuotas y con un interes del 10% tendra un valor de $"+valorCuota3+" cada cuota");
}

let boton6 = document.createElement('button'); 
boton6.type = 'button'; 
boton6.innerText = '6 cuotas con un interes de 20%'; 
document.getElementById('boton6').appendChild(boton6).onclick = function(){
alert('Elegiste 6 cuotas con un interes del 20%'); 
let i6 = 20/100*capital;
let valorCuota6 = (capital + i6) / 6
alert("El monto de $"+capital+" en 6 cuotas y con un interes del 20% tendra un valor de $"+valorCuota6+" cada cuota");	 
} 

let boton9 = document.createElement('button'); 
boton9.type = 'button'; 
boton9.innerText = '9 cuotas con un interes de 30%'; 
document.getElementById('boton9').appendChild(boton9).onclick = function(){
alert('Elegiste 9 cuotas con un interes del 30%'); 
let i9 = 30/100*capital;
let valorCuota9 = (capital + i9) / 9
alert("El monto de $"+capital+" en 9 cuotas y con un interes del 30% tendra un valor de $"+valorCuota9+" cada cuota");
} 

let boton12 = document.createElement('button'); 
boton12.type = 'button'; 
boton12.innerText = '12 cuotas con un interes de 40%'; 
document.getElementById('boton12').appendChild(boton12).onclick = function(){
alert('Elegiste 12 cuotas con un interes del 40%'); 
let i12 = 40/100*capital;
let valorCuota12 = (capital + i12) / 12
alert("El monto de $"+capital+" en 12 cuotas y con un interes del 40% tendra un valor de $"+valorCuota12+" cada cuota");
} 

let boton24 = document.createElement('button'); 
boton24.type = 'button'; 
boton24.innerText = '24 cuotas con un interes de 50%'; 
document.getElementById('boton24').appendChild(boton24).onclick = function(){
alert('Elegiste 24 cuotas con un interes del 50%'); 
let i24 = 50/100*capital;
let valorCuota24 = (capital + i24) / 24
alert("El monto de $"+capital+" en 24 cuotas y con un interes del 50% tendra un valor de $"+valorCuota24+" cada cuota");
} 