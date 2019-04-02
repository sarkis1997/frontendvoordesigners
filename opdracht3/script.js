var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
var request = new XMLHttpRequest();

// Request open haalt de json op van Koop's github en send verstuurt de request naar de server.
request.open('GET', requestURL);
request.send();

//Als de XMLHttpRequest de state 'done' (4) heeft EN status 200 (alles is OK) dan wordt het JSON bestand geparsed.
request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(request.responseText);
    console.log(response);
  }
};
