import MobileFriendly from '@/src/components/base/bento/MobileFriendly';
import Performance from '@/src/components/base/bento/Performance';
import Security from '@/src/components/base/bento/Security';
import PowerfulApis from '@/src/components/base/bento/PowerfulApis';
import SectionHeading from '@/src/components/base/ui/SectionHeading';

const Home = () => {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <SectionHeading title="Deploy faster" subtitle="Everything you need to deploy your app" />
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                   <MobileFriendly/>
                    <Performance/>
                    <Security/>
                    <PowerfulApis/>
                </div>
            </div>
        </div>
    );
};

export default Home;