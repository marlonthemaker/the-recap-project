'use client'
// import Image from 'next/image'
import React, { useState, useEffect } from "react";
import { Link } from '@/src/i18n/routing';
import MobileNavigation from '@/src/components/base/navigation/MobileNavigation';
import { Bars3Icon } from '@heroicons/react/24/outline';
import {
  signInWithGoogle,
  signOut,
  onAuthStateChanged
} from "@/src/lib/firebase/auth.js";
import { useUserSession } from '../../Header';


function Navigation({
  navigation,
  initialUser
}) {
  const user = useUserSession(initialUser);
  console.log('user', user);
  const handleSignOut = event => {
    event.preventDefault();
    signOut();
  };
// const router = useRouter();

  const handleSignIn = event => {
    event.preventDefault();
    signInWithGoogle();
  };
  
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="/recapper.svg"
              className="h-18 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <MobileNavigation navigation={navigation}>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </MobileNavigation>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
              {item.name}
            </Link>
          ))}
        </div>
{user ?
( <div className="hidden lg:flex lg:flex-1 lg:justify-end">
  <a href="#" onClick={handleSignOut} className="text-sm/6 font-semibold text-gray-900">
    Sign Out<span aria-hidden="true">→</span>
  </a>
</div> ) :
( <div className="hidden lg:flex lg:flex-1 lg:justify-end">
  <a href="#" onClick={handleSignIn} className="text-sm/6 font-semibold text-gray-900">
    Sign Up with Google<span aria-hidden="true">→</span>
  </a>
</div> )
}


      </nav>
    </header>
  );
}

export default Navigation;