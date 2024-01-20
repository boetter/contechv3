import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { navigationFooter } from "@/constants/navigation";
import { socials } from "@/constants/socials";

type FooterProps = {};

const Footer = ({}: FooterProps) => (
    <div className="mt-auto py-16 md:pt-12 md:pb-6">
        <div className="container">
            <div className="flex mb-18 lg:block lg:mb-14 md:mb-8">
                <Link className="block w-23 mr-auto lg:mb-12 md:mb-8" href="/">
                    <Image
                        className="w-full opacity-100"
                        src="/images/logo-dark.svg"
                        width={103}
                        height={38}
                        alt=""
                    />
                </Link>
                
            </div>
            <div className="flex justify-between items-center md:block md:pt-8 md:border-t md:border-greyscale-200">
                <div className="flex items-center text-lg text-[#666D80] md:justify-center md:mb-4">

                    Har du spørgsmål? Kontakt Annelise på alh@molio.dk eller telefon 2174 3132.
                </div>
                <div className="flex space-x-4 md:justify-center">
                    {socials.map((social) => (
                        <a
                            className="group text-0"
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={social.id}
                        >
                            <Icon
                                className="fill-[#666D80] transition-colors group-hover:fill-primary-100 md:w-5 md:h-5"
                                name={social.icon}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
