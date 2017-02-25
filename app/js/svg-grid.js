
 var body = document.querySelector('body');
 var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");

 svg.setAttribute("id","svg1");
 svg.setAttribute("width","1000"); 
 svg.setAttribute("height","400");
 body.appendChild(svg);

function grid(val_x1, val_x2, val_y1, val_y2) {

	var ln = document.createElementNS("http://www.w3.org/2000/svg","line");
	ln.setAttribute('x1',val_x1);
	ln.setAttribute('x2',val_x2);
	ln.setAttribute('y1',val_y1);
	ln.setAttribute('y2',val_y2);
	svg.appendChild(ln);
}

function dibujar() {

	for (var i=20; i<=1000; i+=20) {

		grid(i, i, 0, 400);
	}

	for (var i=20; i<=400; i+=20) {

	grid(0, 1000, i, i);
	}
}

dibujar();

