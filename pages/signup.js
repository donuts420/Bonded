import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Signup() {
  const [firebaseApp, setFirebaseApp] = useState(null);

  useEffect(() => {
    const loadFirebase = async () => {
      const firebase = (await import('firebase/compat/app')).default;
      await import('firebase/compat/auth');
      await import('firebase/compat/firestore');

      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
      };

      if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

      setFirebaseApp(firebase);
    };

    loadFirebase();
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!firebaseApp) {
      alert('Firebase is still loading...');
      return;
    }

    const auth = firebaseApp.auth();
    const db = firebaseApp.firestore();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const fileInput = document.getElementById("id-upload");
    const file = fileInput.files[0];

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!file) {
      alert("Please upload an ID image.");
      return;
    }

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = async function () {
        const imageBase64 = reader.result;

        await db.collection("users").doc(user.uid).set({
          username: username,
          email: email,
          image: imageBase64,
        });

        await user.updateProfile({
          displayName: username,
        });

        alert("Account created successfully!");

        window.location.href = "/login";
      };

      reader.onerror = function (error) {
        console.error("Image read error:", error);
        alert("Image read failed.");
      };
    } catch (error) {
      console.error("Signup Error:", error.code, error.message);
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Bonded Sign Up</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/signup.css" />
      </Head>

      <div className="login-container">
        <img
          src="/assets/icons/logo.svg"
          alt="Bonded Logo"
          className="login-logo"
        />
        <div className="login-title">Sign Up</div>
        <form id="signup-form" className="login-form" onSubmit={handleSignup}>
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
          </div>

          <button className="login-btn" type="submit" disabled={!firebaseApp}>
            {firebaseApp ? "Create Account" : "Loading Firebase..."}
          </button>
        </form>

        <div className="login-links">
          <Link href="/login">Already have an account?</Link>
        </div>
      </div>
    </>
  );
}
