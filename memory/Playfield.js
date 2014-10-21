Playfield = function (options) {

    this.cards = [];
    options = options || {};

    var self = this,
        __defaultOptions = {
            cards: 2
        };

    var playfieldOptions = _.extend({}, __defaultOptions, options);

    var init = function () {

        var cards = _.range(playfieldOptions.cards);
        _.each(cards, function() {

            self.cards.push(new Card());
        });
    };

    this.build = function () {

    };

    init();
    return this;
};
