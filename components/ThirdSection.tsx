import SectionTitle from "./SectionTitle";

export function ThirdSection() {
  return (
    <div className="flex flex-col items-center">
      <SectionTitle firstTitle="Our" coloredTitle="Clients" secondTitle="" />
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-3 ">
        <div className="relative flex flex-col space-y-3 items-center justify-center w-full h-full">
          <img
            src="/images/first-section-image.png"
            alt="First Section Image"
            className="object-cover w-[220px] h-[220px] rounded-full"
          />
          <h1 className="text-2xl font-semibold ">Paul Peterson</h1>
        </div>
        <div className="relative flex flex-col space-y-3 items-center justify-center w-full h-full">
          <img
            src="/images/first-section-image.png"
            alt="First Section Image"
            className="object-cover w-[220px] h-[220px] rounded-full"
          />
          <h1 className="text-2xl font-semibold ">Clas Atelier</h1>
        </div>
        <div className="relative flex flex-col space-y-3 items-center justify-center w-full h-full">
          <img
            src="/images/first-section-image.png"
            alt="First Section Image"
            className="object-cover w-[220px] h-[220px] rounded-full"
          />
          <h1 className="text-2xl font-semibold ">Lot Winther</h1>
        </div>
      </div>
    </div>
  );
}
