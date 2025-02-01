import Button from "@/src/components/base/utils/Button";

function LandingHero() {
    return (
        <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                        Data to enrich your online business
                    </h1>
                    <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                        sunt amet
                        fugiat veniam occaecat.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button href="#" variant="primary">Get started</Button>
                        <Button href="#">Learn more <span aria-hidden="true">→</span></Button>
                    </div>
                </div>
                <div className="mt-16 flow-root sm:mt-24">
                    <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <img
                            alt="App screenshot"
                            src="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
                            width={2432}
                            height={1442}
                            className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingHero;