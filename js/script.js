$(document).ready(function() {
    var description = new Typed('#description', {
        strings: ['Software Developer^2500','ML Engineer^2500','Aviation Geek^2500','Minimalism Fanatic^2500'],
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