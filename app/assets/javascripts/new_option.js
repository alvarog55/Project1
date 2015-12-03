$(document).ready(function(){
    
	$(".glyphicon").click(function () {
	    $panel = $(".panel-heading");
	    $content = $panel.next();
	    $content.slideToggle(450);
        $(this).hide();
	});

	$(".cancel-option").click(function () {
	    $panel = $(".panel-heading");
	    $content = $panel.next();
	    $content.slideToggle(450);
	    $(".glyphicon").show();
	});

});

