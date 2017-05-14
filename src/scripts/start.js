function init(cb) {

    var $start_page = $('.start');
    var $start_select = $('.start-select');
    var $start_word = $start_page.find('.word');
    var $start_book1 = $start_page.find('.book1');
    var $start_book2 = $start_page.find('.book2');
    var $start_book3 = $start_page.find('.book3');
    var $start_person = $start_page.find('.person');
    $start_page.removeClass('hide');
    $start_word.removeClass('hide').addClass('animation-elastic');
    $start_book1.addClass('animation-rotate-out');

    setTimeout(function() {
        $start_word.removeClass('animation-elastic').addClass('elastic-out-down');
        setTimeout(function() {
            $start_word.addClass('hide');
        }, 400);
    }, 1300);

    setTimeout(function() {
        $start_book2.addClass('animation-rotate-out');
        setTimeout(function() {
            $start_book3.addClass('animation-rotate-out-reverse');
            setTimeout(function() {
                $start_book1.addClass('hide');
                $start_person.addClass('animation-rotate-out-person');
                setTimeout(function() {
                    $start_book2.addClass('hide');
                    setTimeout(function() {
                        $start_book3.addClass('hide');
                        $start_person.addClass('hide');
                        $start_page.addClass('animation-rotate-out-person');
                        $start_select.removeClass('hide');
                        setTimeout(function() {
                            $start_page.addClass('hide');
                            cb && cb();
                        }, 1000);
                    }, 300);
                }, 300);
            }, 300);
        }, 300);
    }, 600);
}

module.exports = init;