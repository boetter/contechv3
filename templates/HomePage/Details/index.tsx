import Dividers from "@/components/Dividers";
import Image from "@/components/Image";

const details = [
    {
        title: "Ansøg på 5 minutter",
        content:
            "Vi har brug for at vide hvem du er og hvor du arbejder for at være sikker på at du er kvalificeret til et gratis forløb. Derudover ønsker vi blot at vide hvorfor vi netop skal vælge dig.",
        image: "/images/content/details-pic-1.jpg",
    },
    {
        title: "Få svar 1. marts",
        content:
            "Der udvælges seks deltagere blandt alle ansøgere og vi giver svar d. 1. marts om du kom gennem nåleøjet. Deltagerne udvælges af repræsentanter fra Danske Ark, DI Byggeri, We Build Denmark, FRI, BLOXHUB, TEKNIQ, Bygherreforeningen og ConTech Lab.",
        image: "/images/content/details-pic-2.jpg",
    },
    {
        title: "Afsæt tre arbejdsdage",
        content:
            "Deltagerne forventes at afsætte tre fulde arbejdsdage til forløbet som foregår hos jer. Der er derfor ingen rejsetid og alt er skræddersyet netop til jeres behov.",
        image: "/images/content/details-pic-3.jpg",
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
                Vi har arbejdet hårdt for at dette forløb skal skabe værdi for deltagerne og ikke drukne dem i evalueringer eller tunge ansøgningsprocedurer.
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
