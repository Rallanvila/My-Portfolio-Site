gsap.to(".headline", {
    duration: 3, 
    x: 200,
})

gsap.from(".headline", {
    opacity: 0, 
    duration: 4
})

gsap.from(".nav", {
    duration: 8, 
    opacity: 0, 
})

gsap.from(".about", {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".about",
        start: "top center"
    }
})

gsap.from(".do-img", {
    scrollTrigger: {
        trigger: ".do-img",
        start: "top center"
    },
    duration: 2,
    opacity: 0,
    stagger: .5,
})