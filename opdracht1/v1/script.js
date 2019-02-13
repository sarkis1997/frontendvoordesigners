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
var lijst = this.parentElement;
var cln = lijst.cloneNode(true);

//als de button niet gesaved is, save het dan anders console log niks doen. + nog een if function, verander button tekst.
if (this.innerHTML !== "Movie saved") {
	var nieuwelijst = document.getElementById("savedlist").appendChild(cln);

		//veranderd de tekst van de button
		this.innerHTML = "Movie saved";
 		if (this.innerHTML === "Movie saved") {
 		console.log("Het is gesaved")
 	}
} else {
	console.log("niks doen")
}

}