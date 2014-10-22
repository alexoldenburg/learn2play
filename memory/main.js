_.templateSettings.variable = "rc";

var playfield = new Playfield();
var completePlayfield = playfield.build();

var cardTemplate = _.template($("script.card").html());

console.log("completePlayfield.cards:", completePlayfield.cards);
_.each(completePlayfield.cards, function (card) {
    console.log("card:", card);
    $("#playfield").append(
        cardTemplate(card)
    );
});

console.log('playfield:', playfield);
