const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function DesktopNavigation() {
  return (
      <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                  {item.name}
              </a>
          ))}
      </div>
  );
}