gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

//smooth scrolling logic
const lenis = new Lenis()

lenis.on("scroll", ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
//

const tl = gsap.timeline()

tl.to(".wave", {
  y: 20,
  stagger: {
    each: 0.2,
    repeat: -1,
    yoyo: true,
    ease: "back.iut",
  },
  repeat: -1,
  repeatDelay: 0.2,
  duration: 3,
  yoyo: true,
  ease: "back.inOut",
})

//scroll to hero2
gsap.to(window, { duration: 2, scrollTo: "#hero2", delay: 4 })
