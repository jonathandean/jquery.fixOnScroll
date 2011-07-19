/**
 * fixOnScroll jQuery plugin by Jonathan Dean (http://jonathandean.com)
 *
 * Takes a normal (statically positioned element) and fixes it to the top of the window after scrolling past it
 *
 * Options:
 *    offset: amount to adjust the point when fixed positioning happens (positive or negative integer)
 *    positioning: either 'fixed' or 'absolute'. Fixed has better performance but doesn't work in all browsers (such as Mobile Safari)
 *
 * Copyright (c) 2011 Jonathan Dean (http://jonathandean.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 */
(function($, window){
	$.fn.fixOnScroll = function(options){
		var defaults = {
			offset: 0,
      positioning: 'fixed',
      zIndex: 'auto'
		},
    opts = $.extend(defaults, options),
    fixed = false,
    top = 0,
    left = 0,
    self = this,
    prevFloat = 'none',
    prevZIndex = 'auto';

    function fix(elem){
      if(!fixed || opts.positioning == 'absolute'){
        var t = 0;
        if(opts.positioning == 'absolute'){
          t = $(window).scrollTop();
        }
        $(elem).css({
          'position':opts.positioning,
          'top':t,
          'left':left,
          'float':'none',
          'z-index': opts.zIndex
        });
        fixed = true;
      }
    }
    function reset(elem){
      if(fixed){
        $(elem).css({
          'position':'static',
          'float': prevFloat,
          'z-index': prevZIndex
        });
        fixed = false;
      }
    }

		return this.each(function() {
      var elem = this;
      var pos = $(elem).offset();
      top = pos && pos.top ? pos.top : 0;
      left = pos && pos.left ? pos.left : 0;
      prevFloat = $(elem).css('float');
      prevZIndex = $(elem).css('z-index');
      $(window).scroll(function() {
        if($(window).scrollTop() > (top + opts.offset)){
          fix(elem);
        }else{
          reset(elem);
        }
      });
		});
	};
})(jQuery, window);