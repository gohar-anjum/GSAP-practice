gsap.from(".page1 .container",{
    opacity:0,
    delay:1,
    scale:1.5,
    duration:2
})
gsap.from(".page2 .container",{
    opacity:0,
    delay:1,
    rotate:750,
    scale:1.5,
    duration:2,
    scrollTrigger:{
        trigger:".page2 .container",
        scroller:"body",
        marker:true,
        start:"top 60%",
        scrub:2
    }
})