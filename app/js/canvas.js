function dibujar() {

	let canv = document.getElementById("lienzo");
	can = canv.getContext("2d");

	let x=500,
		y=500;

	for(let i=0; i<=x; i+=10) {

		grid(i, 0, i, 500);
	}
	for(let i=0; i<=y; i+=10) {

		grid(0, i, 500, i);
	}
}


function grid(x1,y1,x2,y2) {

	can.beginPath();
	can.moveTo(x1,y1);
	can.lineTo(x2,y2);
	can.closePath();
	can.stroke();
}

window.addEventListener("load", dibujar, false);