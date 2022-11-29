let citations = [
    ["Sacha Woody", "Je ne suis pas un raciste"],
    ["Jeremy Dasi", "Je ne suis pas raciste non plus"],
    ["Lokman", "Je suis un chinois"],
    ["Eva", "J'aime le cheval"]
]


var buttonSelector = document.querySelector("button");
var pselector = document.querySelector("p");

var previousCitation = null
var actualCitation = null

buttonSelector.addEventListener("click", function (event) {
    var tamp = previousCitation 
        
    do previousCitation = foundCitation()
    while(tamp == previousCitation)
    
    displayCitation(previousCitation)
});


function displayCitation(actualCitation) {
  
  pselector.textContent = `${citations[actualCitation][0]} | ${citations[actualCitation][1]}`;
}

function foundCitation() {
    random = Math.floor(Math.random() * citations.length);
    return random
}