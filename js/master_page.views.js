$(document).ready(function(){

$("#menu_top").load("../template/navbar.template.html");
$("#menu_top-a").load("../template/navbar.template-a.html");
$("#menu_left").load("../template/navbar_left.template.html");
$("#menu_left-a").load("../template/navbar_left.template-a.html");
$("#foot").load("../template/footer.template.html");

$(document.body).on('click', '.inactivo' ,function(){
	$( ".activo" ).each(function( index ) {
    	$( this ).removeClass("activo").addClass("inactivo");
    });
  $( this ).removeClass("inactivo").addClass("activo");
});
});