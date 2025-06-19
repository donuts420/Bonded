import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function NgoMap() {
  const [leafletReady, setLeafletReady] = useState(false);

  useEffect(() => {
    if (leafletReady && typeof window.L !== 'undefined') {
      const map = window.L.map('map').setView([28.6139, 77.2090], 12); // Delhi

      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

      window.L.marker([28.6139, 77.2090])
        .addTo(map)
        .bindPopup('NGO Location')
        .openPopup();
    }
  }, [leafletReady]);

  return (
    <>
      <Head>
        <title>Find NGOs Near Me</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Load Leaflet CSS properly */}
      <Script
        id="leaflet-css"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
            document.head.appendChild(link);
          `,
        }}
      />

      {/* Load Leaflet JS */}
      <Script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Leaflet loaded');
          setLeafletReady(true);
        }}
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
      >
        {!leafletReady && (
          <p style={{ textAlign: 'center', paddingTop: '20px' }}>
            Loading map...
          </p>
        )}
      </div>
    </>
  );
}
