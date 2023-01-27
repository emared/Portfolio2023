var singleProject = gsap.utils.toArray('.single_project');
singleProject.forEach((element) => {
  gsap.to(element, {
    // duration: 0.8,
    // y:0,
    ease:Power4.easeOut,
    scrollTrigger: {
      trigger: element,
      pin: true,
      pinSpacing: false,
      start: "center center",
      // end: "+=300",
      // toggleActions: "play none none none"
      markers: true,
      id: "project",
    }
  });
});

$(".single_project").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this).prev();
  let projectCards = gsap.timeline({

  scrollTrigger: {
      trigger: triggerElement,
      start: "center center",
      pin: true,
      pinSpacing: false,
      // end: "top top",
      scrub: 1
    }
  });
  projectCards.fromTo(
    targetElement,
    {
      scale: "1",
      duration: 1
    },
    {
     	scale: "0.8",
      duration: 1
    })
  projectCards.fromTo(
    triggerElement,
    {
      duration: 1
    },
    {
      duration: 1
    })
});




const singleProjectConceal = gsap.utils.toArray('.single_project');
singleProjectConceal.forEach((element) => {
  gsap.to(element, {
    scale: 0.8,
    y:-20,
    opacity: 0,
    ease:Power4.easeOut,
    scrollTrigger: {
      trigger: element,
      start: "bottom center",
      scrub: true,
      toggleActions: "play none none none",
      markers: true,
      id: "conceal"
    }
  });
});


jQuery(document).ready(function(){
  gsap.to(".portfolio_scrollable--container", {
    scrollTrigger: {
      trigger: ".portfolio_trigger",
      start: "top center",
      end: "bottom center",
      scrub: true,
      pin: true,
      // markers: true,
      id: "scrollable"
    }
  });
});

gsap.from(".cta_footer--container", {
  y: -150,
  scrollTrigger: {
    trigger: ".cta_footer--container",
    start: "top top",
    end: 100,
    scrub: true,
    markers: true,
    id: "cta reveal"
  }
});
