import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const items = [
    {
        title: "Tekst: Lad altid AI skrive første udkast",
        content:
            "De store sprogmodeller er overlegne til at skrive et første udkast, så du kan komme flyvende i gang med eksempelvis tilbudsskrivning.",
        icon: "/images/content/icons/docs/file-check.svg",
    },
    {
        title: "Billeder: AI kan være din fotograf eller illustrator",
        content:
            "Værktøjer som Midjourney kan skabe syntetiske fotografer eller illustrationer der kan sætte fart på den tidlige fase af byggeriet.",
        icon: "/images/content/icons/docs/data.svg",
    },
    {
        title: "Softwareudvikling: Skriv kode uden at skrive selv",
        content:
            "På samme måde som ChatGPT er overlegen til at forstå alverdens sprog, findes der specialiserede modeller, der kan skrive kildekode og optimere din softwareudvikling.",
        icon: "/images/content/icons/docs/code-browser.svg",
    },
];

type GlobalProps = {};

const Global = ({}: GlobalProps) => (
    <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12">
        <div className="container">
            <div className="flex items-center mb-14 lg:block md:mb-8">
                <div className="grow pr-10 lg:mb-10 lg:pr-0 md:mb-8">
                    <div className="max-w-[30.9rem] lg:max-w-full">
                        <div className="stage">Mulighederne med Generativ AI</div>
                        <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                            Hvor skal vi starte?
                        </div>
                        <div className="mb-12 text-greyscale-400 xl:mb-10 md:mb-4">
                        Generativ AI er en massebetegnelse for maskiner der kan generere nyt materiale og "tænke" kreativt. Det rammer alle redskaber, men de lavest hængende frugter er på tekst, billede og softwareudvikling.
                        </div>
                        <Link
                            className="btn-primary pr-5.5 md:w-full"
                            href="/tools"
                        >
                            <span>Læs mere om værktøjerne</span>
                            <Icon className="w-5 h-5" name="arrow-right" />
                        </Link>
                    </div>
                </div>
                <div className="shrink-0 w-[31.25rem] bg-greyscale-25 border border-greyscale-100 lg:w-full">
                    <Image
                        src="/images/content/robot.webp"
                        className="w-full"
                        width={500}
                        height={450}
                        alt=""
                    />
                </div>
            </div>
            <div className="flex space-x-8 lg:block lg:space-x-0 lg:space-y-6">
                {items.map((item, index) => (
                    <div
                        className="flex-1 p-6 bg-greyscale-0 border border-greyscale-100 shadow-2"
                        key={index}
                    >
                        <div className="flex justify-center items-center w-12 h-12 mb-6 rounded-full bg-secondary-0">
                            <Image
                                src={item.icon}
                                className="w-6"
                                width={24}
                                height={24}
                                alt=""
                            />
                        </div>
                        <div className="mb-3 text-h6">{item.title}</div>
                        <div className="text-greyscale-400">{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Global;
