import { NavLink } from "react-router-dom";
import MiniRightArrow from "../../assets/images/icons/mini-right-arrow.svg";
import DeployServerIcon from "../../assets/images/icons/deploy-server-icon.svg";
import LogoIcon from "../../assets/images/logo-icon.png";
import HamburgerIcon from "../../assets/images/icons/hamburger.svg";
import CloseIcon from "../../assets/images/icons/close.svg";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <div className="bg-[#09090B] py-[8px]">
        <ul className="flex items-center justify-center gap-[10px] sm:gap-[20px]">
          <li className="flex items-center font-Geist text-[10px] font-medium text-[#ffffff] sm:text-[13px]">
            <span>📈</span>{" "}
            <span> New Customers Get 50% OFF First Purchase!</span>
          </li>

          <li className="h-[18px] w-[1px] bg-[#FFFFFF33]"></li>

          <li>
            <NavLink className="flex items-center gap-[4px] border-b-[2px] border-solid border-[#ffffff] font-Geist text-[10px] font-medium leading-[18px] text-[#ffffff] sm:gap-[8px] sm:text-[13px]">
              <span>Deploy Server Now</span>{" "}
              <img src={MiniRightArrow} alt="icon" />
            </NavLink>
          </li>
        </ul>
      </div>

      <nav className="relative border-b border-solid border-[#E4E4E766] bg-[#FFFFFF99]">
        <div className="container flex items-center justify-between px-[5px] py-[10px] sm:px-[32px]">
          <div className="flex items-center gap-[40px]">
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
                    Trading <br className="lg:hidden" /> Servers
                  </h5>

                  <h6 className="hidden font-Geist text-[12px] font-bold leading-[16px] text-[#26262666] lg:block">
                    <span className="font-medium">By</span> QuantVPS.com
                  </h6>
                </div>
              </NavLink>
            </div>

            <div className="hidden lg:block">
              <ul className="nav-list flex items-center gap-[24px]">
                <li>
                  <NavLink
                    to="/Pricing"
                    className="group inline-flex h-[20px] items-center gap-[10px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
                  >
                    <span>Pricing</span>{" "}
                    <svg
                      width="9"
                      height="6"
                      viewBox="0 0 9 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.25L4.25 4.75L7.5 1.25"
                        stroke="#09090B99"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-[0.3s] group-hover:stroke-[#09090B]"
                      />
                    </svg>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Compatibility"
                    className="inline-flex h-[20px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
                  >
                    Compatibility
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Features"
                    className="inline-flex h-[20px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
                  >
                    Features
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Faq"
                    className="inline-flex h-[20px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
                  >
                    FAQ
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/Support"
                    className="inline-flex h-[20px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
                  >
                    Support
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/WhatServer"
                    className="inline-flex h-[20px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
                  >
                    What server do I need?
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-[30.5px] lg:block">
            <div className="hidden h-[37px] min-w-[205px] items-center justify-between rounded-[5px] border border-solid border-[#E4E4E7] px-[13px] pb-[7px] pt-[5.5px] lg:flex">
              <NavLink className="font-Geist text-[13.67px] font-normal leading-[14px] text-[#09090B]">
                Login
              </NavLink>

              <NavLink className="inline-flex h-[100%] w-[134px] items-center justify-center gap-[6px] rounded-[6px] border border-solid border-[#E4E4E7] bg-[#09090B] font-Geist text-[13.67px] leading-[14px] text-[#ffffff]">
                <img src={DeployServerIcon} alt="icon" />{" "}
                <span>Deploy Server</span>
              </NavLink>
            </div>

            <button className="inline-flex h-[32px] w-[122px] items-center justify-center rounded-[6px] bg-[#000000] text-[14px] font-medium text-[#ffffff] lg:hidden">
              Deploy Server
            </button>

            <button
              onClick={toggleNav}
              className="relative inline-flex h-[36px] w-[52px] rounded-[20px] border border-solid border-[#D4D4D4] lg:hidden"
            >
              {isActive ? (
                <img
                  src={CloseIcon}
                  alt="icon"
                  className="absolute left-[50%] top-[50%] h-[20px] w-[20px] translate-x-[-50%] translate-y-[-50%]"
                />
              ) : (
                <img
                  src={HamburgerIcon}
                  alt="icon"
                  className="absolute left-[50%] top-[50%] h-[20px] w-[20px] translate-x-[-50%] translate-y-[-50%]"
                />
              )}
            </button>
          </div>
        </div>

        <div
          className={`mobile-nav absolute top-[100%] z-[998] flex w-[100%] items-center justify-center overflow-hidden border-b border-solid border-[#E4E4E766] bg-[#ffffff] transition-all duration-[0.3s] lg:hidden ${isActive ? "h-[400px]" : "h-[0px]"}`}
        >
          <ul className="nav-list flex flex-col items-center gap-[24px]">
            <li>
              <NavLink
                to="/Pricing"
                className="group inline-flex h-[20px] items-center gap-[10px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
              >
                <span>Pricing</span>{" "}
                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.25L4.25 4.75L7.5 1.25"
                    stroke="#09090B99"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-[0.3s] group-hover:stroke-[#09090B]"
                  />
                </svg>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Compatibility"
                className="inline-flex h-[20px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
              >
                Compatibility
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Features"
                className="inline-flex h-[20px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
              >
                Features
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Faq"
                className="inline-flex h-[20px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
              >
                FAQ
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Support"
                className="inline-flex h-[20px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
              >
                Support
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/WhatServer"
                className="inline-flex h-[20px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
              >
                What server do I need?
              </NavLink>
            </li>

            <div className="flex h-[37px] min-w-[205px] items-center justify-between rounded-[5px] border border-solid border-[#E4E4E7] px-[13px] pb-[7px] pt-[5.5px]">
              <NavLink className="font-Geist text-[13.67px] font-normal leading-[14px] text-[#09090B]">
                Login
              </NavLink>

              <NavLink className="inline-flex h-[100%] w-[134px] items-center justify-center gap-[6px] rounded-[6px] border border-solid border-[#E4E4E7] bg-[#09090B] font-Geist text-[13.67px] leading-[14px] text-[#ffffff]">
                <img src={DeployServerIcon} alt="icon" />{" "}
                <span className="text-[#ffffff]">Deploy Server</span>
              </NavLink>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
