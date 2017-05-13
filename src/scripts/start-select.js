/**
 *
 *
 * Created by lishuai on 2017/5/13.
 */
var $start_page = $('.start');
var $start_select = $('.start-select');
var $start_word = $start_page.find('.word');
var $start_book1 = $start_page.find('.book1');
var $start_book2 = $start_page.find('.book2');
var $start_book3 = $start_page.find('.book3');
var $start_person = $start_page.find('.person');

$(function() {
    setTimeout(function() {
        $start_word.removeClass('animation-elastic').addClass('elastic-out-down');
        setTimeout(function() {
            $start_word.css('display', 'none');
        }, 400)
    }, 1300);

    setTimeout(function() {
        $start_book2.addClass('animation-rotate-out');
        setTimeout(function() {
            $start_book3.addClass('animation-rotate-out-reverse');
            setTimeout(function() {
                $start_book1.css('display', 'none');
                $start_person.addClass('animation-rotate-out-person');
                setTimeout(function() {
                    $start_book2.css('display', 'none');
                    setTimeout(function() {
                        $start_book3.css('display', 'none');
                        $start_person.css('display', 'none');
                        $start_page.addClass('animation-rotate-out-person');
                        $start_select.css('display', 'block');
                        setTimeout(function() {
                            $start_page.css('display', 'none');
                            $start_select.css('display', 'block');
                        }, 1000)
                    }, 300)
                }, 300)
            }, 300)
        }, 300);
    }, 600);
});
