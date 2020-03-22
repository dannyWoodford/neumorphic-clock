$( "#top-dot-1" ).click(function() {
    $("#top-dot-1").toggleClass("active");
});

$( "#top-dot-2" ).click(function() {
    $("#top-dot-2").toggleClass("active");
});

$( ".app-inner" ).click(function() {
    $(this).toggleClass("active");
    $(this).children().toggleClass("app-active");
    
});


$( "#top-dot-1-wood" ).click(function() {
    $("#top-dot-1-wood").toggleClass("active-wood");
});

$( "#top-dot-2-wood" ).click(function() {
    $("#top-dot-2-wood").toggleClass("active-wood");
});

$( ".app-inner-wood" ).click(function() {
    $(this).toggleClass("active-wood");
    $(this).children().toggleClass("app-active-wood");
    
});





