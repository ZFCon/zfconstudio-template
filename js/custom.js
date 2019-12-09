$('html').niceScroll();

$('.header').height($(window).height());

$('.header .arrow i').click(() => {
    console.log('hi')
    $('html, body').animate({
        scrollTop: $('.features').offset().top
    }, 1000);
});

$('.our-work .show-more').click(() => {
    $('.our-work .none').fadeToggle(() => {
        $('.our-work .show-more').text() === 'Show more' ? $('.our-work .show-more').text('Show less') : $('.our-work .show-more').text('Show more');
    });
});

/* Start Testim */
var rightArrow = $('.testim .fa-chevron-right'), leftArrow = $('.testim .fa-chevron-left');


function checkNarrows() {

    /* hide left arrow */
    $('.clint:first').hasClass('active') ? leftArrow.hide() : leftArrow.show();

    /* hide right arrow */
    $('.clint:last').hasClass('active') ? rightArrow.hide() : rightArrow.show();
};
checkNarrows();
/* Switch client */
$('.testim i').click(function() {
    if ($(this).hasClass('fa-chevron-right')) {
        $('.testim .active').fadeOut(300,function() {
            $(this).removeClass('active').next('.clint').addClass('active').fadeIn();
            $(this).addClass('none').next('.clint').removeClass('none');
            checkNarrows();
        })
    }
    else {
        $('.testim .active').fadeOut(300,function() {
            $(this).removeClass('active').prev('.clint').addClass('active').fadeIn();
            $(this).addClass('none').prev('.clint').removeClass('none');
            checkNarrows();
        })
    }
});


function followMan(){
    Array.from($('.y3zKF')).forEach((element) => {
        element.click().delay(1000);
        console.log('done')
    });
    $(".i0EQd div").scroll();
    $(".i0EQd div").animate({scrollTop: $('.y3zKF').last().offset().top + 100}, 2000);
    followMan();
    console.log('again');
}