import React, { useEffect } from "react";

interface Props {
  id: string;
  children: React.ReactNode;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
  currentSection: string;
}

const SectionLayout: React.FC<Props> = ({
  id,
  children,
  setCurrentSection,
  currentSection,
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(`#${id}`) as HTMLElement;
      const sectionTop = section.offsetTop - 65;
      const sectionBottom = section.offsetTop + section.offsetHeight;
      const windowTop = window.scrollY;
      const windowBottom = window.scrollY + window.innerHeight;
      const sectionHeightHalf = (sectionBottom - sectionTop) / 3;
      const sectionMiddle = sectionTop + (sectionBottom - sectionTop) / 3;
      const minRange = windowTop - sectionHeightHalf;
      const maxRange = windowTop + sectionHeightHalf;
      if (
        sectionMiddle < windowBottom &&
        sectionMiddle > windowTop &&
        id === "how_it_work"
      ) {
        setCurrentSection(id);
      }
      if (
        sectionTop < maxRange &&
        sectionTop > minRange &&
        id !== "how_it_work"
      ) {
        setCurrentSection(id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <section id={id}>{children}</section>;
};

export default SectionLayout;
