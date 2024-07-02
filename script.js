import textSplitter from "./utils"

//image links
const foodImages = [
  "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ad1d6f5b-c9ab-405c-b8fa-b747617db8f7.__CR0,0,970,600_PT0_SX970_V1___.jpg",
  "https://m.media-amazon.com/images/I/7199nVD7I5L._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg",
  "https://i.postimg.cc/V6P71LTQ/sweet-bites-1.jpg",
  "https://i.postimg.cc/bJPRWVDq/dairy-1.jpg",
]

const bevImages = [
  "https://i.postimg.cc/PrbKzjP2/swing-juices-cropped.jpg",
  "https://i.postimg.cc/GmCtSRNf/hero2-img.png",
  "https://i.postimg.cc/dQBCttXR/zero-sugar-drinks-1.jpg",
  "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b7b1665d-f116-478b-9bb6-ef7f7ab7e8eb.__CR0,0,970,600_PT0_SX970_V1___.png",
]

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

//wave animation (independent of timeline)
gsap.to(".wave", {
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
function scrollToHero() {
  tl.to(window, { duration: 2, scrollTo: "#hero2", delay: 4 })
}
scrollToHero()

tl.from(".hero-text", {
  opacity: 0,
  y: -50,
  stagger: 0.2,
  duration: 0.4,
})

tl.from("#hero2-img", {
  y: 500,
  opacity: 0,
  duration: 0.5,
})

textSplitter(document.getElementById("cta-btn"), "split-text")

tl.from(".split-text", {
  x: -100,
  opacity: 0,
  stagger: {
    amount: 0.5,
  },
  scale: 1.2,
})

gsap.to("#last-split-text", {
  rotationX: 540,
  repeat: -1,
  yoyo: true,
  duration: 1,
  repeatDelay: 3,
})

//navbar hover animation
const bev = document.getElementById("beverages")
const bevNav = document.getElementById("bev-nav")
const food = document.getElementById("foods")
const foodNav = document.getElementById("food-nav")
const home = document.getElementById("home")
bev.addEventListener("click", () => {
  foodNav.style.display = "none"
  bevNav.style.display = "flex"
})
food.addEventListener("click", () => {
  console.log("clicked")
  bevNav.style.display = "none"
  foodNav.style.display = "flex"
})
home.addEventListener("click", () => {
  bevNav.style.display = "none"
  foodNav.style.display = "none"
})

const bevImg = document.getElementById("bev-nav-img")
const bevNavOptions = document.querySelectorAll(".expanded-bev-nav-option")
bevNavOptions.forEach((item, idx) => {
  item.addEventListener("mouseenter", () => {
    bevImg.src = bevImages[idx]
  })
})
const foodImg = document.getElementById("food-nav-img")
const foodNavOptions = document.querySelectorAll(".food-nav-option")
foodNavOptions.forEach((item, idx) => {
  item.addEventListener("mouseenter", () => {
    foodImg.src = foodImages[idx]
  })
})

//product showcase animation

gsap.from("#swing",{
  rotation: -25,
  duration: 2,
  repeat: -1,
  yoyo:true,
  ease: "sine.inOut"
})

function wiggle(component){
  gsap.to(component, {
  rotation: "random(-30,30)",
  x: "random(-20,20)",
  y: "random(-20,20)",
  repeat: -1,
  yoyo: true,
  ease: "steps(3)",
  duration: 1,
  stagger: {
    each: 0.5,
    repeat:-1,
    yoyo:true
  },
})
}
wiggle(".swing-juices-showcase-decor")
wiggle(".chikki-showcase-decor")
wiggle(".zero-showcase-decor")
wiggle(".product-showcase-decor")
wiggle(".coco-water-decor")

const productShowcase = document.querySelector("#product-showcase > div")

ScrollTrigger.create({
  trigger: "#product-showcase",
  start: "top top",
  end: "+=400%",
  pin: true,
  anticipatePin: 1,
  scrub: 1,
  onUpdate: (self) => {
    gsap.to(productShowcase, {
      x: -self.progress * (productShowcase.offsetWidth - window.innerWidth),
      ease: "none",
    })
  },
})
function initProductShowcase() {
  const mediaQuery = window.matchMedia("(min-width: 768px)")

  if (!mediaQuery.matches) {
    // Mobile layout
    // Remove any existing GSAP animations
    ScrollTrigger.getAll().forEach((st) => st.kill())
    gsap.set(".showcase-item", { clearProps: "all" })
  }
}

// Run on load
initProductShowcase()

// Run on window resize
window.addEventListener("resize", initProductShowcase)

//testimonials
const testimonials = [
  {
    message: "Paper Boat takes me back to my childhood summers!",
    name: "Aarav Patel",
    background:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.K7KLmaMMuw6CR7TgAyz6iwHaEz%26pid%3DApi&f=1&ipt=ebd8d3d1dadfe77f5c29e108230d1700f703d49a3e4744af2c5dd71a0678c80b&ipo=images",
    img: "https://i.pravatar.cc/150?img=68",
  },
  {
    message: "The flavors are so authentic, it's like tasting nostalgia.",
    name: "Priya Singh",
    background:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.K7KLmaMMuw6CR7TgAyz6iwHaEz%26pid%3DApi&f=1&ipt=ebd8d3d1dadfe77f5c29e108230d1700f703d49a3e4744af2c5dd71a0678c80b&ipo=images",
    img: "https://i.pravatar.cc/150?img=42",
  },
  {
    message: "I love how Paper Boat combines tradition with modern packaging.",
    name: "Rahul Sharma",
    background:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ru38bZAygOKfxv1nPNcfFQHaFe%26pid%3DApi&f=1&ipt=46781a5385895eb88ba41acff66a9449f24be9797a210e0de9b1c13ae5bb5a79&ipo=images",
    img: "https://i.pravatar.cc/150?img=56",
  },
  {
    message: "These drinks remind me of my grandmother's recipes.",
    name: "Ananya Gupta",
    background:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.r0Lfhw7nBAth4uf1-KSQ1QHaFy%26pid%3DApi&f=1&ipt=59b59f5cc170e48858d556f3518ff580c1e0a98df04e664cdf027d3af8a68710&ipo=images",
    img: "https://i.pravatar.cc/150?img=16",
  },
  {
    message: "Paper Boat is my go-to drink for a refreshing taste of India.",
    name: "Vikram Malhotra",
    background:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uHN24cSx8u0LR-hAlLhVOwHaFe%26pid%3DApi&f=1&ipt=aa04bb3bdcf84abfe6d6eb8d7b59681fa20da9bbcdcde0b00083387af07901f2&ipo=images",
    img: "https://i.pravatar.cc/150?img=54",
  },
]

const bottlesContainer = document.querySelector('.bottles-container');
const modal = document.getElementById('testimonial-modal');
const modalContent = document.getElementById('modal-content');
const modalName = document.getElementById('modal-name');
const modalContainer = document.getElementById("modal-container")
const modalImage = document.getElementById("modal-image")

function createBottle(testimonial, index) {
  const bottle = document.createElement('div');
  bottle.classList.add('testimonial-bottle');
  bottle.innerHTML = `<img src="https://i.postimg.cc/zf7gF6Ph/bottle.png" alt="Testimonial bottle" class="w-24 h-auto">`;

  bottle.style.left = `${5 + (index * 18) % 90}%`;
  bottle.style.bottom = `${30 + Math.random() * 60}%`;
  
  gsap.set(bottle, { rotation: Math.random() * 30 - 15 });

  gsap.to(bottle, {
    y: "random(-30, 30)",
    rotation: "random(-45, 45)",
    duration: 2 + Math.random() * 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  bottle.addEventListener('click', () => {
    modalContent.textContent = `"${testimonial.message}"`
    modalImage.src = testimonial.img
    modalName.textContent = testimonial.name;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modalContainer.style.backgroundImage = `url("${testimonial.background}")`
    gsap.from(modal.children[0], {scale: 0, duration: 0.5, ease: "back.out(1.7)"});
  });

  bottlesContainer.appendChild(bottle);
}

function initTestimonials() {
  bottlesContainer.innerHTML = '';
  testimonials.forEach(createBottle);
}
initTestimonials();
window.addEventListener('resize', initTestimonials);

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});

const responsiveAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: "#testimonials",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }
});

responsiveAnimation.to(".testimonial-bottle", {
  y: (i) => -50 - i * 20,
  stagger: 0.1,
  ease: "none"
});

//paper-boat-process

const processTexts = [
  "Fresh fruits picked at peak ripeness",
  "Gently extracted to preserve natural flavors",
  "Bottled with love, ready to refresh!"
];

const textElement = document.getElementById("process-text");
let currentTextIndex = -1;

function updateText(index) {
  if (index === currentTextIndex) return;
  
  currentTextIndex = index;
  
  gsap.to(textElement, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      textElement.innerHTML = processTexts[index];
      gsap.to(textElement, { opacity: 1, duration: 0.5 });
    }
  });
}

// Create the timeline
const juiceTl = gsap.timeline();

juiceTl.to("#fruit", {
  y: "25vh",
  scale: 1.5,
  duration: 20
})
.to("#orchard", { opacity: 0, duration: 10 }, "+=10")
.to("#factory", { opacity: 1, duration: 10 }, "-=10")
.to("#fruit", {
  y: "35vh",
  scale: 1,
  duration: 20
})
.to("#fruit", { opacity: 0, duration: 5 }, "+=10")
.to("#juice-drop", { 
  opacity: 1,
  y: "40vh",
  scale: 3,
  duration: 20
})
.to("#juice-drop", { opacity: 0, duration: 5 })
.to("#paper-boat-bottle", { 
  y: "-=200",
  opacity:1,
  duration: 20
});

// Set up ScrollTrigger
ScrollTrigger.create({
  animation: juiceTl,
  trigger: "#paper-boat-process",
  start: "top top",
  end: "+=300%",
  scrub: 1,
  pin: true,
  anticipatePin: 1,
  onUpdate: (self) => {
    if (self.progress < 0.33) {
      updateText(0);
    } else if (self.progress < 0.66) {
      updateText(1);
    } else {
      updateText(2);
    }
  }
});

// Optionally, adjust section height based on screen size
function adjustSectionHeight() {
  const processSection = document.getElementById('paper-boat-process');
  processSection.style.height = `${window.innerHeight * 4}px`;
}

adjustSectionHeight();
window.addEventListener('resize', adjustSectionHeight);

//follow
gsap.to("#instagram-follow .grid > div", {
  y: 0,
  opacity: 1,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#instagram-follow",
    start: "top 50%",
    end: "bottom top"
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const closeMobileMenuButton = document.getElementById("close-mobile-menu")
  const mobileMenu = document.getElementById("mobile-menu")

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden")
  })

  closeMobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.add("hidden")
  })
})


// hrushikesh's js
const slider = document.querySelector("#newPinch");
const footerele = document.querySelectorAll("#pgfooter");

// Timeline for slider
let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: slider,
    pin: true,
    scrub: 1,
    end: () => "+=" + slider.offsetWidth,
  }
});

tl1.to(slider, {
  xPercent: -66,
  ease: "none"
});

// Individual ScrollTriggers for nostalgia sections
gsap.utils.toArray(["#nostalgia1", "#nostalgia2", "#nostalgia3"]).forEach((section, index) => {
  let elements = section.querySelectorAll('img, p');
  gsap.from(elements, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    x: (i) => i % 2 === 0 ? -50 : 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
  });
});

// Footer animation
gsap.from("#c1, #c2, #c3", {
  scrollTrigger: {
    trigger: footerele,
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2
});