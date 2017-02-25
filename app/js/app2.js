jQuery(document).ready(function($) {

	$(document).foundation();

	$( ".nav-toggle" ).click(function() {
	$(this).toggleClass("open");
	$("nav").fadeToggle(200);

	return false;
	});
});
