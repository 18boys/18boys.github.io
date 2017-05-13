/**
 *
 * Created by lishuai on 2017/5/13.
 */
var $start_select = $('.start-select');
var $start_select_word=$start_select.find('.word');
var $start_button_4_bg=$start_select.find('.button-4-bg');
var $start_button_6_bg=$start_select.find('.button-6-bg');


$(function(){
    setTimeout(function(){
        $start_select_word.css('display', 'block').addClass('animation-word-in');
        setTimeout(function(){
            $start_button_4_bg.css('display', 'block').addClass('animation-button-in');
            $start_button_6_bg.css('display', 'block').addClass('animation-button-in');
        },4000);
    },4000);
});