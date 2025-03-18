

//GSAP
gsap.registerPlugin(ScrollTrigger);

let t1 = gsap.timeline({ default: { duration: 1 } })
t1
  .from('.background-img', { y: -30, opacity: 0, duration: 1.5})
  .from('.navbar', {y: '-135%', ease: 'bounce', delay:0.2, stagger: 0.1})
  .from('.logo', { x: -20, opacity: 0, stager: 0.1 })
  .from(['.link1', '.link2', '.link3', '.link4', '.link5'],{opacity: 0, stagger: 0.3 })
  .from(['.word1','.word2', '.word3'],{opacity: 0, duration: 1.2, stagger: 0.8})
  .from('.herotxt', {y:'20vh', opacity:0, ease: "power2.inOut", duration: 0.5})
  .from('.herobtn', { y: 20, ease: 'bounce', opacity: 0, duration: 1.5 })

let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro',
    start: 'top 80%',
    markers: false,
  }
});

t2
  .from('.intro', { y: -30, opacity: 0, duration: 1.5 })
  .from('.intro-para', { y: -20, opacity: 0, scale: 1.1, duration: 0.8, ease: 'slow'})
  .from('.introimg1', { x: '-20vw', y: '-5vh',  rotate: 270, opacity: 0, duration: 0.8, ease: 'slow'})
  .from('.introimg2', { x: '-50vw', y: '-10vh', rotate: 360, opacity: 0, duration: 0.6, ease: 'slow'})
  .from('.introimg3', { x: '-20vw', y: '-10vh', rotate: 270, opacity: 0, duration: 0.6, ease: 'slow'})
  .from('.introimg4', { x: '-30vw', y: '-20vh', rotate: 360, opacity: 0, duration: 0.6, ease: 'slow'})
  .from('.introimg5', { x: '130vw', y: '120vh', rotate: 360, opacity: 0, duration: 0.6, ease: 'slow'})
  .from('.introimg6', { x: '130vw', y: '120vh', rotate: 360, opacity: 0, duration: 0.6, ease: 'slow'})
  .from('.introimg7', { x: '130vw', y: '120vh', rotate: 360, opacity: 0, duration: 0.6, ease: 'slow'})
  .from('.introimg8', { x: '130vw', y: '120vh', rotate: 360, opacity: 0, duration: 0.6, ease: 'slow' })
  .from('.introbtn', { y: 20, ease: 'bounce', opacity: 0, duration: 1.5 })
  .from('.intro-f1', {y: -20, opacity: 0, scale:0, rotate:240, duration: 0.6})
  .from('.intro-f2', {y: 20, opacity: 0, scale:0, rotate:270, duration: 0.6})
  .from('.intro-f3', {y: -20, opacity: 0, scale:0, rotate:300, duration: 0.6})

  
let t3 = gsap.timeline({
  scrollTrigger: {
      trigger: '.flavors',
      start: 'top 80%',
      markers: false,
  }
});

t3 
  .from('.background-img-flav', { y: -30, opacity: 0, duration: 1.5 })
  .from('.flavors h2', {y:'10vh', opacity:0, ease: "power3.inOut", duration: 1})
  .from('.carousel-container', { y: 50, opacity: 0, duration: 0.9, ease: 'slow' })
  

let t4 = gsap.timeline({
  scrollTrigger: {
      trigger: '.features',
      start: 'top 80%',
      markers: false,
  }
});

t4 
  .from('.features', { y: -30, opacity: 0, duration: 1.5 })
  .from('.features-content h2', { y: 50, opacity: 0, duration: 0.8, ease:'slow' })
  .from('.features-content .sec1', { x: -50, opacity: 0, duration: 0.7, ease:'slow' })
  .from('.features-content .sec3', { x: 150, opacity: 0, duration: 0.6, ease: 'slow' })
  .from('.features-content .sec2', { y: 50, opacity: 0, duration: 0.7, ease:'slow' })


 let t5 = gsap.timeline({
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 80%',
            markers: false,
        }
    });

    t5.from('.testimonial-card', {opacity: 0, scale: 0.8, duration: 0.8, stagger: 0.2});