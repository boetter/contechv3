import Link from "next/link";
import Dividers from "@/components/Dividers";
import Image from "@/components/Image";

type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-greyscale-25" hero>
        <div className="section text-center">
            <div className="container">
                <div className="label mb-4">
                    Værktøjer
                </div>
                <div className="max-w-[53.5rem] mx-auto mb-4 text-h1 xl:max-w-[40rem] xl:text-h2 md:text-h3">
                    Vi arbejder udelukkende med de bedste redskaber
                </div>
                <div className="max-w-[43.125rem] mx-auto mb-10 text-greyscale-400 md:mb-8">
                    Forløbet er en mulighed for at afprøve nogle teknologier som din arbejdsplads måske endnu ikke har indkøbt eller vurderet. Vi benytter os af de bedste SaaS-redskaber, som nemt kan overdrages til dig efter forløbet.
                </div>
                <div className="flex justify-center space-x-4 md:block md:space-x-0 md:space-y-4">
                    <Link
                        className="btn-primary min-w-[10.6rem] px-5 md:min-w-full"
                        href="https://form.jotform.com/240182473965361"
                    >
                        Send ansøgning
                    </Link>
                    <Link
                        className="btn-secondary min-w-[10.6rem] bg-greyscale-25 px-5 md:min-w-full"
                        href="https://www.youtube.com/watch?v=WYHSFGsWllE"
                    >
                        Se intro-video (5 min)
                    </Link>
                </div>
            </div>
        </div>
    </Dividers>
);

export default Main;
