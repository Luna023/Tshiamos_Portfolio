document.addEventListener("DOMContentLoaded", function () {
  const words = [
    "Frontend Developer",
    "QA Tester",
    "UI/UX Designer",
    "Web Developer",
    "Java Developer",
  ];
  const spanElement = document.querySelector(".text-animation span");
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentWord = words[wordIndex];
  let typingSpeed = 150; // Speed of typing characters
  let deletingSpeed = 100; // Speed of deleting characters
  let waitTime = 1000; // Time to wait before deleting

  function type() {
    if (isDeleting) {
      // Delete characters
      charIndex--;
      spanElement.textContent = currentWord.slice(0, charIndex);
    } else {
      // Type characters
      charIndex++;
      spanElement.textContent = currentWord.slice(0, charIndex);
    }

    // If we reach the end of the word, start deleting after a delay
    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
      }, waitTime);
    }

    // If we've deleted all characters, move to the next word
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Move to the next word in the array
      currentWord = words[wordIndex];
    }

    // Control typing and deleting speeds
    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, currentSpeed);
  }

  type(); // Start the typing effect
});

let menuIconc = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offstTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute;

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a  [href*=" + id + " ]")
          .classList.add("active");
      });
    }
  });
};

menuIconc.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
