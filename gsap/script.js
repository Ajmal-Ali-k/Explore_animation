
{/* in gsap there are 2 types of animation  */ }
/**
 * intial to final
 * final to initial
 * 
 */

//this is the example of initial to final
// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"yellow"
// })



//  this the example for final to initial
// gsap.from("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"yellow"
// })

{/* another feature of gsap is "timeline" for chaining all the animation */}

// var time = gsap.timeline()

// time.to("#box1", {
//     x: 1200,
//     duration: 3,
//     rotate: 360,
//     delay: 1,
//     scale: 0.5
// })


// time.to("#box2", {
//     x: 1200,
//     duration: 3,
//     rotate: 360,
//     delay: 1,
//     scale: 0.5
// })
// time.to("#box3", {
//     x: 1200,
//     duration: 1,
//     rotate: 360,
//     delay: 1,
//     scale: 0.5
// })

{/* another  property is "stagger it is like one come after that another will come" */}

gsap.from("#nav h3",{
    y:-50,
  delay:0.4,
    opacity:0,
    stagger:0.3
})