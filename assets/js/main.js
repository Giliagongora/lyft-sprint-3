var numb = ["0","1","2","3","4","5","6","7","8","9"];
document.getElementById("box1").value;

document.getElementById("boton").addEventListener("click", 
	function botoncillo(){
	if(box1 == "" || box1.length !== numb){
		return alert("Debes ingresar tu número")
	}else if(box1 !== numb){
		alert("Gacias")	
	}else{
		alert("Gracias")
	}
	});