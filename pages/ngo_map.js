import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

export default function NgoMap() {
  return (
    <>
      <Head>
        <title>Find NGOs Near Me</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/ngo_map.css" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        />
      </Head>

      {/* Leaflet JS */}
      <Script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        strategy="beforeInteractive"
      />

      {/* Topbar */}
      <div className="topbar">
        <button
          id="menu-btn"
          className="menu"
          aria-label="Toggle sidebar"
          type="button"
        >
          <img src="/assets/icons/Menu.png" alt="menu" />
        </button>
        <div className="hands">
          <Link href="/">
            <img src="/assets/icons/hands_holding.png" alt="hands_holding" />
          </Link>
        </div>
        <Link href="/">
          <img src="/assets/icons/logo.svg" alt="Logo" />
        </Link>
        <div className="search">
          <input type="text" id="search-input" placeholder="Search NGOs" />
          <button id="search-btn">Go</button>
        </div>
        <div className="settings">
          <button className="settings-btn" aria-label="Settings">
            <img src="/assets/icons/Settings.png" alt="settings_logo" />
          </button>
          <button className="profile-btn" aria-label="Profile">
            <img src="/assets/icons/Profile.png" alt="profile_logo" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar" id="sidebar">
        <button className="sidebar-btn">
          <img src="/assets/icons/Notepad.png" alt="notepad_logo" />
          <span className="sidebar-label">Blog</span>
        </button>
        <button className="sidebar-btn">
          <img src="/assets/icons/AddUser.png" alt="connect_logo" />
          <span className="sidebar-label">Connect</span>
        </button>
        <button className="sidebar-btn">
          <img src="/assets/icons/ChatBubble.png" alt="chat_logo" />
          <span className="sidebar-label">Message</span>
        </button>
        <button className="sidebar-btn">
          <img src="/assets/icons/Phone.png" alt="phone_logo" />
          <span className="sidebar-label">Contact NGOs</span>
        </button>
      </div>

      {/* Map container */}
      <div
        id="map"
        style={{ height: 'calc(100vh - 120px)', marginTop: '120px' }}
      ></div>

      {/* Map logic */}
      <Script src="/scripts/ngo_map.js" strategy="afterInteractive" />
    </>
  );
}
