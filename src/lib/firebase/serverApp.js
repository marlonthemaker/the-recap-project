// enforces that this code can only be called on the server
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
import "server-only";

import { headers } from "next/headers";
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { initializeServerApp } from "firebase/app";


import { firebaseConfig } from "./config";
import { getAuth } from "firebase/auth";

let firebaseApp;
if (getApps().length === 0) {
    console.log("Initializing Firebase app in serverApp.js");
    firebaseApp = initializeApp(firebaseConfig);
} else {
    console.log("Using existing Firebase app in serverApp.js");
    firebaseApp = getApps()[0];
}

export async function getAuthenticatedAppForUser() {
    const idToken = headers().get("Authorization")?.split("Bearer ")[1];
    const firebaseServerApp = initializeServerApp(firebaseConfig, {
      idToken,
    });

  const auth = getAuth(firebaseServerApp);
  await auth.authStateReady();

  return { firebaseApp, firebaseServerApp, currentUser: auth.currentUser };
}