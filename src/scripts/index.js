/*[export]*/

require('libs/zepto.min.js');
var FastClick = require('libs/fastclick');
var exam = require('./exam');
var result = require('./result');
require('./start');
require('./start-select');
require('./load');

var screenWidth = document.body.clientWidth,
    screenHeight = document.body.clientHeight,
    originWidth = 375,
    originHeight = 604;

FastClick(document.body);

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