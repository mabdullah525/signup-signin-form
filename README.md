# 🔐 Firebase Auth + Realtime Database (React Project)

This project is a simple authentication system built with **React** and **Firebase**.  
It allows users to **Sign Up** with extra details (first name, last name, phone),  
and then **Login** to view their stored profile information.

---

## 🚀 Features
- User Authentication with Firebase
- Sign Up with:
  - First Name
  - Last Name
  - Phone Number
  - Email & Password
- Login functionality
- Fetch and display user profile after login
- Data stored in Firebase **Realtime Database**

---

## 🛠️ Tech Stack
- **React.js** (Frontend)
- **Firebase Authentication**


## 📂 Project Structure

/src
├── components/
│ └── AuthForm.jsx # Signup + Login + User Details
├── firebase.js # Firebase Configuration
└── App.js # Main App Entry

---

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/firebase-auth-app.git
   cd firebase-auth-app
   
2. **Install Dependences**
   npm install

2. **Setup Firebase**

Go to Firebase Console

Create a new project

Enable Authentication (Email/Password)

Enable Realtime Database

Get your Firebase config and replace it inside firebase.js:

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);

Run this Project
npm run dev
