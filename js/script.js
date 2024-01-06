var burger = document.querySelector(".burger");
var nav = document.querySelectorAll("li");

burger.addEventListener("click", function () {
  for (var i = 0; i < nav.length; i++) {
    nav[i].classList.toggle("slide");
  }
});

var tl = gsap.timeline({
  scrollTrigger: {
    scrub: true,
  },
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    start: "20%",
    end: "100%",
    scrub: true,
  },
});

tl.to(".plate", {
  left: "22%",
  top: "115%",
  width: "40%",
});

// tl.to(".plate", { left: "24.5%", top: "210%", width: "23%" });

tl2.to(
  ".mushroom",
  {
    right: "10%",
    top: "105%",
  },
  "<"
);

tl2.to(
  ".leaf",
  {
    right: "0%",
    top: "165%",
  },
  "<"
);

tl2.to(
  ".tomato",
  {
    right: "40%",
    top: "175%",
  },
  "<"
);

gsap.from("footer", {
  opacity: 0,
  y: 100,
  duration: 1,
  delay: 2.5,
});

gsap.from(".logo", {
  opacity: 0,
  y: -100,
  duration: 1,
  delay: 2,
});

gsap.from(".burger", {
  opacity: 0,
  y: -100,
  duration: 1,
  delay: 2,
});
