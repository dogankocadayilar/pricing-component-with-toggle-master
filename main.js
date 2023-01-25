import Card from "./Card.js";

const data = [
  {
    title: "Basic",
    monthlyPricing: "19.99",
    annualyPricing: "199.99",
    storageSize: "500 GB",
    allowedUsers: "2",
    sendSize: "3",
  },
  {
    title: "Professional",
    monthlyPricing: "24.99",
    annualyPricing: "249.99",
    storageSize: "1 TB",
    allowedUsers: "5",
    sendSize: "10",
  },
  {
    title: "Master",
    monthlyPricing: "39.99",
    annualyPricing: "399.99",
    storageSize: "2 Tb",
    allowedUsers: "10",
    sendSize: "20",
  },
];

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
