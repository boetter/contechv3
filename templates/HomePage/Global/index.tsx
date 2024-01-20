import Image from "@/components/Image";

const items = [
    {
        title: "Virksomheder har deltaget",
        value: "13",
    },
    {
        title: "Ville anbefale andre at deltage",
        value: "85%",
    },
    {
        title: "Vurderer de har fået meget stor værdi af forløbet",
        value: "92%",
    },
];

type GlobalProps = {};

const Global = ({}: GlobalProps) => (
    <div className="flex lg:block">
        <div className="w-1/2 px-20 py-32 bg-secondary-300 2xl:py-28 2xl:px-8 xl:py-20 lg:w-full lg:pt-24 lg:px-12 md:pt-12 md:px-6 md:pb-9">
            <div className="max-w-[35rem] ml-auto lg:max-w-full">
                <div className="stage text-primary-300">Deltagerne</div>
                <div className="mb-4 text-h2 text-greyscale-0 xl:text-h3 md:text-h4">
                Vi leder efter nysgerrige sjæle, der ikke er bange for nye digitale muligheder
                </div>
                <div className="mb-17 text-white/70 xl:mb-12 md:mb-8">
                Forløbet er ikke for programmører, IT-medarbejdere eller ledere. Vi har  fokus på at gøre en forskel for alle dem, der eksempelvis  bygger digitale løsninger i Excel for at få hverdagen til at hænge sammen – uden  nødvendigvis at have IT som hovedbeskæftigelse.

Vi arbejder med dem, der uanset uddannelsesbaggrund, kan lide at arbejde digitalt og er nysgerrige på nye måder at gøre tingene.
                </div>


                
                <div className="flex -mx-7 2xl:-mx-5 md:block md:mx-0">
                    {items.map((item, index) => (
                        <div
                            className="grow px-7 border-r border-white/10 last:border-0 2xl:px-5 md:mb-4 md:px-0 md:pb-4 md:border-b md:border-r-0 md:last:mb-0 md:last:pb-0 md:last:border-b-0"
                            key={index}
                        >
                            <div className="mb-2 text-h5 text-primary-300 xl:text-h6 lg:text-h5 md:text-h6">
                                {item.value}
                            </div>
                            <div className="text-lg text-white/70 xl:text-base lg:text-lg">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="flex w-1/2 bg-secondary-300 lg:w-full lg:aspect-[1.2] md:aspect-square">
            <div className="relative w-full max-w-[45rem] h-full mx-auto">
                <Image
                    className="object-cover"
                    src="/images/content/boetter.webp"
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    alt=""
                />
            </div>
        </div>
    </div>
);

export default Global;
