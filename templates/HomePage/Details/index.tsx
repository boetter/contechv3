import Dividers from "@/components/Dividers";
import Image from "@/components/Image";

const details = [
    {
        title: "Ansøg inden 8. marts",
        content:
            "Vi skal blot vide lidt om,  hvem du er og hvor du arbejder, så vi kan tjekke om du er kvalificeret til et gratis forløb. Og så vil vi selvfølgelig også gerne vide, hvorfor  vi netop skal vælge dig.",
        image: "/images/content/details-pic-1.webp",
    },
    {
        title: "Få svar 21. marts",
        content:
            "Blandt årets ansøgere udvælger vi  seks virksomheder. Er du nået igennem nåleøjet, får du svar d. 21. marts. For at sikre en fair udvælgelsesproces har vi sammensat en jury med gode folk fra forskellige brancheorganisationer, der repræsenterer byggeriets værdikæde på tværs.",
        image: "/images/content/details-pic-2.webp",
    },
    {
        title: "Afsæt tre arbejdsdage",
        content:
            "Forløbet foregår hos jer. I skal ikke bekymre jer om rejsetid. I stedet skal I  sikre, at I kan afsætte tre fulde arbejdsdage til forløbet og at I har blokeret kalenderen hos en eller flere, der passer beskrivelsen nedenfor.   ",
        image: "/images/content/details-pic-3.webp",
    },
];

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <Dividers className="pt-24 pb-28 bg-greyscale-25 xl:pb-24 md:py-12">
        <div className="container">
            <div className="mb-18 lg:mb-14 md:mb-10">
                <div className="stage">Forløbet</div>
                <div className="mb-4 text-h3 md:text-h4">
                Gratis, uforpligtende og overskueligt
                </div>
                <div className="max-w-[40.9rem] text-greyscale-400">
                Vi har arbejdet hårdt for at dette forløb skal skabe værdi for deltagerne og ikke drukne i evalueringer og  tunge ansøgningsprocedurer. 
                </div>
            </div>
            <div className="flex space-x-8 lg:block lg:space-x-0 lg:space-y-10 md:space-y-6">
                {details.map((item, index) => (
                    <div className="flex-1" key={index}>
                        <div className="mb-8 p-2 bg-greyscale-0 border border-greyscale-100 shadow-2 lg:mb-6">
                            <div className="border border-primary-50">
                                <Image
                                    className="w-full"
                                    src={item.image}
                                    width={345}
                                    height={230}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mb-3 text-h5 xl:text-h6 lg:text-h5 md:text-h6">
                            {item.title}
                        </div>
                        <div className="text-greyscale-400">{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </Dividers>
);

export default Details;
