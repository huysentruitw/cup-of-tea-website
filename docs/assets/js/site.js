function useNavbarCollapsePixelObserver() {
  var navbarCollapsePixel = document.getElementById('navbar-pixel');
  var observer = new IntersectionObserver(function(entries) {
    var shouldCollapse = !entries[0].isIntersecting;
    document.querySelector('.navbar.fixed-top').classList.toggle('solid', shouldCollapse);
    document.getElementById('home-button').classList.toggle('show', shouldCollapse);
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
