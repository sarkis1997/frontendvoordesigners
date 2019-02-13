/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//selecteert alle buttons
var buttonAdd = document.querySelectorAll("button");

//loop door alle buttons en voegt events toe
for (i= 0; i < buttonAdd.length; i++) {
	
	buttonAdd[i].addEventListener("click", ButtonAddMovie);
}

//Functie die een eleemnt (movie) cloned naar de nieuwe lijst
function ButtonAddMovie() {  

//selecteert de 
var lijst = this.parentNode;
var cln = lijst.cloneNode(true);

//als de button niet gesaved is, save het dan anders console log niks doen. + nog een if function, verander button tekst.
if (this.innerHTML !== "Movie saved") {
	var nieuwelijst = document.getElementById("savedlist").appendChild(cln);
//veranderd de achtergrondkleur van de button
	this.style.backgroundColor = 'green';

//selecteer alle buttons in de savedlist
	var savedButtonAdd = document.querySelector("#savedlist").querySelectorAll("button");
//loop door alle buttons en voegt events toe
	for (i= 0; i < savedButtonAdd.length; i++) {
	savedButtonAdd[i].addEventListener("click", ButtonRemoveMovie);
	}
	//veranderd de tekst van de button
	this.innerHTML = "Movie saved";
 	
} else {
	console.log("niks doen");
	}
}


function ButtonRemoveMovie() {  
}



