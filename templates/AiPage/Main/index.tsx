import Link from "next/link";
import Image from "@/components/Image";
import Companies from "@/components/Companies";

import { companiesAIDark } from "@/mocks/companies";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="py-18 pb-20 md:pt-12 md:pb-6">
        <div className="container">
            <div className="flex items-center mb-18 lg:block md:mb-6">
                <div className="grow pr-10 lg:mb-10 lg:pr-0 md:mb-8">
                    <div className="label mb-4">
                        <Image
                            className="w-4.5 mr-2 opacity-100"
                            src="/images/content/icons/credit-card-refresh.svg"
                            width={18}
                            height={18}
                            alt=""
                        />
                        AI
                    </div>
                    <div className="max-w-[32rem] mb-4 text-h1 xl:text-h2 lg:max-w-full">
                        Afprøv ChatGPT og lignende AI i din forretning
                    </div>
                    <div className="max-w-[29.6rem] mb-10 text-greyscale-400 lg:max-w-full md:mb-6">
                    Eksperimenter med hvordan generative AI værktøjer kan automatisere dele af kontorarbejdet.
                    </div>
                    <div className="flex space-x-4 md:block md:space-x-0 md:space-y-4">
                        <Link
                            className="btn-primary min-w-[10.6rem] px-5 md:min-w-full"
                            href="#"
                        >
                            Send ansøgning
                        </Link>
                    </div>
                </div>
                <div className="relative shrink-0 w-[31.25rem] p-10 bg-greyscale-25 lg:w-full md:p-6">
                    <Image
                        className="w-full border border-greyscale-100 shadow-3"
                        src="/images/content/byggebotten.png"
                        width={420}
                        height={420}
                        alt=""
                    />
                </div>
            </div>
            <Companies
                title="Du kan bl.a. lære at udnytte værktøjer såsom:"
                images={companiesAIDark}
            />
        </div>
    </div>
);

export default Main;