import TeamHeader from './TeamHeader';
const posts = [
  {
    id: 1,
    title: 'Padres 6 final 0 Dodgers',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://midfield.mlbstatic.com/v1/team/114/spots/144',
    },
  },
  // More posts...
]

export default async function RecapExample({
  recapData,
  locale
}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the blog</h2>
          <p className="mt-2 text-lg/8 text-gray-600">{recapData[locale] || "...loading..."}</p>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <TeamHeader/>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                </div>
{
                // <div className="relative mt-8 flex items-center gap-x-4">
                //   <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                //   <div className="text-sm/6">
                //     <p className="font-semibold text-gray-900">
                //       <a href={post.author.href}>
                //         <span className="absolute inset-0" />
                //         {post.author.name}
                //       </a>
                //     </p>
                //     <p className="text-gray-600">{post.author.role}</p>
                //   </div>
                // </div>
}
                <div className="text-sm pt-4">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    View all<span className="sr-only"> {"view all"} stats</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
