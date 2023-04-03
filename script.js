let clicked = false;
const hand = document.querySelector(".hand");
hand.addEventListener("click", () => {
  if (clicked) return;
  clicked = true;
  hand.classList.add("active");
  setTimeout(() => {
    hand.classList.add("out");
  }, 2000);
});
