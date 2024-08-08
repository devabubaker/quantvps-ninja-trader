import { NavLink } from "react-router-dom";
import NinjaTraderText from "../../assets/images/ninja-trader-text.png";
import RightArrow from "../../assets/images/icons/right-arrow.svg";
import OrangeCheckIcon from "../../assets/images/icons/orange-check-icon.svg";

const Hero = () => {
  return (
    <section className="h-[577px] w-[100%]">
      <div className="container h-[100%] w-[100%] px-[80px] pb-[20px]">
        <div className="grid h-[100%] w-[100%] grid-cols-2 items-center">
          <div>
            <div className="max-w-[487px]">
              <h1 className="text-[60px] font-semibold leading-[70px] text-[#000000]">
                VPS Hosting for
              </h1>

              <img
                src={NinjaTraderText}
                alt="image"
                className="mx-auto max-w-[464px]"
              />
            </div>

            <p className="my-[14px] max-w-[554px] text-[18px] leading-[24px] text-[#939393]">
              QuantVPS offers NinjaTrader VPS Hosting and provides traders
              high-performance compute optimized for running the NinjaTrader
              software on our Windows Server VPS
            </p>

            <NavLink className="inline-flex h-[51px] w-[200px] items-center justify-center gap-[8px] rounded-[8px] border border-solid border-[#000000] bg-[#000000] px-[23.96px] py-[15px] font-Inter text-[16px] font-semibold leading-[20.8px] text-[#ffffff]">
              <span>Deploy VPS</span> <img src={RightArrow} alt="icon" />
            </NavLink>

            <ul className="mt-[13px] flex flex-col gap-[8px]">
              {[
                "Built for NinjaTrader, 1 millisecond latency",
                "Expert support team",
                "100% uptime guarantee",
                "302,129 deployed VPS",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-[12px]">
                  <img src={OrangeCheckIcon} alt="icon" /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
