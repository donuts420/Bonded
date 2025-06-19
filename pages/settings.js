import Head from "next/head";
import Link from "next/link";
import "../styles/style.css"; // Or change path based on your folder

export default function Settings() {
  return (
    <>
      <Head>
        <title>Settings</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
          integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
          crossOrigin="anonymous"
        />
      </Head>

      <div>
        {/* Topbar */}
        <div className="topbar">
          <button
            id="menu-btn"
            className="menu"
            aria-label="Toggle sidebar"
            type="button"
          >
            <img src="/Menu.webp" alt="menu" />
          </button>

          <div className="hands">
            <Link href="/">
              <img src="/hands_holding.webp" alt="hands_holding" />
            </Link>
          </div>

          <Link href="/">
            <img src="/logo.svg" alt="Logo" />
          </Link>

          <div className="search">
            <input type="text" placeholder="Search" />
          </div>

          <div className="settings">
            <button className="topbar-btn">
              <img src="/Settings.webp" alt="settings_logo" />
              <span className="topbar-label">Settings</span>
            </button>
            <button className="topbar-btn">
              <img src="/Profile.webp" alt="profile_logo" />
              <span className="topbar-label">Profile</span>
            </button>
          </div>
        </div>

        {/* Settings Form */}
        <div className="settings-wrapper">
          <h2 className="settings-heading">Account Settings</h2>

          <div className="settings-section">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter new username" />
          </div>

          <div className="settings-section">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" />
          </div>

          <div className="settings-section">
            <label htmlFor="gender">Gender</label>
            <select id="gender">
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="settings-section">
            <label htmlFor="new-password">New Password</label>
            <input
              type="password"
              id="new-password"
              placeholder="Enter new password"
            />
          </div>

          <div className="settings-section">
            <label htmlFor="confirm-password" style={{ marginTop: "12px" }}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Re-enter new password"
            />
          </div>

          <div className="settings-actions">
            <button className="save-btn">Save Changes</button>
            <button className="logout-btn">Log Out</button>
          </div>
        </div>
      </div>
    </>
  );
}
