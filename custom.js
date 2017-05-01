skrollr.init({
	smoothScrolling: false,
	mobileDeceleration: 0.004
});

$(document).ready(function () {
	//alert('next mouse ove');
});

// $(document).on('mousemove',function (e) {
// 	$('.result').text('x:  ' + e.pageX + 'y:  ' + e.pageY )
// 	$(window).scrollTop(e.pageX);
// });

var drag = {
    elem: null,
    x: 0,
    y: 0,
    scrollPos: 0,
    state: false
};


var delta = {
    x: 0,
    y: 0
};

$(document).ready(function () {
	drag.scrollPos = $(document).scrollTop();
});

$('body').mousedown(function(e) {
	
    if (!drag.state) {
        drag.elem = this;
        drag.x = e.pageX;
        drag.y = e.pageY;
        drag.state = true;
    }
    return false;
});
var a =0;
$(document).mousemove(function(e) {
    if (drag.state) {
        delta.x = e.pageX - drag.x;
        delta.y = e.pageY - drag.y;

        drag.x = e.pageX;
        drag.y = e.pageY;

        var scrolled = $(document).scrollTop();
/*
        $('.result').html(
        	'<table>'
        	+ '<tr><td width="250" >Scrolled: </td><td width="70">' 			+ drag.scrollPos
        	+ '</td></tr><tr><td>X position: </td><td>' 			+ e.pageX 
        	+ '</td></tr><tr><td>Delta X position: </td><td>' 	+ delta.x
        	+ '</td></tr><tr><td>Amount to scroll: </td><td>' 	+ amountToScroll
        	+ '</td></tr><tr><td>A: </td><td>' 					+ a
        	+ '</td></tr><tr><td>Current scrolled: </td><td>' 	+ scrolled
        	+ '</td></tr><tr></tr></table>'
        );
*/
        if(delta.x>0){
        	$(window).scrollTop(scrolled+5);
    	}else{
        	$(window).scrollTop(scrolled-5);    		
    	}
    }
});


$(document).mouseup(function() {
    if (drag.state) {
        drag.state = false;
        drag.scrollPos = drag.x;
    }
});