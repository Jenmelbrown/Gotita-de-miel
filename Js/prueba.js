//Or with jquery
$(document).ready(function(){
   $('.datepicker').datepicker();
});

$(document).ready(function(){
   $('select').formSelect();
});

$('#Iniciar').click(function(){
	$('#p1').slideDown();
	$('#Iniciar').hide();
});

$('#siguiente').click(function(){
	if ($("#p1").show()) {
	    $("#p1").hide();
	}
	if ($("#p2").show()){
	    $("#p2").hide();
	}
	if ($("#p3").show()){
	    $("#p3").show();
	}
});




	
