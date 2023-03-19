export function ThirdSection() {
  return (
    <div className="grid gap-8 grid-cols-1 mt-12 px-12 sm:grid-cols-2 ">
      <div className="relative flex flex-col space-y-3 items-center justify-center w-full h-full">
        <img
          src="/images/first-section-image.png"
          alt="First Section Image"
          className="object-cover h-full w-2/3"
        />
        <h1 className="text-4xl font-semibold ">Paul Peterson</h1>
      </div>
      <div className="relative flex flex-col space-y-3 items-center justify-center w-full h-full">
        <img
          src="/images/first-section-image.png"
          alt="First Section Image"
          className="object-cover h-full w-2/3"
        />
        <h1 className="text-4xl font-semibold ">Lot Winther</h1>
      </div>
    </div>
  );
}
