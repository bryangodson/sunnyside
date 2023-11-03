const menu = document.querySelector(".top img");
menu.addEventListener("click", () => {
  let nav = document.querySelector("header nav");
  nav.classList.toggle("show");
});
