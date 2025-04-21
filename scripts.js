function loaderAnimation() {
  let tl = gsap.timeline();

  tl.from(".line h1, .line .counter h5", {
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
    delay: 1.5,
  });
}

function heroPageAnimation() {
  
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

}

function cursorAnimation() {
  
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
}

function SheryiAnimation () {
  Shery.imageEffect('.image-div', {
    style: 2,

    config: {"resolutionXY":{"value":100},"distortion":{"value":false},"mode":{"value":-10},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8333333333333334},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.00},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.46,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

    gooey: true,
  })
}


function VideoContainerAnimation () {
  
let video_Container = document.querySelector('#video-container');

video_Container.addEventListener('mouseenter', () => {
  video_Container.addEventListener('mousemove', (dets) => {

    gsap.to('#video-cursor', {
      left: dets.x - 550,
      y: dets.y - 400,
    })
  })

  video_Container.addEventListener('mouseleave', () => {
    gsap.to('#video-cursor', {
      left: '70%',
      top: '-10%'
    })
  })

  let flag = 0;

  document.querySelector('#video-container').addEventListener('click', ()=> {

    if (flag === 0) {
          document.querySelector('img').style.opacity = 0
      
          document.querySelector('video').play()
          flag = 1;
    }
    else {
      document.querySelector('img').style.opacity = 1;
      document.querySelector('video').pause()
      flag = 0;
    }
  })

  console.log(flag)
})

}



loaderAnimation()
// cursorAnimation()
heroPageAnimation()
SheryiAnimation()
VideoContainerAnimation();