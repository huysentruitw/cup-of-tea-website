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

function useFaceFader() {
  const $faceFader = $('.face-fader');
  const $faceWithBeard = $('.face-with-beard');
  let previousOpacity = undefined;

  window.onscroll = function() {
    const scrollPosition = window.scrollY;
    const startOffset = $faceFader.offset().top + $faceFader.height() - window.innerHeight;
    const range = window.innerHeight - $faceFader.height();
    const opacity = Math.min(1.0, Math.max(0.0, Math.round((scrollPosition - startOffset) / range * 10) / 10));
    if (opacity !== previousOpacity) {
      $faceWithBeard.css('opacity', previousOpacity = opacity);
    }
  }
}

window.addEventListener('load', function() {
  useNavbarCollapsePixelObserver();
  useScrollToBehavior();
  useScrollSpy();
  useFaceFader();
});
