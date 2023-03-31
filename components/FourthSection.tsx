import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function FourthSection() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="mt-12" >
      <Slider {...settings}>
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
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={title}
          className="object-contain w-full max-h-[250px] "
        />
      </figure>
      <div className="card-body !text-center">
        <h2 className="w-full text-3xl font-semibold text-center">{title}</h2>
      </div>
    </div>
  );
}
