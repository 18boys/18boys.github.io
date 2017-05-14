var $start_select = $('.start-select');
var $start_select_word = $start_select.find('.word');
var $start_button_4 = $start_select.find('.button-4-bg');
var $start_button_6 = $start_select.find('.button-6-bg');

function init(cb) {
    $start_select.css('display', 'block');
    $start_select_word.css('display', 'block').addClass('animation-word-in');
    setTimeout(function() {
        $start_button_4.css('display', 'block').addClass('animation-button-in');
        $start_button_6.css('display', 'block').addClass('animation-button-in');
        _initEvent(cb);
    }, 4000);
}

function _initEvent(cb) {
    $(document).on('click', '.start-select .js-button', function() {
        cb && cb();
    })
}

module.exports = init;