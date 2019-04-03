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
          var title = document.createElement('h2');
          title.appendChild(document.createTextNode(currentMovie.title));

        // Maakt img element aan
          var img = document.createElement('img');
        // img is de cover van currentMovie
          img.src = currentMovie.cover;

          var reviewsOl = document.createElement('ol');
            for (var j = 0; j < currentMovie.reviews.length; j++) {
              var currentScore = currentMovie.reviews[j].score;

              var reviewsLi = document.createElement('li');
              reviewsLi.appendChild(document.createTextNode(currentScore));

              reviewsOl.appendChild(reviewsLi);
            }


        //Voegt de h2 toe aan li
          li.appendChild(title);
        //Voegt img toe aan li
          li.appendChild(img);
        //Voegt de OL van reviews aan de li
          li.appendChild(reviewsOl);
        //Plaatst de li in ul
          ul.appendChild(li);
    }
  } else if (this.readyState == 4 && this.status == 200) {
    //hier komt code voor als readystate of status andere code heeft (bijv 404)
    }

//Vanaf hier komt code voor keyevent
  var selectLi = document.querySelector("ul > li:first-of-type");
  var addClass = selectLi.classList.add('active');

  var currentImage = document.querySelector(".active");


  var prevImage = currentImage.previousElementSibling;
  var nextImage = currentImage.nextElementSibling;

  // currentImage.classList.remove('active');
  // console.log(currentImage.classList);

  //voegt event keydown toe aan het hele document en maakt functie intern aan.
  document.addEventListener("keyup", function(event) {
  	var currentImage = document.querySelector('.active');
  	var prevImage = currentImage.previousElementSibling;
  	var nextImage = currentImage.nextElementSibling;

      if (event.keyCode == 37) {
  	        console.log("Left was pressed");
  			document.querySelector('.active').classList.remove('active');

    			 	// checkt eerst of of de vorige sibbling geen "anything" (kan van alles zijn) is, dan ...
    		if (prevImage) {
    			if (prevImage.tagName === "LI"){
    	       		console.log('LI gevonden');
    	       		prevImage.classList.add('active');
    	     	}
    	     	 	// anders krijgt de laatste li active
    	    } else {
    				document.querySelector("ul > li:last-of-type").classList.add('active');
    	      	}
  	   }

     else if (event.keyCode == 39) {
     console.log("Right was pressed");
     document.querySelector('.active').classList.remove('active');

  	if (nextImage) {
  		if (nextImage.tagName === "LI"){
         		console.log('LI gevonden');
         		nextImage.classList.add('active');
         		}
  		} else {
         		document.querySelector("ul > li:first-of-type").classList.add('active');
         		}
  	}
  });
};
