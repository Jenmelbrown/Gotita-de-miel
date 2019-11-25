this.logueado=false;

$("#entrar").click(function () {
	// body...
	if($("#usuario").val()=="Admin" && $("#contrasena").val()=='123'){
		logueado=true;
	 if (logueado==true) {
			window.location="./pages/Inicio.html"
		}
	}else{
		swal.fire('Error');
	}
});
$("#galeria").click(function(){
	window.location ="../pages/galeria.html"
});
$("#pdf").click(function(){
	window.location ="../pages/pdfs.html"
});
$("#prueba").click(function(){
	window.location ="../pages/prueba.html"
});

$("#salir").click(function(){
	window.location ="../index.html"
});
window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});