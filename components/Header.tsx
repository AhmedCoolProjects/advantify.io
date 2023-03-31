export function Header() {
  return (
    <header className="w-full flex flex-col items-center justify-center pt-12">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-black leading-tight hover:scale-110 transform transition-all duration-500">
        Advantify is your <span className="text-teal-400">Web3</span> partner
      </h1>
      <p className="text-lg w-11/12 md:text-xl text-center text-gray-600 mt-4">
        We are a boutique agency working with brands and artists launching a
        digital strategy in Web3 and NFT
      </p>
    </header>
  );
}
