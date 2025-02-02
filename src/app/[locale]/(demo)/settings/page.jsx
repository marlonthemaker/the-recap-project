import RecapSettings from '@/src/components/base/recap/RecapSettings';
export default async function SettingsPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RecapSettings/>
      </div>
    </div>
  )
}