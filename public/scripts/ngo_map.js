let map;
let userMarker;
let ngoMarkers = [];


menuBtn.addEventListener('click', ()=> {
    sidebar.classList.toggle('active');
});

function initMap() {
  map = L.map("map").setView([0, 0], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        map.setView([userLocation.lat, userLocation.lng], 14);

        userMarker = L.marker([userLocation.lat, userLocation.lng], {
          icon: L.icon({
            iconUrl:
              "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
            shadowUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          }),
        })
          .addTo(map)
          .bindPopup("Your Location")
          .openPopup();

        fetchAndAddNGOs(userLocation.lat, userLocation.lng);
      },
      () => {
        alert("Error: The Geolocation service failed.");
      }
    );
  } else {
    alert("Error: Your browser does not support geolocation.");
  }
}

function fetchAndAddNGOs(lat, lng) {
  ngoMarkers.forEach((marker) => marker.remove());
  ngoMarkers = [];

  const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];
  (
    node["office"="ngo"](around:5000,${lat},${lng});
    node["office"="association"](around:5000,${lat},${lng});
    node["charity"="yes"](around:5000,${lat},${lng});
    node["amenity"="social_facility"](around:5000,${lat},${lng});
    node["amenity"="community_centre"](around:5000,${lat},${lng});
    node["organisation:type"="ngo"](around:5000,${lat},${lng});
    node["office"="government"](around:5000,${lat},${lng});
  );
  out center;`;

  fetch(overpassUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.elements.length === 0) {
        alert("No nearby NGOs found.");
      }

      data.elements.forEach((place) => {
        const marker = L.marker([place.lat, place.lon])
          .addTo(map)
          .bindPopup(`<b>${place.tags.name || "Unnamed NGO"}</b>`);

        ngoMarkers.push(marker);
      });
    })
    .catch((error) => {
      console.error("Error fetching NGO locations:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  initMap();

  document.getElementById("search-btn").addEventListener("click", () => {
    if (userMarker) {
      const latlng = userMarker.getLatLng();
      fetchAndAddNGOs(latlng.lat, latlng.lng);
    } else {
      alert("Waiting for geolocation...");
    }
  });
});
