import Head from "next/head";
import {
  FifthSection,
  FirstSection,
  FourthSection,
  Header,
  SecondSection,
  ThirdSection,
} from "../components";
import ContactUs from "../components/ContactUs";
import SectionLayout from "../components/SectionLayout";

const Home = ({
  currentSection,
  setCurrentSection,
}: {
  currentSection: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Welcome | ADVANTIFY.IO</title>
      </Head>

      <main className="space-y-12">
        <SectionLayout
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          id="about">
          <Header />
        </SectionLayout>
        {/*  <FirstSection /> */}
        <SectionLayout
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          id="services">
          <SecondSection />
        </SectionLayout>
        <SectionLayout
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          id="clients">
          <ThirdSection />
        </SectionLayout>
        <SectionLayout
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          id="partners">
          <FourthSection />
        </SectionLayout>
        <SectionLayout
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          id="contact-us">
          <ContactUs />
        </SectionLayout>
      </main>
    </div>
  );
};

export default Home;
