const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((e) => {
  e.addEventListener("click", (t) => {
    t.preventDefault();
    let o = e.getAttribute("href"),
      s = document.querySelector(o);
    s.scrollIntoView({ behavior: "smooth" });
  });
});
const typed = new Typed("#element", {
  strings: [
    "Web Developer",
    "Web Designer",
    "Frontend Developer",
    "Graphics Designer",
  ],
  typeSpeed: 75,
  loop: !0,
});
let aboutSectionAnimated = !1,
  skillsSectionAnimated = !1,
  projectsSectionAnimated = !1,
  contactSectionAnimated = !1,
  footerSectionAnimated = !1;
window.addEventListener("scroll", () => {
  let e = window.scrollY + window.innerHeight,
    t = document.getElementById("about"),
    o = document.querySelector(".abt"),
    s = document.querySelector(".exp"),
    l = t.offsetTop + 200;
  e > l &&
    !aboutSectionAnimated &&
    (o.classList.add("animate-from-left"),
    s.classList.add("animate-from-right"),
    (aboutSectionAnimated = !0));
  let i = document.getElementById("skills"),
    a = document.querySelector(".skills-top"),
    r = document.querySelector(".skills-bottom"),
    n = i.offsetTop + 200;
  e > n &&
    !skillsSectionAnimated &&
    (a.classList.add("animate-from-left"),
    r.classList.add("animate-from-right"),
    (skillsSectionAnimated = !0));
  let c = document.getElementById("projects"),
    m = document.querySelector(".Projects-content"),
    d = c.offsetTop + 200;
  e > d &&
    !projectsSectionAnimated &&
    (m.classList.add("animate-from-bottom"), (projectsSectionAnimated = !0));
  let f = document.getElementById("contact"),
    h = document.querySelector(".cont-form"),
    p = document.querySelector(".cont-info"),
    L = f.offsetTop + 200;
  e > L &&
    !contactSectionAnimated &&
    (h.classList.add("animate-from-left"),
    p.classList.add("animate-from-right"),
    (contactSectionAnimated = !0));
  let S = document.getElementById("footer"),
    u = document.querySelector(".ftr-p"),
    v = new IntersectionObserver(
      (e) => {
        e[0].isIntersecting && u.classList.add("animate-from-top");
      },
      { threshold: 0.1 }
    );
  v.observe(S),
    navLinks.forEach((e) => {
      let t = e.getAttribute("href"),
        o = document.querySelector(t),
        s = o.offsetTop,
        l = o.offsetTop + o.offsetHeight,
        i = o.offsetHeight,
        a = window.scrollY,
        r = window.scrollY + window.innerHeight,
        n = Math.min(l, r) - Math.max(s, a);
      n / i > 0.5 &&
        (navLinks.forEach((e) => e.classList.remove("active")),
        e.classList.add("active"));
    });
});
const scrollToTopButton = document.getElementById("scroll-to-top"),
  homeSection = document.getElementById("home"),
  homeHeight = homeSection.offsetHeight,
  homeOffset = homeSection.offsetTop;
window.addEventListener("scroll", () => {
  let e = window.scrollY - homeOffset;
  e < 0.9 * homeHeight
    ? (scrollToTopButton.classList.add("hidden", "animate-fade-out"),
      scrollToTopButton.classList.remove("animate-fade-in"))
    : (scrollToTopButton.classList.remove("hidden", "animate-fade-out"),
      scrollToTopButton.classList.add("animate-fade-in"));
}),
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }),
  window.addEventListener("load", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    let e = document.getElementById("home"),
      t = e.offsetTop,
      o = e.offsetTop + e.offsetHeight;
    if (window.scrollY + 50 >= t && window.scrollY + 50 < o) {
      navLinks.forEach((e) => e.classList.remove("active"));
      let s = document.querySelector("[href='#home']");
      s.classList.add("active");
    }
  }),
  document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelector(".abt");
    e.classList.remove("animate-from-left");
    let t = document.querySelector(".exp");
    t.classList.remove("animate-from-right");
    let o = document.querySelector(".skills-top");
    o.classList.remove("animate-from-left");
    let s = document.querySelector(".skills-bottom");
    s.classList.remove("animate-from-right");
    let l = document.querySelector(".Projects-content");
    l.classList.remove("animate-from-bottom");
    let i = document.querySelector(".cont-form");
    i.classList.remove("animate-from-left");
    let a = document.querySelector(".cont-info");
    a.classList.remove("animate-from-right");
    let r = document.querySelector(".ftr-p");
    r.classList.remove("animate-from-top");
    let n = document.getElementById("scroll-to-top");
    n.classList.add("hidden", "animate-fade-out");
  });
