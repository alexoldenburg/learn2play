var cardsAssort = [
    {name: "Circle", type: "circle"},
    {name: "Triangle", type: "triangle"},
    {name: "Square", type: "square"}
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

            playfieldCards.push(_.clone(card));
            playfieldCards.push(_.clone(card));
        });
        return playfieldCards.shuffle();
    };

    var getRandomizedCardType = function () {

        var cardTypes = ["Circle", "Triangle", "Square"];
        var randomized = Math.random() * (cardTypes.length - 1);
        var randomizedCardType = cardTypes[Math.round(randomized)];

        var found = _.find(cards, function (card) {
            return card.name === randomizedCardType;
        });

        return (found) ? getRandomizedCardType() : randomizedCardType;
    };

    var init = function () {

        if (options.amount && _.isNumber(options.amount) && options.amount > 0) {

            var thisCards = _.range(options.amount);
            _.each(thisCards, function (value, key) {

                var randomized = getRandomizedCardType();
                self.create(randomized);
            });
        }
    };

    init();
    return this;
};
