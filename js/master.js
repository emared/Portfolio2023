//
// Lenis smooth scrolling
//
const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false
});

//get scroll value
/* lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress });
}); */

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


//
// Initialize scroll trigger
//
gsap.registerPlugin(ScrollTrigger);


//
// Custom cursor
//
var cursor = jQuery(".cursor__pointer");
var posX = 0,
    posY = 0;
var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(cursor, {
        css: {
        left: posX - 12,
        top: posY - 12
        }
    });
  }
});

jQuery(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

// Add classes to cursor
jQuery(document).ready(function(){
  jQuery( ".link" ).hover(function() {
    jQuery(".cursor__pointer").toggleClass( "active" );
  });
});
jQuery(document).ready(function(){
  jQuery( ".apg-grid-item" ).hover(function() {
    jQuery(".cursor__pointer").toggleClass( "active_projects" );
  });
});


//
// Magnetic menu items
//
jQuery(".menu-item").addClass("magnetic");
jQuery(".menu-item a").addClass("link");

var magnets = document.querySelectorAll('.magnetic')
var strength = 25

magnets.forEach( (magnet) => {
  magnet.addEventListener('mousemove', moveMagnet );
  magnet.addEventListener('mouseout', function(event) {
    TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
  } );
});

function moveMagnet(event) {
  var magnetButton = event.currentTarget
  var bounding = magnetButton.getBoundingClientRect()

  //console.log(magnetButton, bounding)

  TweenMax.to( magnetButton, 1, {
    x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
    y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
    ease: Power4.easeOut
  })
}


//
// Lottie logo
//
/* let containerLogo = document.getElementById('logo_lottie');
let logoAnimation;
let animationCompleted = true;

logoAnimation = bodymovin.loadAnimation({
  container: containerLogo,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  // animationData: logoSvgData
  path: 'json/logo_animation.json'
});

logoAnimation.addEventListener("complete", () => {
  animationCompleted = true;
});

containerLogo.addEventListener("mouseover", () => {
  if (animationCompleted) {
    logoAnimation.goToAndPlay(0, true);
    animationCompleted = false;
  }
});*/


//
// Sticky header
//
(function($) {
  var prev = 0;
  var $window = $(window);
  var nav = $('#header');

  $window.on('scroll', function(){
	var scrollTop = $window.scrollTop();
	nav.toggleClass('hide-navbar', scrollTop > prev);
	prev = scrollTop;
  });

  $(window).scroll(function() {
	  if ($(this).scrollTop() <= 300) {
		  $('#header').removeClass('hide-navbar');
	  }
  });

})(jQuery);
