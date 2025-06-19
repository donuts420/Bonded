import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';

export default function NgoMap() {
  useEffect(() => {
    // Wait until Leaflet is loaded
    if (typeof L !== 'undefined') {
      const map = L.map('map').setView([28.6139, 77.2090], 12); // Delhi

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

      L.marker([28.6139, 77.2090])
        .addTo(map)
        .bindPopup('NGO Location')
        .openPopup();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Find NGOs Near Me</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        />
      </Head>

      {/* Load Leaflet JS */}
      <Script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        strategy="afterInteractive"
      />

      {/* Map */}
      <div
        id="map"
        style={{
          height: '100vh',
          width: '100%',
          position: 'relative',
          zIndex: 0,
        }}
      ></div>
    </>
  );
}
