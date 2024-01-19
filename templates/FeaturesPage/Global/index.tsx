import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const items = [
    {
        title: "Prototyper: Afprøv nye digitale forretningsidéer",
        content:
            "Bryd ud af PowerPoint og få bygget en prototype af jeres nye digitale idé. Test den på rigtige brugere og se, hvordan de tager imod den.",
        icon: "/images/content/icons/grid.svg",
    },
    {
        title: "Integrationer: Forbind it-systemer",
        content:
            "Integrationsprojekter er ofte dyre og besværlige, men med no-code platforme kan det være muligt at forbinde systemer, der i dag ikke taler sammen.",
        icon: "/images/content/icons/credit-card-refresh.svg",
    },
    {
        title: "Databaser: Opgradér Excel og få styr på data",
        content:
            "No-code platforme gør det legende let at opbygge selv sofistikerede databaser til alt fra vagtplaner til produktoverblik.",
        icon: "/images/content/icons/server.svg",
    },
];

type GlobalProps = {};

const Global = ({}: GlobalProps) => (
    <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12">
        <div className="container">
            <div className="flex items-center mb-14 lg:block md:mb-8">
                <div className="grow pr-10 lg:mb-10 lg:pr-0 md:mb-8">
                    <div className="max-w-[30.9rem] lg:max-w-full">
                        <div className="stage">Mulighederne uden kode</div>
                        <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                            Hvad kan løses med no-code?
                        </div>
                        <div className="mb-12 text-greyscale-400 xl:mb-10 md:mb-4">
                        No-code er særlig stærkt til udvikling af prototyper og indsamling af erfaringer på nye digitale indsatsområder.
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
                        src="/images/content/global-1.png"
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
