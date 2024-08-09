import OnlineCheck from "../../assets/images/icons/online-check.svg";
import Twitter from "../../assets/images/icons/twitter.svg";
import Github from "../../assets/images/icons/github.svg";
import LogoIcon from "../../assets/images/logo-icon.png";
import { NavLink } from "react-router-dom";

const Online = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="pb-[104.75px] pt-[20px]">
        <div className="border-t border-solid border-[#00000014] bg-[#ffffff]">
          <div className="container px-[120px] pb-[32px] pt-[29px]">
            <div className="ml-[57px] flex items-center gap-[14px]">
              <div>
                <NavLink to="/" className="flex items-center gap-[13px]">
                  <div>
                    <img
                      src={LogoIcon}
                      alt="logo"
                      className="max-w-[32px] shadow-Shadow1"
                    />
                  </div>

                  <div className="h-[34.31px] w-[2px] bg-[#09090B]"></div>

                  <div>
                    <h5 className="text-[12.7px] font-bold leading-[14px] text-[#09090B]">
                      Trading Servers
                    </h5>

                    <h6 className="font-Geist text-[12px] font-bold leading-[16px] text-[#26262666]">
                      <span className="font-medium">By</span> QuantVPS.com
                    </h6>
                  </div>
                </NavLink>
              </div>

              <div className="flex items-center gap-[8px] text-[14px] font-medium leading-[19.5px] text-[#171717]">
                <span>All services are online</span>{" "}
                <img src={OnlineCheck} alt="icon" />
              </div>
            </div>

            <div className="mt-[22px] flex items-center justify-between">
              <ul className="flex items-center gap-[16px]">
                <li>
                  <NavLink>
                    <img src={Github} alt="icon" />
                  </NavLink>
                </li>

                <li>
                  <NavLink>
                    <img src={Twitter} alt="icon" />
                  </NavLink>
                </li>
              </ul>

              <div>
                <select className="border-none font-Geist text-[14px] font-normal text-[#666666] outline-none">
                  <option>Legal</option>
                  <option>Legal</option>
                  <option>Legal</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Online;
