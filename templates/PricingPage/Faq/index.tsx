import Link from "next/link";
import Dividers from "@/components/Dividers";
import FaqItem from "@/components/FaqItem";
import Icon from "@/components/Icon";

import { faqPricing } from "@/mocks/faq";

type FaqProps = {};

const Faq = ({}: FaqProps) => (
    <Dividers className="section">
        <div className="container max-w-[69rem]">
            <div className="max-w-[50.75rem] mx-auto mb-20 text-center xl:mb-16 md:mb-8">
                <div className="mb-4 text-h3 xl:text-h4">
                Ofte stillede spørgsmål (FAQ)
                </div>
                <div className="text-greyscale-400">
                Du er altid velkommen til at kontakte os, men måske har vi allerede svaret på dit spørgsmål her.
                </div>
            </div>
            <div className="space-y-3">
                {faqPricing.map((item) => (
                    <FaqItem item={item} key={item.id} />
                ))}
            </div>

        </div>
    </Dividers>
);

export default Faq;
