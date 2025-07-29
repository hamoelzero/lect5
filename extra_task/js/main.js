//header
let burgerIcon = document.querySelector("nav >i");
burgerIcon.addEventListener("click", function () {
  document.querySelector("nav > ul").classList.toggle("active");
  document.querySelector("nav > i").classList.toggle("fa-x");
});

//LANDING section
let controlRight = document.querySelector(".control-right");
let controlLeft = document.querySelector(".control-left");
let slidesContainer = document.querySelector(".carousel-slides ");
let slides = document.querySelectorAll(".carousel-slides .slide");
let current = 0;
function activeSlide(current) {
  document
    .querySelector(".carousel-slides .slide.active")
    .classList.remove("active");
  slides[current].classList.add("active");
}
controlRight.addEventListener("click", function () {
  if (current == slides.length - 1) {
    slidesContainer.style = `transform: translateX(${0}%)`;
    current = 0;
  } else {
    current++;
    slidesContainer.style = `transform: translateX(${current * -100}%)`;
  }
  activeSlide(current);
});
controlLeft.addEventListener("click", function () {
  if (current == 0) {
    current = slides.length - 1;
    slidesContainer.style = `transform: translateX(${current * -100}%)`;
  } else {
    current--;
    slidesContainer.style = `transform: translateX(${-current * 100}%)`;
  }
  activeSlide(current);
});
//indicators
slides.forEach((_) => {
  let li = document.createElement("li");
  document.querySelector(".carousel-controls span ul ").appendChild(li);
});

let indicators = document.querySelectorAll(".carousel-controls span ul li");

let swaper = setInterval(() => {
  controlRight.click();
}, 5000);
indicators.forEach((_, i) => {
  indicators[i].addEventListener("click", function () {
    current = i;
    slidesContainer.style = `transform: translateX(${current * -100}%)`;
    activeSlide(current);
  });
});

//animations
let benefitsItems = document.querySelectorAll(
  ".benefits .benefits-items .item"
);
let fadeFromLeft = document.querySelectorAll(".fadeFromLeft");
let fadeFromRight = document.querySelectorAll(".fadeFromRight");
let flipFromRight = document.querySelectorAll(
  ".flipFromRight:not(.item), .flipFromRight-out:not(.item)"
);
let flipFromLeft = document.querySelectorAll(
  ".flipFromLeft:not(.item), .flipFromLeft-out:not(.item)"
);
let fadeFromBottom = document.querySelectorAll(".fadeFromBottom");
let scaleFade = document.querySelectorAll(".scaleFade, .scaleFade-out");
let flipin = document.querySelectorAll(".flip, .flip-out");
let testP = document.querySelectorAll("slider-2 .slider-grid .slide p");
window.addEventListener("scroll", function () {
  fadeFromLeft.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    if (window.scrollY > elementTop - 650) {
      item.classList.replace("fadeFromLeft-out", "fadeFromLeft");
    } else {
      item.classList.replace("fadeFromLeft", "fadeFromLeft-out");
    }
  });

  fadeFromRight.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    if (window.scrollY > elementTop - 650) {
      // console.log(item);
      item.classList.replace("fadeFromRight-out", "fadeFromRight");
    } else {
      item.classList.replace("fadeFromRight", "fadeFromRight-out");
    }
  });

  flipFromRight.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    if (window.scrollY > elementTop - 650) {
      item.classList.replace("flipFromRight-out", "flipFromRight");
    } else {
      item.classList.replace("flipFromRight", "flipFromRight-out");
    }
  });

  fadeFromBottom.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    if (window.scrollY > elementTop - 650) {
      item.classList.replace("fadeFromBottom-out", "fadeFromBottom");
    } else {
      item.classList.replace("fadeFromBottom", "fadeFromBottom-out");
    }
  });

  scaleFade.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    if (window.scrollY > elementTop - 650) {
      item.classList.replace("scaleFade-out", "scaleFade");
    } else {
      item.classList.replace("scaleFade", "scaleFade-out");
    }
  });

  flipin.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    if (window.scrollY > elementTop - 650) {
      item.classList.replace("flip-out", "flip");
    } else {
      item.classList.replace("flip", "flip-out");
    }
  });

  flipFromLeft.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    if (window.scrollY > elementTop - 650) {
      item.classList.replace("flipFromLeft-out", "flipFromLeft");
    } else {
      item.classList.replace("flipFromLeft", "flipFromLeft-out");
    }
  });

  benefitsItems.forEach((item) => {
    if (
      window.scrollY > item.offsetTop - 600 &&
      item.classList.contains("flipFromRight-out")
    ) {
      item.classList.replace("flipFromRight-out", "flipFromRight");
      if (item.classList.contains("flipFromRight")) {
        let goal = item.lastElementChild.getAttribute("data-num");
        let current = 0;
        let interval = setInterval(() => {
          current++;
          item.lastElementChild.textContent = `${current}%`;
          if (current == goal) {
            clearInterval(interval);
          }
        }, 20);
      }
    } else if (window.scrollY < item.offsetTop - 600) {
      item.classList.replace("flipFromRight", "flipFromRight-out");
      item.lastElementChild.textContent = `${0}%`;
    }
  });
});

//accordion section
let accordiomItems = document.querySelectorAll(".accordion-item button");
accordiomItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.toggleAttribute("expanded");
  });
});
