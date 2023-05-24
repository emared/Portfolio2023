// ********************************
// Barba.js 
// ********************************
// tell Barba to use the css plugin
//barba.use(barbaCss);
// init Barba
//barba.init({
//    transitions: [
//        {
//            name: 'fade',
//            leave() {},
//            enter() {},
//        }
//    ]
//});


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
		lerp: 0.08,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smoothWheel: true
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
// Check browser
// ********************************
function fnBrowserDetect(){
                 
    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
      }else if(userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
      }  else if(userAgent.match(/safari/i)){
        browserName = "safari";
      }else if(userAgent.match(/opr\//i)){
        browserName = "opera";
      } else if(userAgent.match(/edg/i)){
        browserName = "edge";
      }else{
        browserName="No browser detection";
      }
    
    document.querySelector("html").classList.add(browserName);         
}


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
// Mobile menu toggle
// ********************************
$('.hamburger_btn').click(function() {
	$('body').toggleClass('nav-active');
  // lenis.stop()
	$(this).toggleClass('open');
});


// ********************************
// Close mobile menu after click
// ********************************
jQuery(document).ready(function($) {
    $('body .mobile_menu a').on('click', function() {
        $('body').removeClass('nav-active');
        $('.hamburger_btn').removeClass('open');
    })
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
      left: posX - 2,
      top: posY - 2
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
jQuery(document).ready(function(){
    jQuery( ".grid_playground > .single" ).hover(function() {
        jQuery(".cursor").toggleClass( "active_playground" );
    });
});
jQuery(document).ready(function(){
    jQuery( ".grid_playground > .single" ).hover(function() {
        jQuery(".cursor__pointer").toggleClass( "active_playground" );
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
let containerLogo = document.getElementById('logo_lottie');
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
});


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
// Video safari support
// ********************************
function supportsHEVCAlpha() {
    const navigator = window.navigator;
    const ua = navigator.userAgent.toLowerCase()
    const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)
    const isSafari = ((ua.indexOf('safari') != -1) && (!(ua.indexOf('chrome')!= -1) && (ua.indexOf('version/')!= -1)))
    return isSafari && hasMediaCapabilities
}
const player = document.getElementById('cta_video');
if($(player).length >0 ){
    player.src = supportsHEVCAlpha() ? '/assets/videos/maneki_neko.mov' : '/assets/videos/maneki_neko.webm';
}
const player2 = document.getElementById('gyro');
if($(player2).length >0 ){
    player2.src = supportsHEVCAlpha() ? '/assets/videos/gyro.mov' : '/assets/videos/gyro.webm';
}
const player3 = document.getElementById('abstract_hands');
if($(player3).length >0 ){
    player3.src = supportsHEVCAlpha() ? '/assets/videos/abstract_hands.mov' : '/assets/videos/abstract_hands.webm';
}


// ********************************
// Scroll trigger - Global Animations
// ********************************

jQuery(document).ready(function(){

	// Fade
	const fade = gsap.utils.toArray("[data-animation='fade']");
	fade.forEach((element) => {
		gsap.to(element, {
		opacity: 1,
		ease:Power1.ease,
		delay: element.dataset.delay,
		scrollTrigger: {
			trigger: element,
			start: "top 80%",
			toggleActions: "play none none none",
			//markers: true,
			id: "fade"
		}
		});
	});

	// Fade up
	const fadeUp = gsap.utils.toArray("[data-animation='fade-up']");
	fadeUp.forEach((element) => {
		gsap.to(element, {
		opacity: 1,
		y:0,
		ease:Power1.ease,
		delay: element.dataset.delay,
		scrollTrigger: {
			trigger: element,
			start: "top 80%",
			toggleActions: "play none none none",
			//markers: true,
			id: "fade up"
		}
		});
	});

	// Fade down
	const fadeDown = gsap.utils.toArray("[data-animation='fade-down']");
	fadeDown.forEach((element) => {
		gsap.to(element, {
		opacity: 1,
		y:0,
		ease:Power1.ease,
		delay: element.dataset.delay,
		scrollTrigger: {
			trigger: element,
			start: "top 80%",
			toggleActions: "play none none none",
			//markers: true,
			id: "fade up"
		}
		});
	});

    // List child stagger reveal
    const animatedList = gsap.utils.toArray("[data-animation='animated-list']");
    animatedList.forEach((element) => {
        gsap.to(element.querySelectorAll('li'), {
        opacity: 1,
        x:0,
        ease:Power1.ease,
        stagger: element.dataset.stagger,
        delay: element.dataset.delay,
        scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
        //markers: true,
        id: "animated list"
        }
        });
    });

        // Characters reveal
    jQuery(document).ready(function(){
        const mySplitText = new SplitText("[data-animation='chars']", {type:"words,chars", wordsClass:"word"})
        const chars = mySplitText.chars;

        const splitTextElements = gsap.utils.toArray("[data-animation='chars']");
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

        // Words reveal
    jQuery(document).ready(function(){
        const mySplitText2 = new SplitText("[data-animation='words']", {type:"words,lines", linesClass:"line"})
        const chars2 = mySplitText2.words;

        const splitTextElements2 = gsap.utils.toArray("[data-animation='words']");
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

});


// ********************************
// Scroll triggers - CTA Reveal
// ********************************
jQuery(document).ready(function(){
    let ctaContainer = document.querySelector(".cta_footer--container");;
    let ctaTimeline = gsap.timeline({

    scrollTrigger: {
        trigger: ctaContainer,
        start: "top 80%",
        //end: "+=100%",
        end: "bottom bottom",
        scrub: true,
        //markers: true,
        id: "cta reveal"
        }
    });
    ctaTimeline.fromTo(
        ctaContainer,
        {
        y: -250,
        opacity: 1
        },
        {
            y: 0,
        opacity: 1
        })
});
