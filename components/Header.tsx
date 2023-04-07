import Lottie from "react-lottie";
import NFTAnimation from "./lotties/nft-non-fungible-token-trade.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: NFTAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const doneList = ["Seamless", "Immersive", "Spotless", "Bring up to date"];

export function Header() {
  return (
    <header className="grid gap-4 my-4 md:my-12 grid-cols-1 md:grid-cols-2">
      <div className="w-full p-4 flex flex-col items-left justify-center pt-12">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-black leading-tight ">
          Advantify is your <br />
          <span className="text-teal-400">Web3</span> partner
        </h1>
        <p className="text-lg w-11/12 md:text-xl text-left text-gray-600 mt-4">
          We are a boutique agency working with brands and artists launching a
          digital strategy in Web3 and NFT
        </p>
        <ul className="ml-6 mt-6">
          {doneList.map((item, index) => (
            <li
              key={index}
              className="my-1 flex flex-row items-center space-x-2 text-xl">
              <img
                src="/icons/done.svg"
                className="h-8 w-8 object-contain"
                alt="Done Icon"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
      </div>
    </header>
  );
}
