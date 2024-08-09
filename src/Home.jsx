import CoreFeatures from "./components/CoreFeatures/CoreFeatures";
import Hero from "./components/Hero/Hero";
import Optimize from "./components/Optimize/Optimize";
import TradingPricing from "./components/TradingPricing/TradingPricing";

const Home = () => {
  return (
    <>
      <Hero />

      <TradingPricing />

      <CoreFeatures />

      <Optimize />
    </>
  );
};

export default Home;
