import RecapHeader from '@/src/components/base/heros/RecapHeader';
import RecapGameCard from '@/src/components/base/recap/RecapGameCard';
import RecapExample from '@/src/components/base/recap/RecapExample';
export default async function RecapPage({ params }) {
  const id = (await params).id
  console.log('id', id)
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RecapExample/>
        <RecapGameCard/>
      </div>
    </div>
  )
}