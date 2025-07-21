let divs = document.querySelectorAll("body > .container > div > div");

divs.forEach((e) => {
  e.className.includes("item") ? (e.style = `grid-area: ${e.className};`) : "";
});
