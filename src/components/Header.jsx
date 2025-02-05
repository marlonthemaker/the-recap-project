'use client'
import React, { useState, useEffect } from "react";
// import Link from "next/link";
import { Link } from '@/src/i18n/routing';
import {
  signInWithGoogle,
  signOut,
  onAuthStateChanged
} from "@/src/lib/firebase/auth.js";
import { addFakeRestaurantsAndReviews } from "@/src/lib/firebase/firestore.js";
import { useRouter, usePathname } from '@/src/i18n/routing';
import { firebaseConfig } from "@/src/lib/firebase/config";

export function useUserSession(initialUser) {
  const [user, setUser] = useState(initialUser);
  const router = useRouter();
  const pathName = usePathname();

  // ✅ Register Service Worker Once on Mount
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const serializedFirebaseConfig = encodeURIComponent(JSON.stringify(firebaseConfig));
      const serviceWorkerUrl = `/auth-service-worker.js?firebaseConfig=${serializedFirebaseConfig}`;

      navigator.serviceWorker
        .register(serviceWorkerUrl)
        .then((registration) => console.log("Service Worker scope:", registration.scope))
        .catch((error) => console.error("Service Worker registration failed:", error)); // ✅ Error handling
    }
  }, []);

  // ✅ Manage Auth State in a Single useEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUser(authUser);

      // ✅ Redirect to Dashboard if User is Logged In from Home Page
      if (authUser && pathName === "/") {
        router.push("/dashboard");
      }

      // ✅ Refresh Page if User Changes
      if (initialUser && initialUser.email !== authUser?.email) {
        router.refresh();
      }
    });

    return () => unsubscribe(); // ✅ Clean up listener
  }, [initialUser, pathName, router]);

  return user;
}

export default function Header({ initialUser }) {

  const user = useUserSession(initialUser);

  const handleSignOut = event => {
    event.preventDefault();
    signOut();
  };

  const handleSignIn = event => {
    event.preventDefault();
    signInWithGoogle();
  };

  return (
    <header>
      <Link href="/" className="logo">
        <img src="/friendly-eats.svg" alt="FriendlyEats" />
        Friendly Eats
      </Link>
      {user ? (
        <>
          <div className="profile">
            <p>
              <img className="profileImage" src={user.photoURL || "/profile.svg"} alt={user.email} />
              {user.displayName}
            </p>

            <div className="menu">
              ...
              <ul>
                <li>{user.displayName}</li>

                <li>
                  <Link
                    href={`/dashboard`}
                  >
                    Home Page
                  </Link>
                </li>

                <li>
                  <Link
                    href={`/recaps`}
                  >
                    All Recaps
                  </Link>
                </li>

                <li>
                  <Link
                    href={`/recap/10-06-2024/admin`}
                  >
                    Example Recap
                  </Link>
                </li>

                <li>
                  <a href="#" onClick={handleSignOut}>
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="profile"><a href="#" onClick={handleSignIn}>
          <img src="/profile.svg" alt="A placeholder user image" />
          Sign In with Google
        </a></div>
      )}
    </header>
  );
}
