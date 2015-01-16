


$(document).ready(function(){

$("#menu_top").load("../template/navbar.template.html");
$("#menu_top-a").load("../template/navbar.template-a.html");
$("#menu_left").load("../template/navbar_left.template.html");
$("#menu_left-a").load("../template/navbar_left.template-a.html");
$("#register").load("../template/register.template.html");

$("#foot").load("../template/footer.template.html");

$(document.body).on('click', '.inactivo' ,function(){
	$( ".activo" ).each(function( index ) {
    	$( this ).removeClass("activo").addClass("inactivo");
    });
  $( this ).removeClass("inactivo").addClass("activo");
});


$(document.body).on('click', '.bg-verde-dark' ,function(){
	$( ".bg-verde-dark" ).each(function( index ) {
    	$( this ).removeClass("activo").addClass("inactivo");
    });
  $( this ).removeClass("inactivo").addClass("activo");


  


});


$(document).ready( function() {


    $('#myCarousel').carousel({
		interval:   4000 //Para activar el movimiento automatico del slides
		//interval:   false //Para desactivar el movimiento automatico del slides
	});


	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});
});