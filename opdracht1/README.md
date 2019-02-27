# frontend voor designers - opdracht 1
Ik heb een code gemaakt waarin je films kan bekijken en deze kan opslaan door een druk op de 'save movie' knop.
De eerste stap was de html code opzetten en stylen door css toe te voegen.
Vervolgens ben ik begonnen met de eerste regels javascript.
Het was een vrij lange tijd geleden dat ik met javascript had gewerkt, dus het duurde wel even voor ik in de flow kwam.
Na wat research gedaan te hebben naar javascript ben ik gaan nadenken hoe ik moest beginnen en welke stappen er zijn in het concept. 

Om te beginnen moest ik een werkende button opzetten.
Dit was een vrij lastige stap voor mij, terwijl het echt een van de basis dingen is die je moet weten van javascript.
Toen dit was gelukt, ging het al wat vlotter en voegde ik een queryselector toe.
Na veel pogingen en frustratie lukte het uiteindelijk om een film te selecteren en te clonen.
Hierbij ben ik zelfs achter een nieuwe javascript methode gekomen, genaamd 'CloneNode'.
De docent had hier zelf ook nooit eerder van gehoord.
Zie https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode voor de methode.

Ik heb toen van medestudenten en ook van de docent feedback gekregen op mijn code.
Onnodige classes/id's heb ik weggehaald uit mijn code, omdat ik html elementen op een handigere manier kan selecteren.
Daarnaast moest ik dus nadenken wat gebeurde als er nieuwe films zouden verschijnen in de lijst.
Ik selecteerde namelijk de films op class naam om te clonen, wat achteraf dus super onhandig bleek.
Hierbij bood een for loop de uitkomst.
Door alle buttons op te halen uit de html en in een for loop te plaatsen, kon ik met een paar regels code een clickevent meegeven aan iedere button. 
Dus ook als er nieuwe films verschijnen, wordt automatisch de button door de code opgehaald en krijgt deze ook een clickevent.

Na wat feedback van medestudenten ben ik verder gaan nadenken over verdere functionaliteiten en microinteracties.
De gebruiker moest feedback krijgen als een interactie was gelukt.
Als een film werd toegevoegd aan de 'saved list', verandere ik de innerHTML en de button kleur.

Vervolgens weer met de docent besproken en medestudenten de code laten zien, kreeg ik als feedback dat een film meerdere keren kon worden toegevoegd aan de 'saved list'.
Dit heb ik toen op een simpele manier opgelost welke mij veel frustratie heeft opgeleverd tot ik erachterkwam.
Door de innerHTML te checken in een if/else statement, kon ik dat de clone werd uitgevoerd bij een bepaalde voorwaarde.
