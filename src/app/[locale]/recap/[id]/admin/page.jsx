export default async function Page({ params }) {
  const id = (await params).id
  console.log('id', id)
  return <div>My Admin Post: {id}</div>
}