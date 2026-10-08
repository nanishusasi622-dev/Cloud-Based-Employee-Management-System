/*
  OPTIONAL CLOUD DATABASE CONFIGURATION

  The current demo stores records in browser localStorage so it can
  run immediately without exposing Firebase credentials.

  For the full cloud version:
  1. Create a Firebase project.
  2. Enable Firestore Database.
  3. Register a Web App.
  4. Copy the Firebase configuration into this file.
  5. Replace the localStorage functions in script.js with Firestore operations.

  Never upload private server credentials or service-account JSON files.
*/

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.firebasestorage.app",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
