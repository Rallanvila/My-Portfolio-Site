gsap.to(".headline-animation", {
    duration: 3, 
    ease: "back",
})

gsap.from(".headline-animation", {
    opacity: 0, 
    duration: 2,
    y: -300,
    ease: 'back',
})

gsap.from(".webdev", {
    opacity: 0, 
    delay: 2.5,
    duration: 2.,
    ease: 'back',
})

gsap.from(".contact-button", {
    opacity: 0, 
    delay: 3,
    duration: 2,
    ease: 'back',
})

gsap.from(".nav", {
    duration: 6, 
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

let modalBtn = document.getElementById("kim-btn");
let modal = document.querySelector(".kim-modal");
let closeBtn = document.querySelector(".close-btn");
modalBtn.onclick = function(){
  modal.style.display = "block"
  overlay.classList.add('active')
};
closeBtn.onclick = function(){
    modal.style.display = "none"
    overlay.classList.remove('active')
};
window.onclick = function(e){
  if(event.target == modal){
    modal.style.display = "none"
  }
};

let modalBtn2 = document.getElementById("sushi-btn");
let modal2 = document.querySelector(".sushi-modal");
let closeBtn2 = document.querySelector(".sushi-close-btn");
modalBtn2.onclick = function(){
  modal2.style.display = "block";
  overlay.classList.add('active')
};
closeBtn2.onclick = function(){
  modal2.style.display = "none"
  overlay.classList.remove('active')
};
window.onclick = function(e){
  if(event.target == modal){
    modal2.style.display = "none"
  }
};

let modalBtn3 = document.getElementById("medical-btn");
let modal3 = document.querySelector(".medical-modal");
let closeBtn3 = document.querySelector(".medical-close-btn");
modalBtn3.onclick = function(){
  modal3.style.display = "block"
  overlay.classList.add('active')
};
closeBtn3.onclick = function(){
  modal3.style.display = "none"
  overlay.classList.remove('active')
};
window.onclick = function(e){
  if(event.target == modal){
    modal3.style.display = "none"
  }
};