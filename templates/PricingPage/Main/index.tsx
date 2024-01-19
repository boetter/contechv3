import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Package from "./Package";

import { pricing } from "@/mocks/pricing";

type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-greyscale-25" hero>
        <div className="pt-20 pb-30 xl:pb-24 md:py-12">
            <div className="container">
                <div className="mb-20 text-center xl:mb-16 md:mb-8">
                    <div className="label mb-4">
                        Forløbet
                    </div>
                    <div className="mb-4 text-h1 xl:text-h2 md:text-h3">
                        Simpelt forløb med stor effekt
                    </div>
                    <div className="text-greyscale-400">
                    Vi har gjort det nemt for jeres virksomhed at få maksimal effekt med en relativt lille indsats.
                    </div>
                </div>
                <div className="flex space-x-6 lg:block lg:space-x-0 lg:space-y-8 md:space-y-6">
                    {pricing.map((item) => (
                        <Package item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    </Dividers>
);

export default Main;
