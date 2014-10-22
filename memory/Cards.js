var cardsAssort = [
    {name: "Circle"},
    {name: "Triangle"},
    {name: "Square"}
];

Cards = function (options) {

    options = options || {};
    var cards = [],
        self = this;

    this.create = function (name) {

        var cardType = _.find(cardsAssort, function (cardType) {
            return cardType.name === name;
        });

        if (cardType) {
            cards.push(cardType);
        }
    };

    this.build = function () {

        var playfieldCards = [];
        _.each(cards, function (card) {
            playfieldCards.push(card);
            playfieldCards.push(card);
        });
        return playfieldCards;
    };

    var getRandomizedCardType = function () {

        var cardTypes = ["Circle", "Triangle", "Square"];
        var randomized = Math.random(cardTypes.length);

        var randomizedCardType = cardTypes[Math.round(randomized)];

        var found = _.find(cards, function (card) {
            return card.name === randomizedCardType;
        });

        return (found) ? getRandomizedCardType() : randomizedCardType;
    };

    var init = function () {

        if (options.amount && _.isNumber(options.amount)) {

            var thisCards = _.range(options.amount);

            _.each(thisCards, function () {

                var randomized = getRandomizedCardType();
                self.create(randomized);
            });
        }
    };

    init();
    return this;
};
