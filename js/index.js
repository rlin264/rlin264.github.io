// const ScrollReveal = window.ScrollReveal;
var slideUp = {
    distance: '80%',
    origin: 'bottom',
    opacity: null
};
window.sr = new ScrollReveal()
console.log("HI");
ScrollReveal().reveal('.intro', slideUp);
sr.reveal('.intro', { delay: 250 });
sr.reveal('.blurb', slideUp);
console.log("HI");