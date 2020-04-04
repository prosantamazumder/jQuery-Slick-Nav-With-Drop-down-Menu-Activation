(function ($) {
    "use strict";
	
    /**!-------------------------------------------
    01. PRELOADER
    --------------------------------------------**/
    var $mainwindow = $(window);
    $mainwindow.on('load', function() {

        $("#loader").fadeOut(1000);
    });

	$('#nav').slicknav();

})(jQuery);
