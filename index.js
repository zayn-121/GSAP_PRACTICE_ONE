var tl = gsap.timeline();

tl.to(".nav", {
    right: 0,
    duration: 0.4
})

tl.from(".nav span", {
    opacity: 0,
    x: 50,
    stagger: 0.2,
    duration: 0.4
})
tl.pause();

var menu = document.querySelector(".menu")
menu.addEventListener("click", ()=>{
    tl.play();
})
var close = document.querySelector(".close")
close.addEventListener("click", ()=>{
    tl.reverse();
})