import RecapAdmin from "@/src/components/base/recap/RecapAdmin"
export default async function RecapAdminPage({ params }) {
  const id = (await params).id
  console.log('id', id)
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RecapAdmin/>
      </div>
    </div>
  )
}