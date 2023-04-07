import SectionTitle from "./SectionTitle";

export function SecondSection() {
  return (
    <div className="flex flex-col items-center">
      <SectionTitle
        firstTitle="Our Umbrella"
        coloredTitle="Of Services"
        secondTitle=""
      />
      <div className="grid gap-8 grid-cols-1 mt-12 px-12 sm:grid-cols-2 ">
        <div className="relative flex flex-column items-center justify-center w-full h-full">
          <img
            src="/images/first-section-image.png"
            alt="First Section Image"
            className="object-contain h-full w-3/4"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full sm:w-3/4 flex flex-col text-center sm:text-left items-center justify-center">
            <ul className="text-2xl ">
              <li className="list-disc list-item">Web 3 digital strategy</li>
              <li className="list-disc list-item">Metaverse</li>
              <li className="list-disc list-item">AR technology</li>
              <li className="list-disc list-item">NFC technology</li>
              <li className="list-disc list-item">
                White label solutions for NFT Utilities through our partners
              </li>
              <li className="ml-[-32px] my-1">Other services:</li>
              <li className="list-disc list-item">Tokenization consultancy</li>
              <li className="list-disc list-item">
                Influencer Marketing strategy
              </li>
              <li className="list-disc list-item">Social Media Manegment</li>
              <li className="list-disc list-item">
                Project Development including Website, Marketplace,
                smartcontract development
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
