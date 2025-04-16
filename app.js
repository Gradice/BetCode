const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");
const navLogo = document.querySelector("#navbar_logo");


document.addEventListener("DOMContentLoaded", function () {
  const words = ["Instantly", "Easily", "Faster"];
  const colors = ["#FAFA33", "#87CEEB", "#90EE90"]; // Corresponding colors
  let index = 0;
  const changingWord = document.querySelector(".changing-word");

  function swapWord() {
    if (changingWord) {
      changingWord.classList.add("fade-out"); // Start fade-out

      setTimeout(() => {
        index = (index + 1) % words.length;
        changingWord.textContent = words[index]; // Swap word
        changingWord.style.color = colors[index]; // Change color
        changingWord.classList.remove("fade-out"); // Reset fade-out
        changingWord.classList.add("fade-in"); // Start fade-in

        setTimeout(() => {
          changingWord.classList.remove("fade-in"); // Remove fade-in after animation
        }, 500);
      }, 500); // Wait for fade-out to complete before swapping
    }
  }

  setInterval(swapWord, 3500); // Change word every 5 seconds
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  // Disable scrolling while loader is active
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    // Remove loader from DOM
    document.body.removeChild(loader);

    // Re-enable scrolling
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  });
});


// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

//Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
