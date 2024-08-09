import CoreFeatures from "./components/CoreFeatures/CoreFeatures";
import Hero from "./components/Hero/Hero";
import TradingPricing from "./components/TradingPricing/TradingPricing";

const Home = () => {
  return (
    <>
      <Hero />

      <TradingPricing />

      <CoreFeatures />
    </>
  );
};

export default Home;
