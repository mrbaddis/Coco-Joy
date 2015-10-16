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


		// CTA BTN CLICKTAG //
			bind(document.getElementById('click_screen'), 'click', function(e) 
			{
				e.preventDefault();
				Enabler.exit("clickTag1");
			});

			TweenLite.to(endWater, 0, {scaleX:0, scaleY:0,});
			//TweenLite.to(water_out, 0, {scaleX:0, scaleY:0,});

			TweenLite.to(water, 0, {delay: 0, scaleX:0, scaleY:0}); 

		frame1();

	}
	

		
	function frame1()
	{
		TweenLite.to(green, 0.5, {left:-23, delay:0, ease: Expo.easeOut});	


   // == show text ==
   var i;
    for (i = 1; i < 18; i++) {
      var j = i+2

      		TweenLite.to("txt_"+i, .2, {opacity:1, delay: .1*i, ease: Expo.easeOut});

    	}



   var x;
    for (x = 1; x < 17; x++) {
      var j = x+1.5

     		TweenLite.to("txt_"+x, .1, {opacity:0, delay: .1*j, ease: Expo.easeOut});

    	}



		TweenLite.delayedCall(3.6, frame2);
	}
	
	function frame2()
	{
		TweenLite.to(textHolder, 0.2, {opacity: 0, top:0, delay:0});

		TweenLite.to(green, 0.2, {left:0, delay:0});	
		TweenLite.to(green, 0.2, {opacity:0, delay:0});
		TweenLite.to(lady, 0.2, {opacity:0, delay:0});	
		TweenLite.to(logo, 0.2, {opacity:0, delay:0});	
	
		TweenLite.delayedCall(0.2, frame3);	

	}
	
	function frame3()
	{	

		TweenLite.to(can, 0.2, {delay: 0, top:0, ease: Expo.easeOut}); 
		TweenLite.to(water, 0.5, {delay: 0, opacity:1, top:200, left:-163, scaleX:1, scaleY:1, ease: Expo.easeOut}); 

		TweenLite.delayedCall(3, frame4);	
	}
	
	function frame4()
	{	
		TweenLite.to(can, .2, {delay: 0, opacity:0}); 
		TweenLite.to(water, .2, {delay: 0, opacity:0}); 

		TweenLite.delayedCall(0.6, frame5);	

	}

	function frame5()
	{	

		TweenLite.to(endWater, 0.5, {left:0, top:0, scaleX:1, scaleY:1, opacity:1, delay:0.2, ease: Expo.easeOut});
		//TweenLite.to(endWater_two, 0.5, {left:0, top:0, scaleX:2, scaleY:2, opacity:0, delay:0.3, ease: Expo.easeOut});

		TweenLite.to(product, 0.3, {left:0, delay:0, ease: Expo.easeOut});
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

