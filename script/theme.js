
//Loading theme globaly //
$(document).bind('mobileinit', function () {
	$.mobile.defaultPageTransition = 'none';
	$.mobile.page.prototype.options.theme  = "c";
});

// Adjusting popups //	
$( document ).on( "pagecreate", function() {
    $( ".photopopup" ).on({
        popupbeforeposition: function() {
            var maxHeight = $( window ).height() - 60 + "px";
            $( ".photopopup img" ).css( "max-height", maxHeight );
        }
    });
});

