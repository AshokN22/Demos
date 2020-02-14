document.write("Current Date : " + new Date());

function Calculate(){
	var a = parseInt(document.getElementById("fno").value);
	var b = parseInt(document.getElementById("sno").value);
	var c = a + b;
	document.getElementById("res").value = c.toString();
}