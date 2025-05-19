// scripts/planner.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("tripForm");
    form.addEventListener("submit", handleTripPlan);
  });
  
  function handleTripPlan(e) {
    e.preventDefault();
  
    const start = document.getElementById("start").value.trim();
    const end = document.getElementById("end").value.trim();
    const container = document.getElementById("resultsContainer");
  
    container.innerHTML = `
      <p><strong>Start:</strong> ${start}</p>
      <p><strong>End:</strong> ${end}</p>
      <p>Fetching best routes... (Trip planner logic will go here)</p>
    `;
  
    // TODO: Add API logic here to fetch route connections and arrival times
  }
  