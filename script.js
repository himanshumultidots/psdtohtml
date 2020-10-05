$(document).ready(function () {
    $('.mini-header-minus').click(function () {
        $('.top-inner-header').slideUp("slow");
        $('.top-header-area').height(0);
        $('.mini-header-minus').hide();
        $('.mini-header-plus').show();
    });

    $('.mini-header-plus').click(function () {
        $('.top-inner-header').slideDown("slow");
        $('.top-header-area').height(50);
        $('.mini-header-minus').show();
        $('.mini-header-plus').hide();
    });
})

$(document).ready(function () {
    $('.menu-toggler').click(function () {
        $('.menu-bar').slideToggle('slow');
    })
});