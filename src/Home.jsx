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

      <div className="hidden lg:block">
        <Optimize />
      </div>

      <Setup />

      <div className="hidden md:block">
        <MoreInformation />
      </div>

      <Faq />

      <div className="hidden md:block">
        <Online />
      </div>
    </>
  );
};

export default Home;
