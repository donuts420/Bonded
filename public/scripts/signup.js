const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");

  signupForm.addEventListener("submit", async function (e) {
    e.preventDefault();

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
      // Create user in Firebase Authentication
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;

      // Convert image file to Base64
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = async function () {
        const imageBase64 = reader.result;

        // Save user data to Firestore Database
        await db.collection("users").doc(user.uid).set({
          username: username,
          email: email,
          image: imageBase64,
        });

        // Optionally update user display name
        await user.updateProfile({
          displayName: username,
        });

        alert("Account created successfully!");
        window.location.href = "../routes/login_page.html";
      };

      reader.onerror = function (error) {
        console.error("Image read error:", error);
        alert("Image read failed.");
      };
    } catch (error) {
      console.error("Signup Error:", error.code, error.message);
      alert("Signup failed: " + error.message);
    }
  });
});
