// import "./star-solid.svg";
const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");
const display = document.querySelector(".display");
const stars = document.querySelector(".stars");

const star = (
  `<img
    src="star.png"
    alt="Star Icon"
  />`
);

let count = 0;
display.innerHTML = count;

const setStars = (count) => {
  let starCount = ""

  for (let i = 0; i < count; i++) {
    starCount += star
  }

  return starCount;
}

decrement.addEventListener("click", () => {
  if (count > 0) count--;
  display.innerHTML = count;
  stars.innerHTML = setStars(count);
})

increment.addEventListener("click", () => {
  count++;
  display.innerHTML = count;
  stars.innerHTML = setStars(count);
})