import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function Connect() {
  return (
    <>
      <Head>
        <title>Bonded Connect</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Bonded Connect - Meet new people, exchange stories, and build meaningful connections."
        />
        <link rel="stylesheet" href="/styles/connect.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr"
          crossOrigin="anonymous"
        />
      </Head>

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

      {/* Title Section */}
      <div className="relative px-4 py-5 my-5 text-center mt-[300px]">
        <h1 className="relative display-5 fw-bold text-body-emphasis">
          Bringing People Together, Made Simple.
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Welcome to the Connect page, your space to meet new people and build
            meaningful connections. Whether you’re looking for a friendly chat,
            someone to exchange stories with, or simply a sense of community,
            you’ll find it here. It’s never too late to make new friends and
            with just a click, you can start a conversation that brightens your
            day.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="card-holder px-4 py-5 my-5 d-flex gap-4 flex-wrap justify-content-center">
        {/* Card 1 */}
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/assets/spirit_animal.jpeg"
            className="card-img-top"
            alt="spirit animal"
          />
          <div className="card-body">
            <h5 className="card-title">Alex Johnson</h5>
            <p className="card-text">
              Social worker looking to connect with like-minded people.
            </p>
            <button type="button" className="btn btn-outline-success me-2">
              Ignore
            </button>
            <button type="button" className="btn btn-success">
              Accept
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/assets/cosplay.jpg"
            className="card-img-top"
            alt="cosplay"
          />
          <div className="card-body">
            <h5 className="card-title">Priya Sharma</h5>
            <p className="card-text">
              Volunteer who loves helping senior citizens.
            </p>
            <button type="button" className="btn btn-outline-success me-2">
              Ignore
            </button>
            <button type="button" className="btn btn-success">
              Accept
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/assets/birthday_pic.jpeg"
            className="card-img-top"
            alt="old man"
          />
          <div className="card-body">
            <h5 className="card-title">Rahul Mehta</h5>
            <p className="card-text">
              Experienced counselor here to offer support and guidance.
            </p>
            <button type="button" className="btn btn-outline-success me-2">
              Ignore
            </button>
            <button type="button" className="btn btn-success">
              Accept
            </button>
          </div>
        </div>
      </div>

      {/* Bootstrap JS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  );
}
