import CoreFeatures from "./components/CoreFeatures/CoreFeatures";
import Faq from "./components/Faq/Faq";
import Hero from "./components/Hero/Hero";
import MoreInformation from "./components/MoreInformation/MoreInformation";
import Online from "./components/Online/Online";
import Optimize from "./components/Optimize/Optimize";
import Setup from "./components/Setup/Setup";
import TradingPricing from "./components/TradingPricing/TradingPricing";

const Home = () => {
  return (
    <>
      <Hero />

      <TradingPricing />

      <CoreFeatures />

      <Optimize />

      <Setup />

      <MoreInformation />

      <Faq />

      <Online />
    </>
  );
};

export default Home;
