# frontend voor designers - opdracht 2
Voor de tweede opdracht heb ik een portfolio slider gemaakt.
Hierbij heb ik geen click, maar keyevents gebruikt.
Dus doormiddel van de pijlen links en rechts kan je door de portfolio heen tikken.

Zoals gewoonlijk ben ik begonnen met de opzet van de bestandsstructuur, html, css en js. 
Vervolgens kwam het echte werk aan orde.

Ik heb voor deze opdracht nooit eerder met keyevents gewerkt, dus het was heel wat lezen en uitproberen. 
Na veel trial en errors had ik uiteindelijk keyevents die werkten.
Ik wist dat de keyevents werkten door te console loggen als ik op een key drukte.
Dus daar kon ik weer wat mee doen. 
Ik heb toen functies aangemaakt, dus als er een keyevent plaatsvond, roepte die een bepaalde functie op. 

De eerste stap om door de portfolio items te tikken, was om eerst de lijst met items op te halen. Ik maakte dus allerlei variabelen die d.m.v. querysellectors bepaalde elementen ophaalden uit de DOM, die ik later kon gebruiker in de functies.
De volgende stap was om te detecteren welke item actief is en weergeven moet worden.
Dit wilde ik eerst doen door een for loop alle img's een class toe te wijzen.
Op dat moment liep ik vast.
Na feedback bij de docent te halen en te praten over het probleem, kwam ik later op een oplossing door altijd een bepaalde img in de lijst een class "active" toe te wijzen. Dit was de basis voor de werkende script. 
Hierbij was de css ook belangrijk, als een element de class active heeft, moest het zichtbaar zijn. Anders moest het niet zichtbaar zijn.

Door te schetsen op papier, kon ik mij verbeelden hoe de carousel eruitzag. Namelijk een frame, waarin allemaal plaatjes achter elkaar staan en waarvan maar 1 zichtbaar kan zijn in het frame. Als het ware een rij die wacht om zichtbaar in beeld te komen.

Door gebruik van previous en next sibbling code, kon ik de class "active" verplaatsen.
Dus op een bepaalde keyevent werd de class verplaatst.
De carousel werkte.

Na de code te laten zien aan een paar vrienden, bleek er 1 ding te missen. De loop door de carousel werkte niet. Dit kwam dus als de laatste element in de lijst active was, kan je natuurlijk niet verder, omdat er niks is. 
De oplossing was toen snel duidelijk voormij, namelijk als er geen element erna is, moet je weer terug naar de eerste element in de lijst. Het maken van deze code was wel wat lastiger. Ik wist dat als de sibbling geen 'li' was dan moest er wat anders gebeuren door 'if/else' code. Dus als de sibbling geen li is, dan krijgt de eerste item in de list de class 'active'. Het probleem was dus dat het niet werkte, terwijl de code wel goed was. Door te console loggen, kwam ik erachter dat het domelement niet herkend werd. Ik moest dus eerst een check doen.

Ik deed dit door: "if (prevImage !== document.querySelector("anything"))" te gebruiken.
Dit werkte!
Achteraf bleek dus dat de docent aangaf dat de code "if (prevImage)" ook werkte i.p.v. de lange regel. 
Het checkt namelijk of prevImage leeg is en voert dan de code wel uit.