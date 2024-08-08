import TradingPricingArrow from "../../assets/images/trading-pricing-arrow.svg";
import GreenCheckIcon from "../../assets/images/icons/green-check-icon.svg";
import DeployNowArrow from "../../assets/images/icons/deploy-now-arrow.svg";

const TradingPricing = () => {
  return (
    <section className="h-[1000px] bg-[#09090B] pb-[20px] pt-[50px]">
      <div className="mx-auto flex max-w-[450px] items-start justify-center gap-[16px]">
        <div>
          <img src={TradingPricingArrow} alt="vector" />
        </div>

        <div>
          <h3 className="text-[40px] font-extrabold leading-[40px] tracking-[-1px] text-[#ECECEC]">
            Trading VPS Pricing
          </h3>

          <h5 className="font-Inter text-[20px] font-normal leading-[28px] text-[#FAFAFA]">
            Choose the plan that's right for you
          </h5>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-[38px] mt-[24px] flex h-[48px] w-[175px] items-center justify-between rounded-[6px] bg-[#27272A] px-[8px] py-[6px]">
          <button className="inline-flex h-[100%] w-[87px] items-center justify-center rounded-[4px] bg-[#09090B] px-[12px] py-[6px] font-Inter text-[16px] font-medium text-[#FAFAFA]">
            Monthly
          </button>

          <button className="inline-flex h-[100%] w-[72px] items-center justify-center rounded-[4px] px-[12px] py-[6px] font-Inter text-[16px] font-medium text-[#A1A1AA]">
            Yearly
          </button>
        </div>

        <div>
          <div className="h-[480px] w-[288px] rounded-[8px] border border-solid border-[#3F3F46] bg-[#09090B] px-[24px] pb-[29px] pt-[16px]">
            <h4 className="font-Inter text-[18px] font-semibold leading-[28px] tracking-[-0.45px] text-[#D4D4D8]">
              VPS Lite
            </h4>

            <h6 className="text-[12px] font-medium leading-[18px] text-[#A1A1AA99] line-through">
              $40/month
            </h6>

            <h3 className="mb-[12px] mt-[6px] font-Inter text-[30px] font-bold leading-[36px] text-[#FAFAFA]">
              $20 <span className="text-[14px] font-normal">/month</span>
            </h3>

            <p className="text-[14px] font-medium leading-[20px] text-[#FFFFFF]">
              ⭐ For 3-5 automated trading strategies{" "}
              <span className="font-normal text-[#A1A1AA]">on NinjaTrader</span>
            </p>

            <ul className="mb-[38px] mt-[32px] flex flex-col gap-[8px]">
              {[
                { text: "8x AMD Epyc", innerText: "vCPU Cores" },
                { text: "16 GB", innerText: "DDR4 RAM" },
                { text: "160 GB", innerText: "NVMe Storage" },
                { text: "Windows or Linux", innerText: "OS" },
                { text: "Chicago or New York", innerText: "Location" },
                { text: "Instant", innerText: "Activation" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-[8px]">
                  <img src={GreenCheckIcon} alt="icon" />

                  <div className="font-Geist text-[14px] font-medium leading-[21px] text-[#D4D4D8]">
                    {item.text}{" "}
                    <span className="text-[#AAA2A2]">{item.innerText}</span>
                  </div>
                </li>
              ))}
            </ul>

            <button className="inline-flex h-[40px] w-[100%] items-center justify-center gap-[4px] rounded-[6px] bg-[#ffffff] font-Inter text-[14px] font-medium text-[#000000]">
              <span>Deploy Now</span> <img src={DeployNowArrow} alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingPricing;
