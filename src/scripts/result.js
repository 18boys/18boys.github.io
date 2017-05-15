var Result = function(score) {
    this.score = score;
    this.$container = $('.result');
    this.$score = this.$container.find('.score');
    this.$img = this.$container.find('.img');
    this.$jump = this.$container.find('.jump');
    this.$show = this.$container.find('.show');
    this.$share = $('.share');
    this.$share_word = this.$share.find('.share-word');
    this.$princess = $('.princess');
    this.init(score);
};
Result.prototype = {
    init: function() {

        var _rlog = _rlog || [];
        _rlog.push(["_trackEvent" ,  "resultsuccessful"]);
        this.$container.removeClass('hide');
        this._bindEvent();
        this.render(this.score);
    },
    _initDialog: function() {
        $(document).on('click', '.result .js-dialog', function() {
            $(this).addClass('hide');
        });
    },
    render: function() {
        var score = this.score,
            src;

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
            score = this.score = 710;
            this.$show.addClass('on');
            src = '../img/result-710.jpg';
        }

        this.$score.html(score);
        this.$img.attr('src', src);
    },
    _bindEvent: function() {

        var _this = this;
        $(document).on('click', '.result .jump', function() {
            location.href="https://ke.youdao.com/course/detail/2879?vendor=h5_cof_cet";
        }).on('click', '.result .show', function() {
            var src = _this.score >= 696 ? '/img/share-word-1.png' : '/img/share-word-2.png';
            _this.$share_word.attr('src', src);
            _this.$share.removeClass('hide').attr('display', 'block');
        });

    }
};

module.exports = Result;