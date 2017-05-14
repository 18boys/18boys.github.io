/*[export]*/
require('libs/zepto.min.js');
var FastClick = require('libs/fastclick');
var loadPage = require('./load');
var initSelectPage = require('./start-select');
var initStart = require('./start');
require('./exam');

FastClick(document.body);

var screenWidth = document.body.clientWidth,
    screenHeight = document.body.clientHeight,
    originWidth = 375,
    originHeight = 604;

var Page = function() {
    this.$body = $('.pageWrapper');
    this.init();
};
Page.prototype = {
    init: function() {
        this._reset();
    },
    _reset: function() {
        this.$body.css({
            '-webkit-transform': 'scaleX(' + screenWidth / originWidth + ') scaleY(' + screenHeight / originHeight + ')',
            transform: 'scaleX(' + screenWidth / originWidth + ') scaleY(' + screenHeight / originHeight + ')'
        });
    }
};

new Page();

//loadPage.init(
//    function() {
//        initStart(function() {
//            initSelectPage(function() {
//                    gotoExamPage();
//                }
//            )
//        })
//    }
//);

function gotoExamPage() {
    alert("ds")
}
