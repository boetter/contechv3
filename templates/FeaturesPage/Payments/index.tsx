import Dividers from "@/components/Dividers";
import Image from "@/components/Image";

const payments = [
    {
        title: "En markedsplads",
        content:
            "Nick fra GK Danmark byggede en markedsplads i værktøjet Glide, hvor medarbejdere i virksomheden nu genanvender overskudsvarer fremfor at smide dem ud.",
        image: "/images/content/payments-pic-1.webp",
    },
    {
        title: "Et arbejdsredskab",
        content:
            "Jens fra Domis K/S byggede et arbejdsredskab i værktøjet Glide, hvor servicemedarbejdere i felten nemt kan overskue deres tilbagevendende opgaver på deres ejendomme.",
        image: "/images/content/payments-pic-2.webp",
    },
    {
        title: "Et intranet",
        content:
            "Emil fra Rønslev Rådgivende Ingeniører byggede et helt intranet i værktøjet Glide, hvor virksomhedens medarbejdere kan tilgå alt fra årshjul til personalehåndbog.",
        image: "/images/content/payments-pic-3.webp",
    },
    {
        title: "Et nyt produkt",
        content:
            "Morten fra Fiberbinder byggede et helt nyt digitalt produkt i værktøjet Glide, hvor virksomhedens kunder kan lære at bruge deres nye asbestforseglingsprodukter.",
        image: "/images/content/payments-pic-4.webp",
    },
];

type PaymentsProps = {};

const Payments = ({}: PaymentsProps) => (
    <Dividers className="section bg-greyscale-25">
        <div className="container">
            <div className="mb-16 lg:mb-12 md:mb-8">
                <div className="stage">Eksempler på anvendelse af no-code i byggeriet</div>
                <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                    Apps bygget af tidligere deltagere
                </div>
                <div className="max-w-[46.6rem] text-greyscale-400">
                Det går hurtigt, når man benytter no-code platforme, hvor vi ikke skriver kode, men arbejder i en grafisk grænseflade. Eksemplerne nedenfor vises i netop det redskab, de er bygget i. Der er ingen besværlig kildekode, og apps kan derfor videreudvikles af virksomhedens egne medarbejdere.
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
