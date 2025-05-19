document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchBtn").addEventListener("click", handleSearch);
  loadRealTimeStatus();
});

async function loadRealTimeStatus() {
  const container = document.getElementById("statusContainer");
  container.innerHTML = "Loading real-time data...";

  try {
    const response = await fetch("/api/marta");
    const buses = await response.json();

    container.innerHTML = "";
    buses.slice(0, 5).forEach(bus => {
      const div = document.createElement("div");
      div.innerHTML = `
        <strong>Route:</strong> ${bus.ROUTE} |
        <strong>Status:</strong> ${bus.ADHERENCE == 0 ? "On Time" : `${bus.ADHERENCE} min delay`}
        <hr/>
      `;
      container.appendChild(div);
    });
  } catch (error) {
    container.innerHTML = "Error loading data.";
    console.error("Fetch error:", error);
  }
}

async function handleSearch() {
  const input = document.getElementById("searchBar").value.trim();
  const container = document.getElementById("statusContainer");
  container.innerHTML = "";

  if (!input) {
    container.innerHTML = "<p>Please enter a route number.</p>";
    return;
  }

  try {
    const response = await fetch("/api/marta");
    const buses = await response.json();
    const filtered = buses.filter(bus => bus.ROUTE === input);

    if (filtered.length === 0) {
      container.innerHTML = `<p>No buses found for route ${input}.</p>`;
      return;
    }

    filtered.forEach(bus => {
      const div = document.createElement("div");
      div.innerHTML = `
        <strong>Route:</strong> ${bus.ROUTE} |
        <strong>Status:</strong> ${bus.ADHERENCE == 0 ? "On Time" : `${bus.ADHERENCE} min delay`}
        <hr/>
      `;
      container.appendChild(div);
    });
  } catch (error) {
    console.error("Search error:", error);
    container.innerHTML = "<p>Error loading bus data.</p>";
  }
}
