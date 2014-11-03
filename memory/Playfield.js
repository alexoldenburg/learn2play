Playfield = function (options) {

    options = options || {};

    var self = this,
        __defaultOptions = {
            cards: {
                amount: 3
            }
        };

    var playfieldOptions = _.extend({}, __defaultOptions, options);

    var init = function () {
        self.cards = new Cards(playfieldOptions.cards);
    };

    this.build = function () {

        var cards = self.cards.build();
        return {
            cards: cards
        }
    };

    init();
    return this;
};
