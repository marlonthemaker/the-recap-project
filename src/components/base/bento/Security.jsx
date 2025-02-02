// components/bento/Security.jsx
import React from 'react';
import Image from "@/src/components/base/ui/Image";
import BentoCard from "@/src/components/base/bento/BentoCard";


const Security = () => {
    return (
        <BentoCard className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
             <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                </p>
            </div>
            <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <Image
                    className="h-[min(152px,40cqw)] object-cover"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                    alt=""
                />
            </div>
        </BentoCard>
    );
};

export default Security;