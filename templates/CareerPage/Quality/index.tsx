import Image from "@/components/Image";

const items = [
    {
        title: "Du sætter tiden af",
        content:
            "At deltage i forløbet kræver at du afsætter tre fulde arbejdsdage hvor vi sammen kan udforske jeres udfordringer.",
        icon: "/images/content/icons/user-circle.svg",
    },
    {
        title: "Du arbejder for en SMV",
        content:
            "Forløbet er gratis for deltagerne, men dette forudsætter at jeres virksomhed har ansat maksimalt 250 medarbejdere.",
        icon: "/images/content/icons/award.svg",
    },
    {
        title: "Du har opbakning",
        content:
            "Undervejs i forløbet kommer vi til at arbejde med jeres virksomheds udfordringer og systemer – det forventer vi at din nærmeste leder støtter op om.",
        icon: "/images/content/icons/trophy.svg",
    },
    {
        title: "Du ønsker at ændre noget",
        content:
            "Forløbet er ikke bare et kursus. Vi kommer til at bygge prototyper der reelt kan ændre din arbejdsplads – det skal du være med på!",
        icon: "/images/content/icons/face-happy.svg",
    },
];

type QualityProps = {};

const Quality = ({}: QualityProps) => (
    <div className="pt-22 pb-30 xl:pb-24 md:py-12">
        <div className="container">
            <div className="stage">Hvem kan ansøge?</div>
            <div className="max-w-[57.5rem] mb-16 text-h3 xl:max-w-[44rem] xl:text-h4 md:mb-8">
                Vi stiller få krav til deltagere på forløbet
            </div>
            <div className="flex flex-wrap -mt-8 -mx-4 md:-mt-6 md:mx-0">
                {items.map((item, index) => (
                    <div
                        className="w-[calc(50%-2rem)] mt-8 mx-4 p-8 bg-greyscale-0 border border-greyscale-100 shadow-2 lg:p-6 md:w-full md:mt-6 md:mx-0"
                        key={index}
                    >
                        <div className="flex justify-center items-center w-12 h-12 mb-6 rounded-full bg-primary-300">
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

export default Quality;
