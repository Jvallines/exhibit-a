# The Official Record 📋
### "Things We Said That Were Ignored"

A shared, real-time incident tracker for parents. Built with React + Firebase.

---

## Setup Instructions

### Step 1: Create a Firebase Project

1. Go to https://console.firebase.google.com
2. Click **"Add project"**
3. Name it something like `daughter-tracker`
4. Disable Google Analytics (not needed) → Click **"Create project"**

### Step 2: Set Up Firestore Database

1. In your Firebase project, click **"Firestore Database"** in the left sidebar
2. Click **"Create database"**
3. Choose **"Start in test mode"** → Click **"Next"**
4. Pick any location (us-east1 is fine) → Click **"Enable"**

### Step 3: Get Your Firebase Config

1. Click the ⚙️ gear icon → **"Project settings"**
2. Scroll down to **"Your apps"** → Click the **</>** (Web) icon
3. Name it anything (e.g. `tracker-web`) → Click **"Register app"**
4. Copy the `firebaseConfig` object — it looks like this:
   ```js
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123:web:abc123"
   };
   ```

### Step 4: Add Your Config to the App

1. Open `src/firebase.js`
2. Replace the placeholder values with your actual config values from Step 3
3. Save the file

### Step 5: Deploy to Vercel

1. Create a free account at https://vercel.com (sign up with GitHub)
2. Push this project to a GitHub repo (or use Vercel CLI)
3. In Vercel, click **"New Project"** → import your GitHub repo
4. Click **"Deploy"** — Vercel auto-detects Create React App
5. Done! You'll get a URL like `https://daughter-tracker.vercel.app`

### Step 6: Install on Your Phones (PWA)

**iPhone (Safari):**
1. Open the Vercel URL in Safari
2. Tap the Share button (box with arrow)
3. Tap **"Add to Home Screen"**
4. Tap **"Add"**

**Android (Chrome):**
1. Open the Vercel URL in Chrome
2. Tap the three-dot menu
3. Tap **"Add to Home screen"**

Share the same URL with Elke — both phones will see the same data in real time!

---

## How It Works

- **Shared log** — Any incident logged by you or Elke instantly appears on both phones
- **Streak tracker** — Counts consecutive days with no incidents
- **Scoreboard** — Tracks how many times each parent gets ignored
- **Show Her button** — Dramatic summary screen to show your daughter
- **Real-time** — Powered by Firebase Firestore, updates live without refresh

---

## Firestore Security Note

The default rules in `firestore.rules` allow anyone with the URL to read/write.
This is fine for a private family app. If you want to lock it down later, you can
add Firebase Authentication so only you and Elke can log in.
