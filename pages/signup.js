import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

export default function Signup() {
  return (
    <>
      <Head>
        <title>Bonded Sign Up</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/signup.css" />
      </Head>

      {/* Firebase SDK */}
      <Script
        src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"
        strategy="beforeInteractive"
      />

      <div className="login-container">
        <img
          src="/assets/icons/logo.svg"
          alt="Bonded Logo"
          className="login-logo"
        />
        <div className="login-title">Sign Up</div>
        <form id="signup-form" className="login-form">
          <input type="text" id="username" placeholder="Username" required />
          <input type="email" id="email" placeholder="Email" required />
          <input type="password" id="password" placeholder="Password" required />
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            required
          />

          <label
            htmlFor="id-upload"
            style={{
              color: '#213448',
              fontSize: '1rem',
              marginTop: '8px',
            }}
          >
            Upload a photo of your ID
          </label>
          <div className="file-upload-wrapper">
            <input type="file" id="id-upload" accept="image/*" required />
            <button
              type="button"
              className="file-remove-btn"
              id="removeFileBtn"
              aria-label="Remove file"
              style={{ display: 'none' }}
            >
              &#10005;
            </button>
          </div>

          <button className="login-btn" type="submit">
            Create Account
          </button>
        </form>

        <div className="login-links">
          <Link href="/login">Already have an account?</Link>
        </div>
      </div>

      {/* Signup logic */}
      <Script src="/scripts/signup.js" strategy="afterInteractive" />
    </>
  );
}
