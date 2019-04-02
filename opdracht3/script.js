var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var request = new XMLHttpRequest();

// Request open haalt de json op van Koop's github en send verstuurt de request naar de server.
request.open('GET', requestURL);
request.send();

//Als de XMLHttpRequest de state 'done' (4) heeft EN status 200 (alles is OK) dan wordt het JSON bestand geparsed.
request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(request.responseText);

    //krijgt de reviews van iedere film terug
    for (var i = 0; i < response.length; i++) {

          var currentMovie = response[i];
        //Haalt ul op
          var ul = document.getElementById("ulMovies");
        // Maakt li item
          var li = document.createElement('li');
        // Voegt li item toe door een text NODE met (movieTitle) inhoud aan te maken
          li.appendChild(document.createTextNode(currentMovie.title));
        // Maakt img element aan
          var img = document.createElement('img');
          img.src = currentMovie.cover;
        //Voegt img toe aan li
          li.appendChild(img);
        //Plaatst de li in ul
          ul.appendChild(li);




    }


  }
};

//
// Your function is returning a string rather than the div node. appendChild can only append a node
//
// var d= document.createElement("div");
// d.classList.add("help-block");
// document.getElementById("firstName-    group").appendChild(d);
