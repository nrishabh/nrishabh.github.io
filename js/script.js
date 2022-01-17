$(document).ready(function() {
    var description = new Typed('#description', {
        strings: ['Software Developer^2500', 'ML Enthusiast^2500', 'Computer Engineer^2500', 'Entrepreneur^2500', 'Aviation Geek^2500', 'Minimalism Fanatic^2500', 'Sci-fi Nerd^2500', 'Book Lover^2500'],
        shuffle: true,
        loop: true,
        typeSpeed: 100,
        backSpeed: 100,
        cursorChar: '_',
    })
})

function collapse(el){
    el.classList.toggle("active");
    var content = ((el.parentElement).parentElement);;
    content = content.querySelector('.collapsible');
    if (content.style.maxHeight){
        el.animate([{transform: "rotate(180deg)"}, {transform: "rotate(0deg)"}], {duration: 200});
        content.style.maxHeight = null;
    } else {
        el.animate([{transform: "rotate(0deg)"}, {transform: "rotate(180deg)"}], {duration: 200});
        content.style.maxHeight = content.scrollHeight + "px";
    } 
}