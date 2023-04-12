// ********************************
// Fancybox settings
// ********************************
Fancybox.bind('[data-fancybox]', {
    contentClick: "close",
    wheel: false,
    Images: {
        initialSize: "fit",
    },
    Html: {
        videoRatio: false,
        videoTpl: '<video class="fancybox__html5video" playsinline loop controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" /></video>',
    },
    Toolbar: {
        display: {
        left: [],
        middle: [],
        right: ["close"],
        },
    },
    Thumbs: false
});


// ********************************
// Images reveal effect
// ********************************
jQuery(document).ready(function(){
    const playgroundItem = gsap.utils.toArray(".grid_playground > .single");
    playgroundItem.forEach((element) => {
        gsap.to(element.querySelectorAll('.mask'), {
            y: "-100%",
            duration: 0.8,
            ease:Power4.easeOut,
            delay: element.dataset.delay,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                //toggleClass: {targets: element, className: "active"},
                toggleActions: "play none none none",
                //markers: true,
                //id: "playground item"
            }
        });
    });
});