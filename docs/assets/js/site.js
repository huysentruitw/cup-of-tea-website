function useNavbarCollapsePixelObserver() {
  var navbarCollapsePixel = document.getElementById('navbar-pixel');
  var observer = new IntersectionObserver(function(entries) {
    var atTopOfPage = entries[0].isIntersecting;
    document.querySelector('.navbar.fixed-top').classList.toggle('solid', !atTopOfPage);
    document.getElementById('home-button').classList.toggle('show', !atTopOfPage);
  });
  observer.observe(navbarCollapsePixel);
}

function useScrollToBehavior() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 48)
    }, 750);
    event.preventDefault();
  });
}

function useScrollSpy() {
  $('body').scrollspy({
    target: '.navbar.fixed-top',
    offset: 49
  });
}

window.addEventListener('load', function() {
  useNavbarCollapsePixelObserver();
  useScrollToBehavior();
  useScrollSpy();
});
