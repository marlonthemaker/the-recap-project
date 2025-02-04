import RecapAdmin from "@/src/components/base/recap/RecapAdmin"
import {getLocale} from 'next-intl/server';
import { getSchedule } from "@/src/lib/preloaders";

export default async function RecapAdminPage({ params }) {
  const id = (await params).id
  const locale = await getLocale();
  const gamesToday = await getSchedule(id);
  console.log('id', id)
  console.log('locale', locale)
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RecapAdmin data={gamesToday} />
      </div>
    </div>
  )
}