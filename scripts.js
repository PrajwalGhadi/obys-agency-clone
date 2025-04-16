function loaderAnimation() {
  let tl = gsap.timeline();

  tl.from(".line h1", {
    y: 200,
    stagger: 0.25,
    opacity: 0,
  });

  let growingCounter = document.querySelector("#growingCounter");
  let loadingLine = document.querySelector("#loading-line");
  let grow = 0;

  setInterval(() => {
    if (grow < 100) {
      growingCounter.innerHTML = grow++;
      loadingLine.style.width = `${grow++ + 1}%`;
    } else {
      growingCounter.innerHTML = grow;
      loadingLine.style.display = "none";
    }
  }, 30);

  tl.to(".loader", {
    y: -1600,
    display: "none",
    delay: 1,
  });
}
loaderAnimation()

let tl = gsap.timeline();
tl.from('.centerText h1', {
    y: 250,
    stagger: 0.2,
    delay: 2.5,
})

tl.from('#hero-section-video', {
  y:800,
  delay: 1
}) 

document.addEventListener('mousemove', (dets) => {

    gsap.from('#cursor', {
        left: dets.x,
        top: dets.y,
        duration: 4,
        ease: "power4.out",
    })

    Shery.makeMagnet("a" /* Element to target.*/, {
      //Parameters are optional.
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
})