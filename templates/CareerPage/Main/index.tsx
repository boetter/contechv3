import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Companies from "@/components/Companies";

import { companiesHeroPart } from "@/mocks/companies";

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => {
    return (
        <Dividers className="bg-greyscale-25" hero>
            <div className="py-16 md:pt-12 md:pb-6">
                <div className="container">
                    <div className="mb-16 lg:mb-12 md:mb-8">
                        <div className="label mb-4 ">Deltagere</div>
                        <div className="max-w-[53.13rem] mb-4 text-h1 xl:max-w-[43rem] xl:text-h2 md:text-h3">
                        Mener du også, digitalisering bør gøre større nytte i byggeriet?
                        </div>
                        <div className="max-w-[46.63rem] mb-10 text-greyscale-400 md:mb-6 md:text-lg">
                        Byggeriet er en af Danmarks mindst digitaliserede brancher, men der findes tusindvis af dygtige folk, der godt ved, at digitalisering  kan gøre en forskel. Dem ønsker vi med dette forløb at løfte, så de selv bliver i stand til at bygge prototyper og afprøve deres idéer.
                        </div>
                    </div>
                    <div className="mb-16 md:mb-6">
                        <Image
                            className="w-full lg:aspect-[1.3] lg:object-cover"
                            src="/images/content/career-pic.webp"
                            width={1160}
                            height={620}
                            alt=""
                        />
                    </div>
                    <Companies
                        title="Tidligere deltagere tæller bl.a."
                        images={companiesHeroPart}
                    />
                </div>
            </div>
        </Dividers>
    );
};

export default Main;
