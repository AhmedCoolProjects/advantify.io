import Image from "next/image";

export function FirstSection() {
  return (
    <div className="grid gap-8 grid-cols-1 mt-12 px-12 sm:grid-cols-2 ">
      <div className="relative w-full h-full">
        <img
          src="/images/first-section-image.png"
          alt="First Section Image"
          className="object-contain h-full w-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-11/12 sm:w-3/4 flex flex-col text-center items-center justify-center">
          <h1 className="capitalize mb-8 font-bold text-5xl">
            Infinite Fashion
          </h1>
          <p className="text-2xl">
            Advantify.io is a boutique agency working with brands, artists and
            creators launching and establishing a digital strategy utilizing new
            technologies such as Web3 and NFT
          </p>
        </div>
      </div>
    </div>
  );
}
