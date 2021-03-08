gsap.to(".headline", {
    duration: 3, 
    ease: "back",
})

gsap.from(".headline", {
    opacity: 0, 
    duration: 5,
    y: -200,
    ease: 'back',
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
    stagger: .2,
    y: -150,
    ease: "back"
})

gsap.from(".what-ive-done", {
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".what-ive-done",
        start: "top 70%",
    }
})

// ----------popup-----------

const openPopupButtons = document.querySelectorAll(`[data-popup-target]`);

const closePopupButtons = document.querySelectorAll(`[data-close-button]`);

const overlay= document.getElementById(`overlay`);

openPopupButtons.forEach(button=> {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.popupTarget)
        openPopup(popup)
    })
})

closePopupButtons.forEach(button=> {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopup(popup)
    })
})

function openPopup(popup) {
    if (modall == null) return
    popup.classList.add('active')
    popup-overlay.classList.add('active')
}

function closePopup(popup) {
    if (modall == null) return
    popup.classList.remove('active')
    popup-overlay.classList.remove('active')
}