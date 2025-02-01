import RestaurantListings from "@/src/components/RestaurantListings.jsx";
import { getRestaurants } from "@/src/lib/firebase/firestore.js";
import { getAuthenticatedAppForUser } from "@/src/lib/firebase/serverApp.js";
import { getFirestore } from "firebase/firestore";
import {getTranslations} from 'next-intl/server';
// Force next.js to treat this route as server-side rendered
// Without this line, during the build process, next.js will treat this route as static and build a static HTML file for it

export const dynamic = "force-dynamic";

// This line also forces this route to be server-side rendered
// export const revalidate = 0;

export default async function Home({ searchParams }) {
	// Using seachParams which Next.js provides, allows the filtering to happen on the server-side, for example:
	// ?city=London&category=Indian&sort=Review
	const {firebaseServerApp} = await getAuthenticatedAppForUser();
	const restaurants = await getRestaurants(getFirestore(firebaseServerApp), searchParams);
  const t = await getTranslations('HomePage');
	return (
		<main className="main__home">
        <h1 className="text-3xl font-bold underline">
          {t('title')}
        </h1>
		</main>
	);
}
