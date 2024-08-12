import { NavLink } from "react-router-dom";
import OrangeCheckIcon from "../../assets/images/icons/orange-check-icon.svg";
import { CoreFeaturesData } from "../../constants";
import { CoreFeaturesData2 } from "../../constants";

const CoreFeatures = () => {
  return (
    <section>
      <div className="container sm:p-[80px]">
        <div className="hidden flex-col items-center text-center sm:flex">
          <h3 className="text-[31.7px] font-semibold leading-[39.12px] text-[#000000] sm:text-[38px] sm:leading-[45px]">
            8 Core Features - QuantVPS NT8 Servers
          </h3>

          <h6 className="text-[18px] font-normal leading-[24px] text-[#939393]">
            Optimize your trading execution
          </h6>
        </div>

        <div className="mt-[20px] flex flex-col items-center text-center sm:hidden">
          <h3 className="text-[31.7px] font-semibold leading-[39.12px] text-[#000000] sm:text-[38px] sm:leading-[45px]">
            Core Features of <br /> QuantVPS NT8 <br /> Servers
          </h3>

          <h6 className="text-[18px] font-normal leading-[24px] text-[#939393]">
            Optimize your trading execution
          </h6>
        </div>

        <div className="my-[50px] hidden grid-cols-2 gap-[32px] sm:grid lg:grid-cols-4">
          {CoreFeaturesData.map((item) => (
            <div key={item.id} className="px-[16px]">
              <img src={OrangeCheckIcon} alt="icon" />

              <h5 className="mb-[3px] mt-[15.5px] text-[22px] font-semibold leading-[28px] text-[#000000]">
                {item.title}
              </h5>

              <p className="text-[16px] font-normal leading-[24px] text-[#767676]">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <div className="my-[30px] grid grid-cols-2 gap-y-[32px] sm:my-[50px] sm:hidden">
          {CoreFeaturesData2.map((item) => (
            <div key={item.id} className="px-[16px]">
              <img src={OrangeCheckIcon} alt="icon" />

              <h5 className="mb-[2.19px] mt-[15.5px] text-[19.3px] font-semibold leading-[26.18px] text-[#000000]">
                {item.title}
              </h5>

              <p className="text-[14px] font-normal leading-[24px] text-[#767676]">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden text-center sm:block">
          <NavLink className="inline-flex h-[60px] w-[196px] items-center justify-center rounded-[6px] border border-solid border-[#FF4200] bg-[#FF4200] text-[16px] font-semibold leading-[18px] text-[#15141A]">
            Deploy Server
          </NavLink>
        </div>

        <div className="mb-[64px] text-center sm:hidden">
          <NavLink className="inline-flex h-[48px] w-[200px] items-center justify-center rounded-[6px] border border-solid border-[#FF4200] bg-[#FF4200] text-[14px] font-semibold leading-[18px] text-[#15141A]">
            Create an Account
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
