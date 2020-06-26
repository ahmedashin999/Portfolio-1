// const menuBtn = document.querySelector(".menu-btn");
// let menuOpen = false;
// const nav = document.getElementById("nav");

// menuBtn.addEventListener("click", () => {
//   if (!menuOpen) {
//     menuBtn.classList.toggle("open");
//     menuOpen = true;
//     nav.classList.toggle("show");
//   } else {
//     menuBtn.classList.remove("open");
//     menuOpen = false;
//   }
// });
const burger = document.querySelector(".fas");
const nav = document.getElementById("nav");
const home = document.getElementById("home");

burger.addEventListener("click", () => {
  home.classList.toggle("move");
  nav.classList.toggle("show");
});

// smooth scrolling

$("#nav ul li a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 30,
      },
      800
    );
  }
});
