import Dividers from "@/components/Dividers";
import Image from "@/components/Image";

const payments = [
    {
        title: "Interne agenter",
        content:
            "Byggeriets SMV'er skal i gang med at oplære interne autonome agenter, der kan løse klart definerede og afgrænsede opgaver, såsom at skrive udkast til tilbud eller pressemeddelelser.",
        image: "/images/content/ai-pic-1.webp",
    },
    {
        title: "Kundeservicerobotter",
        content:
            "Robotter drevet af store sprogmodeller kan assistere eller helt overtage dialogen med kunder ved at lære hvordan netop din virksomhed kommunikerer.",
        image: "/images/content/ai-pic-2.webp",
    },
    {
        title: "Generelle modeller",
        content:
            "Generelle modeller som ChatGPT kan løfte arbejdshastigheden på kontorarbejde med 20-40%, og det er derfor på høje tid at komme i gang, hvis I ikke allerede er ombord.",
        image: "/images/content/ai-pic-3.webp",
    },
    {
        title: "Forædling af data",
        content:
            "Byggeriet har masser af data om tidligere projekter, materialer og meget andet. Med Generativ AI kan vi forbedre vores data og sætte data i spil som tidligere har været for dyrt eller besværligt.",
        image: "/images/content/ai-pic-4.webp",
    },
];

type PaymentsProps = {};

const Payments = ({}: PaymentsProps) => (
    <Dividers className="section bg-greyscale-25">
        <div className="container">
            <div className="mb-16 lg:mb-12 md:mb-8">
                <div className="stage">Eksempler på anvendelse af Generativ AI i byggeriet</div>
                <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                    Hvordan kan AI påvirke vores arbejde?
                </div>
                <div className="max-w-[46.6rem] text-greyscale-400">
                Generativ AI omtales som den største og mest transformative teknologi siden elektricitetens opfindelse. Hver eneste dag udkommer nye redskaber, der kan automatisere dele af kontorarbejdet. Tilmeld dig vores forløb for at afprøve, hvordan det vil påvirke netop jeres arbejdsplads at implementere AI-løsninger.
                </div>
            </div>
            <div className="flex flex-wrap -mt-6 -mx-3 lg:block lg:m-0 lg:space-y-8 md:space-y-6">
                {payments.map((item, index) => (
                    <div
                        className={`flex flex-col justify-between mt-6 mx-3 p-4 shadow-2 bg-greyscale-0 border border-greyscale-100 lg:m-0 ${
                            index === 1 || index === 2
                                ? "flex flex-col-reverse w-[calc(41%-1.5rem)] lg:w-full"
                                : "w-[calc(59%-1.5rem)] lg:w-full"
                        }`}
                        key={index}
                    >
                        <div
                            className={`p-2 ${
                                index === 1 || index === 2 ? "mt-6" : "mb-6"
                            }`}
                        >
                            <div className="mb-3 text-h6">{item.title}</div>
                            <div className="text-lg text-greyscale-400">
                                {item.content}
                            </div>
                        </div>
                        <div className="bg-greyscale-25 border border-greyscale-100">
                            <Image
                                className="w-full"
                                src={item.image}
                                width={644}
                                height={250}
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Dividers>
);

export default Payments;
