function flip() {
    $('.card').toggleClass('flipped');
    setTimeout(() => {
        $('.front').toggleClass('front-disp');
        $('.back').toggleClass('back-disp');    
    }, 100);

/*
    $('.front').toggleClass('front-disp');
    $('.back').toggleClass('back-disp');
*/    
}