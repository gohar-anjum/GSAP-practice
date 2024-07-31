gsap.fromTo ("#container", {
    x : 100,
    duration : 2,
    ease: Expo.easeInOut
},{
    y : 500,
    duration : 2,
    backgroundColor: "black"
})