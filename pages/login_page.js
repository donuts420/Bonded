import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Head>
        <title>Bonded Login</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/login.css" />
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

      {/* Login form */}
      <div className="login-container">
        <img
          src="/assets/icons/logo.svg"
          alt="Bonded Logo"
          className="login-logo"
        />
        <div className="login-title">Sign In</div>

        <form className="login-form" id="login-form">
          <input type="email" id="email" placeholder="Email" required />
          <input type="password" id="password" placeholder="Password" required />
          <button className="login-btn" type="submit">Login</button>
        </form>

        <div className="login-links">
          <a href="#">Forgot Password?</a>
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>

      {/* Login logic script */}
      <Script src="/scripts/login.js" strategy="afterInteractive" />
    </>
  );
}
