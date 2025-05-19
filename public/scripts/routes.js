// scripts/routes.js

document.addEventListener("DOMContentLoaded", () => {
  loadRoutes();
  loadMap(); // this is optional, depending on whether you're using Leaflet
});

  
async function loadRoutes() {
  const routeList = document.getElementById("routeList");

  try {
    const response = await fetch("/api/marta");
    const routes = await response.json();

    routeList.innerHTML = "";

    routes.forEach(route => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>Route:</strong> ${route.Route} — ${route.Description}`;
      routeList.appendChild(li);
    });
  } catch (err) {
    routeList.innerHTML = "<li>Error loading routes.</li>";
    console.error("Routes fetch error:", err);
  }
}

  function loadMap() {
    const map = L.map("map").setView([33.7490, -84.3880], 11);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    // Add live bus markers here later
  }
  