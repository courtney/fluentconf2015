var time, startTime;		
var duration = 1000;	
var startX = 0; endX = 825;

function basicOne() {
	var basic = document.getElementById('basic-one');
	var currentPos = 0;
	var startBasic = function (e) {		
		currentPos += 12;	      
		basic.style.left = currentPos + "px";
		// basic.innerHTML = currentPos;		    
		if (Math.abs(currentPos) <= 820) { requestAnimationFrame(startBasic); }				    
	}			
	requestAnimationFrame(startBasic);				
}

function basicTwo() {
	var basic2 = document.getElementById('basic-two');					
	var startBasic2 = function () {
		startTime = new Date().getTime();
		runBasic2();
	}
	var runBasic2 = function (e) {	
		time = new Date().getTime() - startTime;
		value = time / 1000;
		basic2.style.left = 820 * value + "px";
	    
		if(value < 1) requestAnimationFrame(runBasic2);

	}
	requestAnimationFrame(startBasic2);					
}

function basicThree() {
	var basic3 = document.getElementById('basic-three');						
	var startBasic3 = function () {
		startTime = new Date().getTime();
		runBasic3();
	}	
	var runBasic3 = function (e) {							
		time = new Date().getTime() - startTime;
		value = time / 1000;
		basic3.style.left = 820 * value + "px";	    
		if(value < 1) requestAnimationFrame(runBasic3);
	}
	requestAnimationFrame(startBasic3);						
}

function easeAnim() {
	var ease = document.getElementById('ease-anim');					
	var startEase = function () {
		startTime = new Date().getTime();
		runEase();
	}
	var runEase = function (e) {							
		time = new Date().getTime() - startTime;
		value = time / 1000;
		ease.style.left = startX + (endX - startX) * Math.pow(value, 5) + "px";	
		if(value < 1) requestAnimationFrame(runEase);
	}
	requestAnimationFrame(startEase);						
}

function easeOutAnim() {	
	var startEaseOut = function () {		
		startTime = new Date().getTime();
		runEaseOut();
	}
	var easeOut = document.getElementById('ease-out-anim');					
	var runEaseOut = function (e) {							
		time = new Date().getTime() - startTime;
		value = time / duration;
		easeOut.style.left = startX + (endX - startX) * (1 - Math.pow(1 - value, 3)) + "px";	    
		if(value < 1) requestAnimationFrame(runEaseOut);
	}
	requestAnimationFrame(startEaseOut);						
}

function easeInAnim() {	
	var startEaseInSine = function () {
		startTime = new Date().getTime();
		runEaseInSine();
	}
	var easeInSine = document.getElementById('ease-in-anim');					
	var runEaseInSine = function (e) {							
		time = new Date().getTime() - startTime;
		value = time / duration;
		easeInSine.style.left = startX + (endX - startX) * Math.sin( value * Math.PI / 2 ) + "px";	    
		if(value < 1) requestAnimationFrame(runEaseInSine);
	}
	requestAnimationFrame(startEaseInSine);
}

function elasticAnim() {	
	var s, a = 0.1, p = 0.4;			
	var startElastic = function () {
		startTime = new Date().getTime();
		runElastic();
	}
	var elastic = document.getElementById('elastic-anim');					
	var runElastic = function (e) {		
		time = new Date().getTime() - startTime;
		k = time / duration;		
		var s = 1.70158;			    
	    elastic.style.left = startX + (endX - startX) * (--k * k * ( ( s + 1 ) * k + s ) + 1) + "px";			    
		if(k < 0) requestAnimationFrame(runElastic);
	}
	requestAnimationFrame(startElastic);							
}

function bounceAnim() {	
	var startBounce = function () {
		startTime = new Date().getTime();
		runBounce();
	}
	var bounce = document.getElementById('bounce-anim');					

	var easeFunc = function(k) {
		if ( k < ( 1 / 2.75 ) ) {
		return 7.5625 * k * k;
		} else if ( k < ( 2 / 2.75 ) ) {
			return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
		} else if ( k < ( 2.5 / 2.75 ) ) {
			return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
		} else {
			return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
		}
	}
	var runBounce = function (e) {			
		time = new Date().getTime() - startTime;
		k = time / duration;								
		bounce.style.left = startX + (endX - startX) * easeFunc(k) + "px";			    
		if(k < 1) requestAnimationFrame(runBounce);
	}
	requestAnimationFrame(startBounce);
}							

function checkForSpace(e) {			
	switch( Reveal.getCurrentSlide().dataset.state ) {				
		case 'summary': summary(); break;		
		case 'basic-one': basicOne(); break;		
		case 'basic-two': basicTwo(); break;		
		case 'basic-three': basicThree(); break;		
		case 'ease-anim': easeAnim(); break;
		case 'ease-out-anim': easeOutAnim(); break;				
		case 'ease-in-anim': easeInAnim(); break;				
		case 'elastic-anim': elasticAnim(); break;		
		case 'bounce-anim': bounceAnim(); break;		
		default: return false;
	}
}

function designDev(e) {
	document.getElementById('d-v-d-container').style.display = 'block';
}
var i = 1;
function summary(e) {	
	document.getElementById('d-v-d-container').style.display = 'none';
	var circle = document.getElementById('bullet-'+i);
	circle.style.display = 'block';
	circle.className = 'circle large bullet-'+i;
	if (i > 1) { 
		last = document.getElementById('bullet-'+(i-1)); 		
  	setTimeout(function(){ last.childNodes[0].className = 'fadeOut'; }, 20);
  }
	i++;
}

function gertie(e) {
	document.getElementById('d-v-d-container').style.display = 'none';
}


Reveal.addEventListener( 'slidechanged', function( event ) {
	console.log(event.currentSlide.dataset.state)
	if( event.currentSlide.dataset.state !== false ) {
		switch( event.currentSlide.dataset.state ) {				
			// case 'logoSlide': document.getElementById('logoAnimate').className = 'fjs logoAnimation'; break;
			case 'summary': summary(event); break;
			case 'design-dev': designDev(event); break;
			case 'gertie': gertie(event); break;
			default: return false;			
		}				
	}
});


