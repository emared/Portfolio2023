/**
 * Open/Close hamburger menu
 */
(function () {
	jQuery('.hamburger-menu').on('click', function() {
		jQuery('#header').toggleClass('open-menu');
		jQuery('body').toggleClass('noscroll');
	})
})();

/**
 * Active menu item - About
 */
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
	triggerElement: "#about",
	triggerHook: 0.8,
	duration: $("#about").height(),
})
.setClassToggle("nav .about", "active")
.addTo(controller);

/**
 * Active menu item - Portfolio
 */
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
	triggerElement: "#portfolio",
	triggerHook: 0.8,
	duration: $("#portfolio").height(),
})
.setClassToggle("nav .portfolio", "active")
.addTo(controller);

/**
 * Home hero scroll animation
 */
var controller = new ScrollMagic.Controller();
var tween = TweenMax.to(".hero_landing--video-container video", 0.5, {scale: 2, opacity:0,  ease: Linear.easeNone});
var scene = new ScrollMagic.Scene({
	triggerElement: ".hero_landing--row",
	offset: 50,
	duration: "90%",
	triggerHook: 0,
})
.setTween(tween)
.addTo(controller);

/**
 * Portfolio bg
 */
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
	triggerElement: ".portfolio--row",
	triggerHook: 0.8,
	offset: 0,
})
.setClassToggle("body", "portfolio")
.addIndicators({name: "Portfolio row"}) // add indicators (requires plugin)
.addTo(controller);

/**
 * Personal bg
 */
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
	triggerElement: ".personal--row",
	triggerHook: 0.8,
	offset: 0,
})
.setClassToggle("body", "personal")
.addIndicators({name: "Personal row"}) // add indicators (requires plugin)
.addTo(controller);

/**
 * CTA bg
 */
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
	triggerElement: ".cta--row",
	triggerHook: 0.8,
	offset: 0,
})
.setClassToggle("body", "cta")
.addIndicators({name: "CTA row"}) // add indicators (requires plugin)
.addTo(controller);

/**
 * Side text - Portfolio
 */
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
	triggerElement: ".portfolio--row",
	duration: "90%",
})
.setPin(".portfolio--row .side_text--container", {pushFollowers: false})
.setClassToggle(".portfolio--row .side_text--container", "visible")
.addTo(controller);

/**
 * Side text - Personal
 */
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
	triggerElement: ".personal--row",
	duration: "100%",
})
.setPin(".personal--row .side_text--container", {pushFollowers: false})
.setClassToggle(".personal--row .side_text--container", "visible")
.addTo(controller);

/**
 * Define Rellax
 */
var rellax = new Rellax('.smooth');

/**
 * Portfolio Single Item - Title Hover
 */
const letterWrapClass = 'letter-wrap';
const letterWrapElements = document.getElementsByClassName(letterWrapClass);
[...letterWrapElements].forEach(el => {
  letterWrap(el, letterWrapClass);
  letterAnimation(el, letterWrapClass);
});
function letterWrap(el, cls) {
  const words = el.textContent.split(' ');
  const letters = [];
  cls = cls || 'letter-wrap'
  words.forEach(word => {
    let html = '';
    for (var letter in word) {
      html += `
        <span class="${cls}__char">
          <span class="${cls}__char-inner" data-letter="${word[letter]}">
            ${word[letter]}
          </span>
        </span>
      `;
    };
    let wrappedWords = `<span class="${cls}__word">${html}</span>`;
    letters.push(wrappedWords);
  });
  return el.innerHTML = letters.join(' ');
}
function letterAnimation(el, cls) {
  const tl = new TimelineMax({ paused: true });
  const characters = el.querySelectorAll(`.${cls}__char-inner`);
  const duration = el.hasAttribute('data-duration') ? el.dataset.duration : 0.3;
  const stagger = el.hasAttribute('data-stagger') ? el.dataset.stagger : 0.02;
  el.animation = tl.staggerTo(characters, duration, {
    y: '-100%',
    delay: 0.1,
    ease: Power2.easeOut
  }, stagger);
  el.addEventListener('mouseenter', (event) => event.currentTarget.animation.play());
  el.addEventListener('mouseout', (event) => el.animation.reverse());
}
