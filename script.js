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
  let typingSpeed = 150; 
  let deletingSpeed = 100; 
  let waitTime = 1000; 

  function type() {
    if (isDeleting) {
     
      charIndex--;
      spanElement.textContent = currentWord.slice(0, charIndex);
    } else {
      
      charIndex++;
      spanElement.textContent = currentWord.slice(0, charIndex);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
      }, waitTime);
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; 
      currentWord = words[wordIndex];
    }

    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, currentSpeed);
  }

  type(); 
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
