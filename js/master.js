// ********************************
// Barba.js basic transiion
// ********************************
// barba.init({
//   transitions: [{
//     name: 'opacity-transition',
//     leave(data) {
//       return gsap.to(data.current.container, {
//         opacity: 0
//       });
//     },
//     enter(data) {
//       return gsap.from(data.next.container, {
//         opacity: 0
//       });
//     }
//   }]
// });


// ********************************
// Initialize scroll trigger
// ********************************
gsap.registerPlugin(ScrollTrigger);


// ********************************
// Lenis smooth scrolling
// ********************************
let lenis;
// Initialize Lenis smooth scrolling
const initSmoothScrolling = () => {
    lenis = new Lenis({
		lerp: 0.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smooth: true
	});
    lenis.on('scroll', () => ScrollTrigger.update());
	const scrollFn = (time) => {
		lenis.raf(time);
		requestAnimationFrame(scrollFn);
	};
    requestAnimationFrame(scrollFn);
};
initSmoothScrolling();


// ********************************
// Mobile screen 100vh fix
// ********************************
$(document).ready(function(){
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  //$('.btn-hamburger').click(function(){
  //  let vh = window.innerHeight * 0.01;
  //  document.documentElement.style.setProperty('--vh', `${vh}px`);
  //});
});


// ********************************
// Mobile check
// ********************************
function isTouchScreendevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
};
if(isTouchScreendevice()){
  $('#wrapper').addClass('touch');
  $('#wrapper').removeClass('no-touch');
} else {
  $('#wrapper').removeClass('touch');
  $('#wrapper').addClass('no-touch');
}
$(window).resize(function() {
  if(isTouchScreendevice()){
     $('#wrapper').addClass('touch');
     $('#wrapper').removeClass('no-touch');
  } else {
     $('#wrapper').removeClass('touch');
     $('#wrapper').addClass('no-touch');
  }
});


// ********************************
// Custom cursor
// ********************************
var cursor = $(".cursor"),
    follower = $(".cursor__pointer");
var posX = 0,
    posY = 0;
var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    TweenMax.set(follower, {
        css: {
        left: posX - 12,
        top: posY - 12
        }
    });
    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});
$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
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
  jQuery( ".single_project" ).hover(function() {
    jQuery(".cursor").toggleClass( "active_projects" );
  });
});
jQuery(document).ready(function(){
  jQuery( ".single_project" ).hover(function() {
    jQuery(".cursor__pointer").toggleClass( "active_projects" );
  });
});


// ********************************
// Magnetic menu items
// ********************************
jQuery(".menu-item").addClass("magnetic");
jQuery(".menu-item a").addClass("link");

var magnets = document.querySelectorAll('.magnetic')
var strength = 25

if(window.innerWidth > 540){
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
}


// ********************************
// Lottie logo
// ********************************
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


// ********************************
// Sticky header
// ********************************
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


// ********************************
// Scroll triggers
// ********************************

// Reveal text when in viewport - Characters
jQuery(document).ready(function(){
  const mySplitText = new SplitText(".custom-split-text__reveal", {type:"words,chars", wordsClass:"word"})
  const chars = mySplitText.chars;

  const splitTextElements = gsap.utils.toArray('.custom-split-text__reveal');
  splitTextElements.forEach((element) => {
    gsap.to(element.querySelectorAll('.word div'), {
      duration: 0.8,
      y:0,
      ease:Power4.easeOut,
      stagger: element.dataset.stagger,
      delay: element.dataset.delay,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
        //markers: true,
        //id: "reveal",
      }
    });
  });
});

// Reveal text when in viewport - Words
jQuery(document).ready(function(){
  const mySplitText2 = new SplitText(".custom-split-text__reveal2", {type:"words,lines", linesClass:"line"})
  const chars2 = mySplitText2.words;

  const splitTextElements2 = gsap.utils.toArray('.custom-split-text__reveal2');
  splitTextElements2.forEach((element) => {
    gsap.to(element.querySelectorAll('.line div'), {
      duration: 0.8,
      y:0,
      ease:Power4.easeOut,
      stagger: element.dataset.stagger,
      delay: element.dataset.delay,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
        //markers: true,
        //id: "reveal"
      }
    });
  });
});
