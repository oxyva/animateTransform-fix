/******************************************************************************
 *
 * Created:		20-10-2012
 * Version:     v0.1.0
 * Author:		Bas van Dijk <info@oxyva.nl>
 * Description:	Currently IE9 does support SVG but does not parse the 
 *              animateTransform tag. Keith Wood has created a jQuery plugin
 *              called jQuery SVG which allows you to apply the jQuery animate 
 *              function on SVG elements: (http://keith-wood.name/svg.html). 
 * 
 *              jQuery SVG combined with this IEfix plugin allows IE9 to 
 *              animate the elements with animateTransform of an inline SVG 
 *              image.
 *
 *****************************************************************************/

(function($) {

	function runSVGAnimateTransform() {
	
		function timeStringToTime(s) {
			return parseInt(s.substring(0, s.length -1));
		}
	
		function animate(animateTransformElementObj, origin, repeatCount) {
				
			var root = $(animateTransformElementObj);
		
			var id = "#" + root.parent().attr("id");
			
			var type = root.attr("type");
			var from = root.attr("from");
			var to = root.attr("to");
		
			var repeat = root.get(0).getAttribute("repeatCount");
				
			var dur = root.attr("dur");
			
			var freeze = root.attr("freeze"); // freeze | remove
				
			var duration = timeStringToTime(dur) * 1000;		
			var animString = type + "(" + to + ")";
		
			var _origin;

			if (repeat == "indefinite") {
			
				if (typeof(origin) === "undefined") {
					_origin = $(id).attr("transform");
				} else {
					_origin = origin;
					$(id).attr("transform", _origin);
				}
						
				$(id).animate({ svgTransform: animString }, duration, function() { animate(root, _origin); });
			
			} else if (repeat == null) {

				$(id).animate({ svgTransform: animString }, duration);

			} else {
				
				var _repeatCount;
				
				if (typeof(repeatCount) === "undefined") {
					_repeatCount = parseInt(repeat);	
				} else {
					_repeatCount = repeatCount - 1;
				}

				if (_repeatCount > 0) {
				
					if (typeof(origin) === "undefined") {
						_origin = $(id).attr("transform");
					} else {
						_origin = origin;
						$(id).attr("transform", _origin);
					}
				
					$(id).animate({ svgTransform: animString }, duration, function() { animate(root, _origin, _repeatCount); });				
				
				}
				
			}
		
		}
	
		$.each($("animateTransform"), function(index, obj) {

			var begin = $(obj).attr("begin");

			if (begin == "1s") {
				animate(obj);
			} else {
				setTimeout(function() { animate(obj); }, timeStringToTime(begin) * 1000);
			
			}

		});
	
	};

	$(document).ready(function() {
		
		if ( $.browser.msie ) {
		
			runSVGAnimateTransform();
		
		}
	});

})(jQuery);