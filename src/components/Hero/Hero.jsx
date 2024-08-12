import { NavLink } from "react-router-dom";
import NinjaTraderText from "../../assets/images/ninja-trader-text.png";
import RightArrow from "../../assets/images/icons/right-arrow.svg";
import OrangeCheckIcon from "../../assets/images/icons/orange-check-icon.svg";

const Hero = () => {
  return (
    <section className="h-[577px] w-[100%]">
      <div className="container h-[100%] w-[100%] px-[20px] pb-[20px] md:px-[50px] lg:px-[80px]">
        <div className="mt-[24px] grid h-[100%] w-[100%] grid-cols-1 sm:mt-0 sm:items-center md:grid-cols-2">
          <div className="flex flex-col items-center md:block">
            <div className="max-w-[487px]">
              <h1 className="text-[40px] font-semibold leading-[39.93px] text-[#000000] sm:text-[60px] sm:leading-[70px]">
                VPS Hosting for
              </h1>

              <img
                src={NinjaTraderText}
                alt="image"
                className="mx-auto max-w-[317px] sm:max-w-[464px]"
              />
            </div>

            <p className="my-[14px] hidden max-w-[554px] text-[18px] leading-[24px] text-[#939393] lg:block">
              QuantVPS offers NinjaTrader VPS Hosting and provides traders
              high-performance compute optimized for running the NinjaTrader
              software on our Windows Server VPS
            </p>

            <NavLink className="hidden h-[51px] w-[200px] items-center justify-center gap-[8px] rounded-[8px] border border-solid border-[#000000] bg-[#000000] px-[23.96px] py-[15px] font-Inter text-[16px] font-semibold leading-[20.8px] text-[#ffffff] lg:inline-flex">
              <span>Deploy VPS</span> <img src={RightArrow} alt="icon" />
            </NavLink>

            <ul className="my-[24px] flex w-[100%] flex-col gap-[8px] sm:w-auto lg:mb-0 lg:mt-[13px]">
              {[
                "Built for NinjaTrader, 1 millisecond latency",
                "Expert support team",
                "100% uptime guarantee",
                "302,129 deployed VPS",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-[12px] text-[14px] sm:text-[16px]"
                >
                  <img src={OrangeCheckIcon} alt="icon" /> <span>{item}</span>
                </li>
              ))}
            </ul>

            <NavLink className="inline-flex h-[51px] w-[100%] items-center justify-center gap-[8px] rounded-[8px] border border-solid border-[#000000] bg-[#000000] px-[23.96px] py-[15px] font-Inter text-[16px] font-semibold leading-[20.8px] text-[#ffffff] sm:w-[358px] lg:hidden">
              <span>Deploy VPS Now</span> <img src={RightArrow} alt="icon" />
            </NavLink>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
