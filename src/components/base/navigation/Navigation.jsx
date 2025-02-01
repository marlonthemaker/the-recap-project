import MobileNavigation from '@/src/components/base/navigation/MobileNavigation';
import { Bars3Icon } from '@heroicons/react/24/outline';


function Navigation({navigation}) {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <MobileNavigation navigation={navigation}>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </MobileNavigation>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Log in <span aria-hidden="true">→</span>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;