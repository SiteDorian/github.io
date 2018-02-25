
var i, preti;
i=1;
preti=5;
function btnIncrement (argument) {
	i++;
	console.log(i);
	document.getElementById("nri").innerHTML="&nbsp" + i + "&nbsp";
	document.getElementById("pret").innerHTML="Pret: "+(i*15+preti)+"$";

}


function btnDecrement (argument) {
 
    if (i>1) {
   	  i--;
		console.log(i);
		document.getElementById("nri").innerHTML="&nbsp" + i + "&nbsp";
		document.getElementById("pret").innerHTML="Pret: "+(i*15+preti)+"$";
    }
}


function dalivrare(argument) {
	preti=5;
	document.getElementById("pret").innerHTML="Total: "+(i*15+preti)+"$";
}


function nulivrare(argument) {
	preti=0;
	document.getElementById("pret").innerHTML="Total: "+(i*15+preti)+"$";

}