import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "./SectionTitle";

export function FourthSection() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="mt-12 w-full flex flex-col items-center">
      <SectionTitle firstTitle="Our" coloredTitle="Partners" secondTitle="" />

      <Slider className="h-fit  w-11/12" {...settings}>
        <PartnerCard image="/images/partner-2.png" title="EGW" />
        <PartnerCard image="/images/partner-3.png" title="The Crypt Gallery" />
        <PartnerCard
          image="/images/partner-1.png"
          title="Virtual Gallery Palma"
        />
        <PartnerCard image="/images/partner-4.png" title="NFT" />
        <PartnerCard image="/images/partner-4.png" title="PayRue NFT" />
      </Slider>
    </div>
  );
}

function PartnerCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="card m-2 card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={title}
          className="object-contain w-full max-h-[100px] "
        />
      </figure>
      <div className="card-body !text-center">
        <h2 className="w-full text-xl font-semibold text-center">{title}</h2>
      </div>
    </div>
  );
}
