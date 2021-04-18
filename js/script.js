const navMobile = document.querySelector("#navMobile");
const hamburger = document.querySelector("#hamburger");

navMobile.addEventListener("click", () => {
  navMobile.style.right = "-100%";
});

hamburger.addEventListener("click", () => {
  navMobile.style.right = "0";
});
