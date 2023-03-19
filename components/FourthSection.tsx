export function FourthSection() {
  return (
    <div className="grid px-12 py-8 grid-cols-1 sm:grid-cols-3 gap-8 w-full">
      <PartnerCard image="/images/partner-2.png" title="EGW" />
      <PartnerCard image="/images/partner-3.png" title="The Crypt Gallery" />
      <PartnerCard
        image="/images/partner-1.png"
        title="Virtual Gallery Palma"
      />
      <PartnerCard image="/images/partner-4.png" title="NFT" />
      <PartnerCard image="/images/partner-4.png" title="PayRue NFT" />
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
