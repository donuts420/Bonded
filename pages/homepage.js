import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bonded</title>
        <link rel="stylesheet" href="/styles/homepage.css" />
      </Head>

      <input type="checkbox" id="sidebarToggle" hidden />

      {/* Topbar */}
      <div className="topbar">
        <button
          id="menu-btn"
          className="menu"
          aria-label="Toggle sidebar"
          type="button"
        >
          <img src="/assets/Menu.png" alt="menu" />
        </button>
        <div className="hands">
          <Link href="/">
            <img src="/assets/hands_holding.png" alt="hands_holding" />
          </Link>
        </div>
        <Link href="/">
          <img src="/assets/logo.svg" alt="Logo" />
        </Link>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="settings">
          <button className="topbar-btn">
            <img src="/assets/Settings.png" alt="settings_logo" />
            <span className="topbar-label">Settings</span>
          </button>
          <button className="topbar-btn">
            <img src="/assets/Profile.png" alt="profile_logo" />
            <span className="topbar-label">Profile</span>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar" id="sidebar">
        <Link href="/blog">
          <button className="sidebar-btn">
            <img src="/assets/Notepad.png" alt="notepad_logo" />
            <span className="sidebar-label">Blog</span>
          </button>
        </Link>

        <Link href="/connect">
          <button className="sidebar-btn">
            <img src="/assets/AddUser.png" alt="connect_logo" />
            <span className="sidebar-label">Connect</span>
          </button>
        </Link>

        <Link href="/messages">
          <button className="sidebar-btn">
            <img src="/assets/ChatBubble.png" alt="chat_logo" />
            <span className="sidebar-label">Message</span>
          </button>
        </Link>

        <Link href="/ngo_map">
          <button className="sidebar-btn">
            <img src="/assets/Phone.png" alt="phone_logo" />
            <span className="sidebar-label">Contact NGOs</span>
          </button>
        </Link>
      </div>

      {/* Script */}
      <script src="/scripts/homepage.js" />
    </>
  );
}
