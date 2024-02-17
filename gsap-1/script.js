var time = gsap.timeline()
time.from("#nav h3", {
    y: -50,
    delay: 0.3,
    opacity: 0,
    duration:1,
    stagger: 0.3
})


time.from("main h1",{
    x:-500,
    delay:0.3,
    opacity:0,
    duration:1,
    stagger:0.5
})



time.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.8,
    scale:1.2
})