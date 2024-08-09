import TradingPricingArrow from "../../assets/images/trading-pricing-arrow.svg";
import GreenCheckIcon from "../../assets/images/icons/green-check-icon.svg";
import DeployNowArrow from "../../assets/images/icons/deploy-now-arrow.svg";
import MultiMonitor from "../../assets/images/icons/multi-monitor.svg";
import Access from "../../assets/images/icons/access.svg";
import TechnicalSupport from "../../assets/images/icons/technical-support.svg";
import OperatingSystem from "../../assets/images/icons/operating-system.svg";
import Latency from "../../assets/images/icons/latency.svg";
import Network from "../../assets/images/icons/network.svg";
import MilitaryGrade from "../../assets/images/icons/military-grade.svg";
import InstantActivation from "../../assets/images/icons/instant-activation.svg";
import WorkFreeCheck from "../../assets/images/icons/work-free-check.svg";
import CheckBrokerLatencyArrow from "../../assets/images/icons/check-broker-latency-arrow.svg";
import { useState } from "react";

const TradingPricing = () => {
  const [priceUpdate, setPriceUpdate] = useState(true);

  const priceChange = (price) => {
    setPriceUpdate(price === "monthly");
  };

  return (
    <section className="bg-[#09090B] pb-[38px] pt-[50px]">
      <div className="flex items-start justify-center gap-[16px]">
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
          <button
            onClick={() => priceChange("monthly")}
            className={`price-btn ${priceUpdate ? "active" : ""} inline-flex h-[100%] w-[87px] items-center justify-center rounded-[4px] px-[12px] py-[6px] font-Inter text-[16px] font-medium text-[#A1A1AA]`}
          >
            Monthly
          </button>

          <button
            onClick={() => priceChange("yearly")}
            className={`price-btn ${!priceUpdate ? "active" : ""} inline-flex h-[100%] w-[72px] items-center justify-center rounded-[4px] px-[12px] py-[6px] font-Inter text-[16px] font-medium text-[#A1A1AA]`}
          >
            Yearly
          </button>
        </div>

        <div className="flex items-center gap-[32px]">
          <div className="w-[288px] rounded-[8px] border border-solid border-[#3F3F46] bg-[#09090B] px-[24px] pb-[29px] pt-[21px] shadow-Shadow2">
            <h4 className="font-Inter text-[18px] font-semibold leading-[28px] tracking-[-0.45px] text-[#D4D4D8]">
              VPS Lite
            </h4>

            <h6 className="text-[12px] font-medium leading-[18px] text-[#A1A1AA99] line-through">
              $40/month
            </h6>

            <h3 className="mb-[12px] mt-[6px] font-Inter text-[30px] font-bold leading-[36px] text-[#FAFAFA]">
              ${priceUpdate ? "20" : "200"}{" "}
              <span className="text-[14px] font-normal">
                /{priceUpdate ? "month" : "year"}
              </span>
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

            <div className="relative h-[40px] w-[100%]">
              <button className="relative z-[2] inline-flex h-[100%] w-[100%] items-center justify-center gap-[4px] rounded-[6px] bg-[#ffffff] font-Inter text-[14px] font-medium text-[#000000]">
                <span>Deploy Now</span> <img src={DeployNowArrow} alt="icon" />
              </button>

              <div className="absolute left-0 top-0 z-[1] h-[100%] w-[100%] rounded-[6px] bg-linearGradient1 blur-[5px]"></div>
            </div>
          </div>

          <div className="w-[303px] rounded-[8px] border border-solid border-[#FF4200] bg-[#09090B] px-[24px] pb-[33px] pt-[21px] shadow-Shadow2">
            <h4 className="font-Inter text-[18px] font-semibold leading-[28px] tracking-[-0.45px] text-[#D4D4D8]">
              VPS Max
            </h4>

            <h6 className="text-[12px] font-medium leading-[18px] text-[#A1A1AA99] line-through">
              $80/month
            </h6>

            <h3 className="mb-[12px] mt-[6px] font-Inter text-[30px] font-bold leading-[36px] text-[#FAFAFA]">
              ${priceUpdate ? "40" : "400"}{" "}
              <span className="text-[14px] font-normal">
                /{priceUpdate ? "month" : "year"}
              </span>
            </h3>

            <p className="text-[14px] font-medium leading-[20px] text-[#FFFFFF]">
              ⭐ For 5-8 automated trading strategies{" "}
              <span className="font-normal text-[#A1A1AA]">on NinjaTrader</span>
            </p>

            <ul className="mb-[53px] mt-[32px] flex flex-col gap-[8px]">
              {[
                { text: "12x AMD Epyc", innerText: "vCPU Cores" },
                { text: "32 GB", innerText: "DDR4 RAM" },
                { text: "320 GB", innerText: "NVMe Storage" },
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

            <div className="relative h-[40px] w-[100%]">
              <button className="relative z-[2] inline-flex h-[100%] w-[100%] items-center justify-center gap-[4px] rounded-[6px] bg-[#ffffff] font-Inter text-[14px] font-medium text-[#000000]">
                <span>Deploy Now</span> <img src={DeployNowArrow} alt="icon" />
              </button>

              <div className="absolute left-0 top-0 z-[1] h-[100%] w-[100%] rounded-[6px] bg-linearGradient1 blur-[5px]"></div>
            </div>
          </div>

          <div className="w-[288px] rounded-[8px] border border-solid border-[#3F3F46] bg-linearGradient2 px-[24px] pb-[29px] pt-[21px] shadow-Shadow2">
            <h4 className="font-Inter text-[18px] font-semibold leading-[28px] tracking-[-0.45px] text-[#D4D4D8]">
              VPS Ultra
            </h4>

            <h6 className="text-[12px] font-medium leading-[18px] text-[#A1A1AA99] line-through">
              $160/month
            </h6>

            <h3 className="mb-[12px] mt-[6px] font-Inter text-[30px] font-bold leading-[36px] text-[#FAFAFA]">
              ${priceUpdate ? "80" : "800"}{" "}
              <span className="text-[14px] font-normal">
                /{priceUpdate ? "month" : "year"}
              </span>
            </h3>

            <p className="text-[14px] font-medium leading-[20px] text-[#FFFFFF]">
              ⭐ For 8+ automated trading strategies{" "}
              <span className="font-normal text-[#A1A1AA]">on NinjaTrader</span>
            </p>

            <ul className="mb-[38px] mt-[32px] flex flex-col gap-[8px]">
              {[
                { text: "24x AMD Epyc", innerText: "vCPU Cores" },
                { text: "64 GB", innerText: "DDR4 RAM" },
                { text: "500 GB", innerText: "NVMe Storage" },
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

            <div className="relative h-[40px] w-[100%]">
              <button className="relative z-[2] inline-flex h-[100%] w-[100%] items-center justify-center gap-[4px] rounded-[6px] bg-[#ffffff] font-Inter text-[14px] font-medium text-[#000000]">
                <span>Deploy Now</span> <img src={DeployNowArrow} alt="icon" />
              </button>

              <div className="absolute left-0 top-0 z-[1] h-[100%] w-[100%] rounded-[6px] bg-linearGradient1 blur-[5px]"></div>
            </div>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-[32px] mt-[10px] max-w-[978px] text-[14px] font-normal leading-[22.75px] text-[#ffffff]">
        Included with your service:
      </p>

      <div className="flex justify-center gap-[20px]">
        <div className="w-[292px]">
          <h5 className="mb-[12px] text-[14px] font-semibold leading-[20px] text-[#ffffff]">
            Full-Access
          </h5>

          <ul className="flex flex-col gap-[8px]">
            {[
              { icon: MultiMonitor, text: "Multi-Monitor Support" },
              { icon: Access, text: "24/7 Access to Control Panel" },
              { icon: TechnicalSupport, text: "24/7 Technical Support" },
              {
                icon: OperatingSystem,
                text: "Windows or Linux Operating System",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="inline-flex items-center gap-[10px] text-[14px] font-normal leading-[20px] text-[#71717A]"
              >
                <img src={item.icon} alt="icon" />

                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[292px]">
          <h5 className="mb-[12px] text-[14px] font-semibold leading-[20px] text-[#ffffff]">
            High-Performance
          </h5>

          <ul className="flex flex-col gap-[8px]">
            {[
              { icon: Latency, text: "One millisecond latency" },
              { icon: Network, text: "1-10Gbps+ Network" },
              { icon: MilitaryGrade, text: "Military Grade Encryption" },
              {
                icon: InstantActivation,
                text: "Instant Activation & Deployment",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="inline-flex items-center gap-[10px] text-[14px] font-normal leading-[20px] text-[#71717A]"
              >
                <img src={item.icon} alt="icon" />

                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[292px]">
          <h5 className="mb-[12px] text-[14px] font-semibold leading-[20px] text-[#ffffff]">
            Worry-Free
          </h5>

          <ul className="flex flex-col gap-[8px]">
            <li className="inline-flex max-w-[226.67px] items-center gap-[10px] text-[14px] font-normal leading-[20px] text-[#71717A]">
              <img src={WorkFreeCheck} alt="icon" />

              <span>Daily backups, dedicated IP, no setup fee</span>
            </li>

            <li>
              <button className="inline-flex h-[40px] w-[232px] items-center justify-center gap-[20px] rounded-[6px] bg-[#171717] px-[11px] py-[10px] text-[14px] font-bold leading-[20px] text-[#ffffff]">
                <span>Check Broker Latency</span>{" "}
                <img src={CheckBrokerLatencyArrow} alt="icon" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TradingPricing;
