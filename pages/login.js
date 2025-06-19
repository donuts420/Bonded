import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [firebaseLoaded, setFirebaseLoaded] = useState(false);

  useEffect(() => {
    const loadFirebase = async () => {
      const firebase = await import('firebase/compat/app');
      await import('firebase/compat/auth');

      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
      };

      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      setFirebaseLoaded(true);
    };

    loadFirebase();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const firebase = (await import('firebase/compat/app')).default;
    const auth = firebase.auth();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert("Login successful!");
      window.location.href = "/";
    } catch (error) {
      console.error("Login Error:", error.code, error.message);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Bonded Login</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/login.css" />
      </Head>

      <div className="login-container">
        <img
          src="/assets/icons/logo.svg"
          alt="Bonded Logo"
          className="login-logo"
        />
        <div className="login-title">Sign In</div>
        <form className="login-form" id="login-form" onSubmit={handleLogin}>
          <input type="email" id="email" placeholder="Email" required />
          <input type="password" id="password" placeholder="Password" required />
          <button className="login-btn" type="submit" disabled={!firebaseLoaded}>
            Login
          </button>
        </form>
        <div className="login-links">
          <a href="#">Forgot Password?</a>
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
}
