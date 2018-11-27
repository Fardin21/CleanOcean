var slideIndex = 0;

showSlides();

function showSlides () {
    
    var slides = document.getElementsByClassName("myimages");
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 4000);
}

$(window).scroll(function() {
  $('.toAnim').each(function() {

    var _win     = $(window),
        _ths     = $(this),
        _pos    = _ths.offset().top,
        _scroll = _win.scrollTop(),
        _height = _win.height();

    (_scroll > _pos - _height * .7) ? _ths.addClass('anim') : _ths.removeClass('anim');

  });
});

