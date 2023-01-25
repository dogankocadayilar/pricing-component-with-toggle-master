export default function Card({
  title,
  monthlyPricing,
  annualyPricing,
  storageSize,
  allowedUsers,
  sendSize,
  isMonthly,
}) {
  return `
    <div class="card">
    <h2 class="card--title">${title}</h2>
    <h3 class="card--pricing">
      <span class="pricing-dollar">&dollar;</span> ${
        isMonthly ? monthlyPricing : annualyPricing
      }
    </h3>
    <ul class="card--info">
      <li class="card--info-item">${storageSize} Storage</li>
      <li class="card--info-item">${allowedUsers} Users Allowed</li>
      <li class="card--info-item">Send up to ${sendSize} GB</li>
    </ul>
    <button class="card--button">Learn More</button>
  </div>
    `;
}
