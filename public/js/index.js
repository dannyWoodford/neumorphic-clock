$( "#top-dot-1" ).click(function() {
    $("#top-dot-1").toggleClass("active");
    $(this).children().toggleClass("app-active");
});

$( "#top-dot-2" ).click(function() {
    $("#top-dot-2").toggleClass("active");
    $(this).children().toggleClass("app-active");
});

$( ".app-inner" ).click(function() {
    $(this).toggleClass("active");
    $(this).children().toggleClass("app-active");
    
});

document.querySelector('.menu').addEventListener('click', function() {
    this.classList.toggle('activated');
});






