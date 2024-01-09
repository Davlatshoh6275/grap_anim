gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".navItem a");
const activeNav = document.querySelector(".activeNav");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Turn navs blue
    // if i don't add this code bellow all of them becoming blue
    gsap.to(links, { color: "#252525" });

    if (document.activeElement === e.target) {
      gsap.to(link, { color: "#385ae0" });
    }

    // Wanna move the line
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 1,
      absolute: true,
      ease: "elastic.out(1,0.5)",
    });
  });
});
