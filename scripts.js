let tl = gsap.timeline();

tl.from('.line h1', {
    y: 200,
    stagger: 0.25,
    opacity: 0,
})

let growingCounter = document.querySelector('#growingCounter');
let loadingLine = document.querySelector('#loading-line');
let grow = 0;

setInterval(()=> {
    if (grow < 100) {
        growingCounter.innerHTML = grow++;
        loadingLine.style.width = `${grow++ + 1}%`
    }
    else {
        growingCounter.innerHTML = grow;
        loadingLine.style.display = 'none';
    }
}, 30)

tl.to('.loader', {
    y:-1600,
    opacity: 0,
    delay: 1,
})

tl.to('main', {
    y:-1600,
})