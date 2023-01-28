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




// ********************************
// Scrollable content portfolio
// ********************************
jQuery(document).ready(function(){
  let scrollableContainer = document.querySelector(".portfolio_scrollable--container");
  let scrollableTrigger = document.querySelector(".portfolio_trigger");
  let scrollableBar = document.querySelector(".progress.bar");
  let scrollableTimeline = gsap.timeline({

  scrollTrigger: {
      trigger: scrollableTrigger,
      start: "top center",
      end: "bottom center",
      scrub: true,
      pin: true,
      // markers: true,
      id: "scrollable"
    }
  });
  scrollableTimeline.fromTo(
    scrollableBar,
    {
      scaleX:0,
    },
    {
     	scaleX:1,
    })

});
