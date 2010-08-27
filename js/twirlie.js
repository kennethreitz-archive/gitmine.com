/* 

Twirlie - jQuery animation made simple
Debashis Chakraborty and Qiming Weng
http://www.designerinfusion.com/

Twirlie is licensed under MIT and GPL licenses.

Created: November 13, 2009
Last updated: December 14, 2009

Version 1.1

*/

(function($){

	$.fn.twirlie = function(options) {
	
		var defaults = {
			transtime     : 500,
			nextSel       : ".next",
			prevSel       : ".prev"
		};
		
		var options = $.extend(defaults, options);
	
		this.each(function() {
			var obj = $(this);
			var next = options.nextSel;
			var prev = options.prevSel;
			var current = 0;
			var total = $('ul li', obj).size();
			var width = parseInt(($(obj).css("width")).substring(0, ($(obj).css("width")).length-2));
			
			$(obj).data("current", current);
			$(obj).data("width", width);
			$(obj).data("transtime", options.transtime);
		
			$(next).click(function() {
				current = $(obj).data("current");
				current += 1;
				if (current == total) {
					current = 0;
				}
				obj.gotoSlide(current+1);
				return false;
			});
	
			$(prev).click(function() {
				current = $(obj).data("current");
				current -= 1;
				if (current < 0) current = total-1;
				
				obj.gotoSlide(current+1);
				return false;
			});
			
	   });
	   return this;
	}
	
	$.fn.gotoSlide = function(slide) {
		var width = parseInt($(this).data("width"));
		var transtime = $(this).data("transtime");
      	$('ul', this).stop().animate({
   			left: (slide-1)*(0-width) + "px"
      	}, transtime);
      	$(this).data("current", slide-1);
	}
	
})(jQuery); 