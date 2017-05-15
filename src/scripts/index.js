/*[export]*/
require('libs/zepto.min.js');
var FastClick = require('libs/fastclick');
var loadPage = require('./load');
var initSelectPage = require('./start-select');
var initStart = require('./start');
var exam = require('./exam');
var Result = require('./result');

FastClick(document.body);
initAudio();

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

loadPage.init(
    function() {
        initStart(function() {
            initSelectPage(function() {
                    var examer = new exam.Exam({
                        finishHandler: function() {
                            new Result(examer.score);
                        }
                    });
                }
            );
        });
    }
);


function initAudio(){
    var audio = document.getElementById('bg-music');
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.play();
    }, false);
}

