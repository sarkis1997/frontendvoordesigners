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
          var imgContainer = document.createElement('div');

          var img = document.createElement('img');
        // img is de cover van currentMovie
          img.src = currentMovie.cover;

//-------- HIER WORDEN DE REVIEWS INGELANDEN --------//
          var reviewsOl = document.createElement('span');
          reviewsOl.appendChild(document.createTextNode("Laatste beoordelingen:"));
          var addTextScore = document.querySelector('span');

            for (var j = 0; j < currentMovie.reviews.length; j++) {
              var currentScore = currentMovie.reviews[j].score;

              var reviewsLi = document.createElement('li');
              reviewsLi.appendChild(document.createTextNode(currentScore + ", "));
              reviewsOl.appendChild(reviewsLi);
            }
//-------- HIER WORDT DE GEMIDDELDE RATING BEPAALD VAN DE FILM --------//
            var averageScore = 0;
            for (var k = 0; k < currentMovie.reviews.length; k++) {
                averageScore += currentMovie.reviews[k].score;
            }
            var avg = averageScore / currentMovie.reviews.length;
            var avgLi = document.createElement('li');
            avgLi.appendChild(document.createTextNode(avg));

            //Checkt of er al een review is geplaatst door de innerHTML te checken op een getal.
            if (isNaN(avgLi.innerHTML)) {
              avgLi.innerHTML = "Er zijn nog geen beoordelingen voor deze film!";
              reviewsOl.innerHTML = "";
            }


            var li = document.createElement('li');
            // Voegt li item toe door een text NODE met (movieTitle) inhoud aan te maken
            var reviewsTitle = document.createElement('h3');
            reviewsTitle.appendChild(document.createTextNode("Reviews"));

            var scoreTitle = document.createElement('h3');
            scoreTitle.appendChild(document.createTextNode("Deze film is beoordeeld met een"));

        //Voegt de h2 toe aan li
          li.appendChild(title);
        //Voegt de 3 toe aan li
          li.appendChild(scoreTitle);
        //voegt de Average van reviews to aan li
          li.appendChild(avgLi)
        //Voegt imgContainer toe aan li
          li.appendChild(imgContainer);
        //voegt de img toe in de container
          imgContainer.appendChild(img);
        //Voegt de OL van reviews aan de li
          li.appendChild(reviewsTitle);
          li.appendChild(reviewsOl);
        //Plaatst de algemene li in ul
          ul.appendChild(li);
    }

  } else if (this.readyState == 4 && this.status == 200) {
    //hier komt code voor als readystate of status andere code heeft (bijv 404)
    }

//------- BUTTON ONCLICK EVENT RECHTS------- //
  var selectLi = document.querySelector("ul > li:first-of-type");
  var addClass = selectLi.classList.add('active');

  var currentImage = document.querySelector(".active");


  //voegt event keydown toe aan het hele document en maakt functie intern aan.
};

//------- BUTTON ONCLICK EVENT LINKS ------- //
var prevBtnclick = document.getElementById("prevbuttonClass");
prevBtnclick.onclick = function() {

  var currentImage = document.querySelector('.active');
  var prevImage = currentImage.previousElementSibling;
  var nextImage = currentImage.nextElementSibling;

    if (prevBtnclick) {
      document.querySelector('.active').classList.remove('active');

          // checkt eerst of of de vorige sibbling geen "anything" (kan van alles zijn) is, dan ...
      if (prevImage) {
        if (prevImage.tagName === "LI"){
              prevImage.classList.add('active');
          }
            // anders krijgt de laatste li active
        } else {
          document.querySelector("ul > li:last-of-type").classList.add('active');
            }
     }
}

//------- BUTTON ONCLICK EVENT RECHTS------- //
var nextBtnclick = document.getElementById("nextbuttonClass");
nextBtnclick.onclick = function() {

  var currentImage = document.querySelector('.active');
  var prevImage = currentImage.previousElementSibling;
  var nextImage = currentImage.nextElementSibling;

    if (nextBtnclick) {
      document.querySelector('.active').classList.remove('active');

     if (nextImage) {
       if (nextImage.tagName === "LI"){
             nextImage.classList.add('active');
             }
       } else {
             document.querySelector("ul > li:first-of-type").classList.add('active');
             }
     }
}

//------- KEY EVENTS ------- //
document.addEventListener("keyup", function(event) {
  var currentImage = document.querySelector('.active');
  var prevImage = currentImage.previousElementSibling;
  var nextImage = currentImage.nextElementSibling;

    if (event.keyCode == 37) {
      document.querySelector('.active').classList.remove('active');

          // checkt eerst of of de vorige sibbling geen "anything" (kan van alles zijn) is, dan ...
      if (prevImage) {
        if (prevImage.tagName === "LI"){
              prevImage.classList.add('active');
          }
            // anders krijgt de laatste li active
        } else {
          document.querySelector("ul > li:last-of-type").classList.add('active');
            }
     }

   else if (event.keyCode == 39) {
   document.querySelector('.active').classList.remove('active');

  if (nextImage) {
    if (nextImage.tagName === "LI"){
          nextImage.classList.add('active');
          }
    } else {
          document.querySelector("ul > li:first-of-type").classList.add('active');
          }
  }
});
