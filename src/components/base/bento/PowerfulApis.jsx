import CodeSnippet from "@/src/components/base/ui/CodeSnippet";
import BentoCard from "@/src/components/base/bento/BentoCard";

const PowerfulApis = () => {
    return (
       <BentoCard className="relative lg:row-span-2 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]">
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                </p>
            </div>
            <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                            <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                NotificationSetting.jsx
                            </div>
                            <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                        </div>
                    </div>
                    <div className="px-6 pb-14 pt-6">
                        {/* Your code example */}
                    </div>
                </div>
            </div>
       </BentoCard>
    );
};

export default PowerfulApis;