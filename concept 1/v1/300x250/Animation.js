home_animation = (function() {
	
	var boundEvents = {};

	function bind (elem, eventName, callback) {
		if (elem.addEventListener) {
			elem.addEventListener(eventName, callback, false);
		}

		else if (elem.attachEvent) {
			var eID = elem.attachEvent('on'+ eventName, callback);
			boundEvents[eID] = { name: eventName, callback: callback };
		}
	}

	function unbind (elem, eventName, callback) {
		if (elem.removeEventListener) {
			elem.removeEventListener(eventName, callback, false);
		}

		else if (elem.detachEvent) {
			for (var eID in boundEvents) {
				if ((boundEvents[eID].name === eventName) &&
						(boundEvents[eID].callback === callback)) {
					elem.detachEvent(eID);
					delete boundEvents[eID];
				}
			}
		}
	}

		var endFrame = 0;

	function init()
	{
		document.getElementById("container").style.display = "block";
		 TweenLite.to(water, 0, {delay: 0, scaleX:0, scaleY:0}); 
		 TweenLite.to(can, 0, {delay: 0, scaleX:0, scaleY:0}); 



		// CTA BTN CLICKTAG //
			bind(document.getElementById('click_screen'), 'click', function(e) 
			{
				e.preventDefault();
				Enabler.exit("clickTag1");
			});
	

		frame1();

	}
	

		
	function frame1()
	{
		TweenLite.to(green, 0.2, {left:0, delay:0});	
		TweenLite.to(text_one, 0.3, {opacity:1, delay:0.3});
		TweenLite.to(text_two, 0.3, {opacity:1, delay:0.4});

		TweenLite.delayedCall(2.5, frame2);
	}
	
	function frame2()
	{

		TweenLite.to(green, 0.2, {left:0, delay:0});	
		TweenLite.to(text_one, 0.2, {opacity:0, delay:0});
		TweenLite.to(text_two, 0.2, {opacity:0, delay:0});
		TweenLite.to(green, 0.2, {opacity:0, delay:0});
		TweenLite.to(lady, 0.2, {opacity:0, delay:0});	
		TweenLite.to(logo, 0.2, {opacity:0, delay:0});	
	
		TweenLite.delayedCall(0.5, frame3);	

	}
	
	function frame3()
	{	

		TweenLite.to(can, .3, {delay: 0.1, top:0, opacity:1, scaleX:1, scaleY:1, ease: Expo.easeInOut}); 
		TweenLite.to(water, .3, {delay: 0, top:0, opacity:1, scaleX:1, scaleY:1, ease: Expo.easeInOut}); 
		
		TweenLite.delayedCall(2, frame4);	
	}
	
	function frame4()
	{	
		TweenLite.to(can, .2, {delay: 0, opacity:0}); 
		TweenLite.to(water, .2, {delay: 0, opacity:0}); 

		TweenLite.delayedCall(0.6, frame5);	

	}

	function frame5()
	{	

		TweenLite.to(product, 0.5, {opacity:1, delay:0});
		TweenLite.to(all_good, 0.2, {opacity:1, left:0, delay:0.1});		
		TweenLite.to(text_0, 0.5, {opacity:1, left:0, delay:0.2});		
		TweenLite.to(text_1, 0.5, {opacity:1, left:0, delay:0.4});		
		TweenLite.to(text_2, 0.5, {opacity:1, left:0, delay:0.8});		
		TweenLite.to(available, 0.5, {opacity:1, delay:2});	
	}




container.onmouseover = function() {
	if(endFrame == 1)
	{
 		TweenLite.to(buy_now_over, 0.2, {opacity:1});
 		TweenLite.to(buy_now, 0.2, {opacity:0});
	}

}

container.onmouseout = function() {
	if(endFrame == 1)
	{	
 		TweenLite.to(buy_now_over, 0.2, {opacity:0});
  		TweenLite.to(buy_now, 0.2, {opacity:1});
	}
}


	init();
});





// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
      enablerInitHandler();
  } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT,
enablerInitHandler);
  }
}

function enablerInitHandler() {
  home_animation();
}

