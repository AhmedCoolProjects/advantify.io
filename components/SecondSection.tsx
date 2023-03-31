import SectionTitle from "./SectionTitle";

export function SecondSection() {
  return (
    <div className="flex flex-col items-center">
      <SectionTitle firstTitle="Our" coloredTitle="Services" secondTitle="" />
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
              <li className="list-disc list-item">
                NFTs Launches & Promotions
              </li>
              <li className="list-disc list-item">Partnerships</li>
              <li className="list-disc list-item">Digital Strategy</li>
              <li className="list-disc list-item">Social Media </li>
              <li className="list-disc list-item">Content Creation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
