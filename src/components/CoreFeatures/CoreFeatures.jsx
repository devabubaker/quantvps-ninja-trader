import { NavLink } from "react-router-dom";
import OrangeCheckIcon from "../../assets/images/icons/orange-check-icon.svg";
import { CoreFeaturesData } from "../../constants";

const CoreFeatures = () => {
  return (
    <section>
      <div className="container p-[80px]">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-[38px] font-semibold leading-[45px] text-[#000000]">
            8 Core Features - QuantVPS NT8 Servers
          </h3>

          <h6 className="text-[18px] font-normal leading-[24px] text-[#939393]">
            Optimize your trading execution
          </h6>
        </div>

        <div className="my-[50px] grid grid-cols-4 gap-[32px]">
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

        <div className="text-center">
          <NavLink className="inline-flex h-[60px] w-[196px] items-center justify-center rounded-[6px] border border-solid border-[#FF4200] bg-[#FF4200] text-[16px] font-semibold leading-[18px] text-[#15141A]">
            Deploy Server
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
