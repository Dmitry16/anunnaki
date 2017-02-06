// "circle" may be any tag name
var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");

shape.setAttribute("cx", 25);
shape.setAttribute("cy", 25);
shape.setAttribute("r",  20);
shape.setAttribute("fill", "green");

var svg = document.querySelector('svg');
svg.appendChild(shape);