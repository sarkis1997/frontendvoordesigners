var header = document.querySelector('header');
var movies = document.querySelector('div');



var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var movies = request.response;
  populateHeader(movies);
  showMovies(movies);
}

// algemene header aangemaakt met h1
function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  // hier kan ik de h1 aanpassen in de header
  myH1.textContent = "Movies";
  header.appendChild(myH1);
}

// hier maak ik een paragraph, waarin ik content ga plaatsen
  function showMovies(jsonObj) {
  var myP = document.createElement('p');
  myP.textContent = "het werkt";
  movies.appendChild(myP);
  }