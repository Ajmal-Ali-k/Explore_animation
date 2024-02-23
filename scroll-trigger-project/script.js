gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2", // when we use pin the trigger is the parentof the elemnt
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})