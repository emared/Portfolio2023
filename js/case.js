// ********************************
// Images reveal effect
// ********************************
jQuery(document).ready(function(){
    const playgroundItem = gsap.utils.toArray(".reveal_effect");
    playgroundItem.forEach((element) => {
        gsap.to(element.querySelectorAll('.mask'), {
            y: "-100%",
            duration: 0.8,
            ease:Power4.easeOut,
            delay: element.dataset.delay,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none",
                //markers: true,
                //id: "reveal item"
            }
        });
    });
});

// ********************************
// Images parallax effect
// ********************************
//jQuery(document).ready(function(){
//    const playgroundItem = gsap.utils.toArray(".parallax");
//    playgroundItem.forEach((element) => {
//        gsap.to(element.querySelectorAll('img'), {
//            y: "-5%",
//            duration: 0.8,
//            ease:Power4.easeOut,
//            delay: element.dataset.delay,
//            scrollTrigger: {
//                trigger: element,
//                start: "top 80%",
//                scrub: true,
//                toggleActions: "play none none none",
//                //markers: true,
//                //id: "parallax"
//            }
//        });
//    });
//});