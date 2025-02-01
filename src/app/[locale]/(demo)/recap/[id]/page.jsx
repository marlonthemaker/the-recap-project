export default async function RecapPage({ params }) {
  const id = (await params).id
  console.log('id', id)
  return <div>My Post: {id}</div>
}