var $playField = $("#playfield");

_.templateSettings.variable = "rc";

var playfield = new Playfield();
var completePlayfield = playfield.build();

var cardTemplate = _.template($("script.card").html());
_.each(completePlayfield.cards, function (card) {

    $playField.append(
        cardTemplate(card)
    );
});

var currentOpenCard = {};
$playField.find(".card").on({
    "click": function (e) {

        var $target = $(e.currentTarget);

        console.log("CLICKED:", $target);
        if ($target.hasClass("closed")) {

            var match = (currentOpenCard && currentOpenCard.type) ? currentOpenCard.type === $target.data("type") : false;
            if (match) {

                currentOpenCard.card.addClass("matched");
                currentOpenCard.card.toggleClass("closed open", false);
                $target.addClass("matched");
                $target.toggleClass("closed open", false);
                console.log("MATCH!");
                currentOpenCard = {};
            } else {

                if (currentOpenCard.type) {

                    currentOpenCard.card.toggleClass("closed open");

                    console.log("both cards must be closed!");

                    currentOpenCard = {};
                } else {
                    currentOpenCard = {
                        card: $target,
                        type: $target.data("type")
                    };
                    $target.toggleClass("closed open");
                }
            }
        } else if ($target.hasClass("open")) {
            currentOpenCard = {};
            $target.toggleClass("closed open");
        }
    }
});
console.log('playfield:', playfield);
