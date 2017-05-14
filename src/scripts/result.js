require('libs/zepto.min.js');

var Result = function(score) {
    this.score = score;
    this.$container = $('.result');
    this.$score = this.$container.find('.score');
    this.$img = this.$container.find('.img');
    this.$jump = this.$container.find('.jump');
    this.$show = this.$container.find('.show');
    this.init(score);
};
Result.prototype = {
    init: function() {
        this.$container.removeClass('hide');
        this._bindEvent();
        this.render(this.score);
    },
    render: function() {
        var score = this.score,
            src,
            className;

        if (score < 250) {
            src = '../img/result-250.jpg';
        } else if (score < 425) {
            src = '../img/result-425.jpg';
        } else if (score < 525) {
            src = '../img/result-525.jpg';
        } else if (score < 600) {
            src = '../img/result-600.jpg';
        } else if (score < 696) {
            src = '../img/result-696.jpg';
        } else {
            this.$show.addClass('on');
            src = '../img/result-710.jpg';
        }

        this.$score.html(score);
        this.$img.addClass(className).attr('src', src);
    },
    _bindEvent: function() {
        // 点击过级按钮
        $(document).on('click', '.result .jump', function() {
            console.log('jump');

        // 点击即见公主按钮
        }).on('click', '.result .show', function() {
            console.log('show');
        });
    }
};

module.exports = Result;