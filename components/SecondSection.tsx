import SectionTitle from "./SectionTitle";

const firstData = [
  "Web 3 digital strategy",
  "Metaverse",
  "AR",
  "NFC",
  "White label solutions for NFT Utilities through our partners",
];

const secondData = [
  "Tokenization consultancy",
  "Influencer Marketing strategy",
  "Social Media Management",
  "Project Development including Website, Marketplace and Smart Contract development",
];

export function SecondSection() {
  return (
    <div className="flex bg-blue-200 pb-10 flex-col items-center">
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
          <div className="w-full sm:w-3/4 grid text-center items-center justify-center">
            {firstData.map((item, ind) => (
              <div
                key={ind}
                className="text-xl m-1  bg-base-200 p-2 rounded-lg">
                {item}
              </div>
            ))}
            <div className="divider text-lg">Other Services</div>
            {secondData.map((item, ind) => (
              <div key={ind} className="text-xl m-1 bg-base-200 p-2 rounded-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
