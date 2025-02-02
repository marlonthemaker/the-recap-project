// components/bento/Performance.jsx
import React from 'react';
import Image from "@/src/components/base/ui/Image";
import BentoCard from "@/src/components/base/bento/BentoCard";

const Performance = () => {
    return (
        <BentoCard className="relative max-lg:row-start-1 max-lg:rounded-t-[2rem]">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                </p>
            </div>
            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                    className="w-full max-lg:max-w-xs"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                    alt=""
                />
            </div>
        </BentoCard>
    );
};

export default Performance;