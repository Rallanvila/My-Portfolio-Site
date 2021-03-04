gsap.to(".headline", {
    duration: 3, 
    x: 400,
    ease: "back",
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

gsap.from(".what-i-do", {
    scrollTrigger: {
        trigger: ".what-i-do",
        start: "top center",
        marker: true,
    },
    duration: 1,
    opacity: 0,
    stagger: .2,
    x: -15,
})

gsap.from(".competencies", {
    scrollTrigger: {
        trigger: ".competencies",
        start: "top center"
    },
    duration: 2,
    opacity: 0,
    stagger: .2,
    x: -15,
})

gsap.from(".experience", {
    scrollTrigger: {
        trigger: ".experience",
        start: "top center"
    },
    duration: 2,
    opacity: 0,
    stagger: .5,
})

gsap.from(".fab", {
    scrollTrigger: {
        trigger: ".fab",
        start: "top center"
    },
    duration: 1,
    opacity: 0,
    stagger: .4,
    y: -150,
    ease: "back"
})