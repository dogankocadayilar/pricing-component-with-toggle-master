import data from "./data.json" assert { type: "json" };
import Card from "./Card.js";

const toggler = document.getElementById("toggler");
const cardContainer = document.getElementById("cardContainer");
let isMonthly = false;

toggler.addEventListener("click", toggle);

cardContainer.innerHTML = data
  .map((item) => Card({ ...item, isMonthly }))
  .join("");

function toggle() {
  this.classList.toggle("month");
  isMonthly = this.classList.contains("month");
  cardContainer.innerHTML = data
    .map((item) => Card({ ...item, isMonthly }))
    .join("");
}
