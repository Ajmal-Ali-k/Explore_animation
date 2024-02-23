gsap.to("#page2 h1",{
    transform:"translateX(-135%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        scrub:5,
        start:"top 0",
        end:"top -100%",
        pin:true
    }
 
})