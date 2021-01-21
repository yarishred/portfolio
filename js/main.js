// Variables
const menuHamb = document.getElementById("menuhamb");
const overlay = document.querySelector(".overlay");
const navigationOverlay = document.getElementById("main-nav");
const links = document.querySelectorAll(".links");
const body = document.body;
const menu = document.querySelector(".menu");

// Boolean Variable
let switchOverlay = false;

// Functions
const showAndHideMenu = () => {
  if (switchOverlay === false) {
    switchOverlay = true;
    overlay.classList.add("overlayScale");
    navigationOverlay.classList.add("navigationOverlay");
    body.style.overflowY = "hidden";
  } else {
    // Close the overlay menu
    switchOverlay = false;
    overlay.classList.remove("overlayScale");
    navigationOverlay.classList.remove("navigationOverlay");
    body.style.overflowY = "unset";
  }
};

const accessToLink = () => {
  // Check Menu Boolean
  menu.checked = false;
  overlay.classList.remove("overlayScale");
  body.style.overflowY = "unset";
  // Call Function Menu
  showAndHideMenu();
};

// Events
menuHamb.addEventListener("click", showAndHideMenu);
links.forEach((link) => link.addEventListener("click", accessToLink));

//Hover skills
const skills = document.querySelectorAll(".skill-tech");
console.log(skills)

let skillscounter = 0;

for (let i = 0; i < skills.length; i++) {
  skills[i].addEventListener("mouseenter", function () {
    skills[skillscounter].classList.remove("focus");
    this.classList.add("focus");

    skills.forEach((skill, index) => {
      if (!skill.classList.contains("focus")) {
        skills[index].style.opacity = 0.2;
        skills[index].style.zIndex = -1;
       
      } else {
        skills[index].style.opacity = 1;
        skills[index].style.zIndex = 0;
      }
    });
    skillscounter = i;
  });
}

for (let i = 0; i < skills.length; i++) {
  skills[i].addEventListener("mouseleave", function () {
    skills[skillscounter].classList.remove("focus");

    skills.forEach((skill, index) => {
      if (!skill.classList.contains("focus")) {
        skills[index].style.opacity = 1;
        skills[index].style.zIndex = 0;
      }
    });
  });
}

