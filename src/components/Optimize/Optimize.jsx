import CustomerExperts from "../../assets/images/customer-experts.png.png";
import TrustPilot from "../../assets/images/trust-pilot.png";
import ReviewsUnderline from "../../assets/images/reviews-underline.svg";

const Optimize = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="container px-[80px]">
        <div className="bg-[#FFFFFF] p-[20px]">
          <div className="relative h-[164px] w-[100%] overflow-hidden rounded-[10px] bg-[#15141A] px-[30px] pt-[38px]">
            <div className="flex justify-between">
              <div className="w-[404px]">
                <h6 className="text-[16px] font-normal leading-[24px] text-[#FF4200]">
                  High-Performance Trading Servers
                </h6>

                <h4 className="text-[28px] font-semibold leading-[36px] text-[#ffffff]">
                  Optimize Your Execution
                </h4>
              </div>

              <div className="w-[808px]">
                <p className="max-w-[776px] text-[14px] font-normal leading-[24px] text-[#ffffff]">
                  We provide the pinnacle of trading servers. Built and operated
                  by quantitative, high-frequency traders, we understand the
                  ins-and-outs of algorithmic trading. We have endured the
                  concerns and painpoints that hinder your performance.{" "}
                  <strong className="font-bold italic">
                    Optimize your execution.
                  </strong>
                </p>
              </div>
            </div>

            <div className="flex w-[330px] items-center justify-center">
              <img src={CustomerExperts} alt="image" className="max-w-[80px]" />

              <div className="h-[48px] w-[111px] rounded-[12px] border border-solid border-[#F9FAFB0D] bg-[#F9FAFB0D] p-[5px]">
                <button className="relative inline-flex h-[100%] w-[100%] items-center justify-center rounded-[8px] border border-solid border-[#FF4200] bg-[#FF4200] text-[14px] font-bold leading-[20px] text-[#F9FAFB]">
                  <span>Live Chats</span>

                  <div className="absolute top-[105%] h-[34px] w-[97px] rounded-[6px] border border-solid border-[#F9FAFB4D]"></div>
                </button>
              </div>
            </div>

            <span className="absolute bottom-[-13px] right-[37.62px] rotate-[-7.46deg] font-Inter text-[20px] font-normal leading-[28px] text-[#FFFFFF99]">
              QuantVPS
            </span>
          </div>

          <div className="relative z-[1] mx-auto mt-[-25px] h-[48.35px] w-[500px] rounded-[30px] bg-[#ffffff] px-[32px] py-[11px] shadow-Shadow3">
            <p className="flex items-center justify-center gap-[5px] text-[13.7px] font-light leading-[23.23px] text-[#15141A]">
              We are rated <span className="font-semibold">4.9</span> on{" "}
              <img src={TrustPilot} alt="vector" className="max-w-[78px]" /> 
              based on{" "}
              <span className="relative font-semibold">
                1352 reviews{" "}
                <img
                  src={ReviewsUnderline}
                  alt="vector"
                  className="absolute bottom-0 left-0"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Optimize;
