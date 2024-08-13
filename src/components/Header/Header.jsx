import { NavLink } from "react-router-dom";
import MiniRightArrow from "../../assets/images/icons/mini-right-arrow.svg";
import DeployServerIcon from "../../assets/images/icons/deploy-server-icon.svg";
import LogoIcon from "../../assets/images/logo-icon.png";
import HamburgerIcon from "../../assets/images/icons/hamburger.svg";
import CloseIcon from "../../assets/images/icons/close.svg";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState();
  const pricingBtnRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isActive]);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const dropdownVisible = () => {
    setIsDropdownActive(true);
  };

  const dropdownHide = () => {
    setIsDropdownActive(false);
  };

  const handlePricingClick = (event) => {
    if (isActive) {
      event.preventDefault();
      setIsDropdownActive(!isDropdownActive);
    }
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
              <NavLink
                to="/"
                className="relative z-[999] flex items-center gap-[13px]"
              >
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
                <li onMouseLeave={dropdownHide} className="relative">
                  <NavLink
                    onMouseEnter={dropdownVisible}
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
                    {isDropdownActive && (
                      <ul className="dropdown absolute top-[100%] w-[150px] bg-[#ffffff]">
                        <li>
                          <NavLink
                            to=""
                            className="inline-block w-[100%] border border-solid border-[#E4E4E766] px-[5px] py-[10px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99]"
                          >
                            Item 1
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            to=""
                            className="inline-block w-[100%] border border-solid border-[#E4E4E766] px-[5px] py-[10px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99]"
                          >
                            Item 2
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            to=""
                            className="inline-block w-[100%] border border-solid border-[#E4E4E766] px-[5px] py-[10px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99]"
                          >
                            Item 3
                          </NavLink>
                        </li>
                      </ul>
                    )}
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

            <button className="relative z-[999] inline-flex h-[32px] w-[122px] items-center justify-center rounded-[6px] bg-[#000000] text-[14px] font-medium text-[#ffffff] lg:hidden">
              Deploy Server
            </button>

            <button
              onClick={toggleNav}
              className="relative z-[999] inline-flex h-[36px] w-[52px] rounded-[20px] border border-solid border-[#D4D4D4] lg:hidden"
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

        {/* Mobile Navigation */}

        <div
          className={`mob-nav-overlay fixed left-0 top-0 z-[998] h-[100vh] w-[100%] bg-[#0000002d] transition-all duration-[0.5s] ease-linear ${isActive ? "pointer-events-auto opacity-[1]" : "pointer-events-none opacity-[0]"}`}
        ></div>

        <div
          className={`mobile-nav fixed top-0 z-[998] flex h-[100vh] w-[100%] items-center justify-start border border-solid border-[#E4E4E766] bg-[#ffffff] transition-all duration-[0.5s] ease-linear sm:w-[50%] lg:hidden ${isActive ? "open-side right-0" : "right-[-100%]"}`}
        >
          <ul className="nav-list flex w-[100%] flex-col items-start gap-[15px] pl-[20px] sm:pl-[50px]">
            <li className="relative w-[100%]">
              <NavLink
                onClick={handlePricingClick}
                to="/Pricing"
                className="group relative inline-flex h-[20px] items-center gap-[10px] font-Geist text-[20px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
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

              {isDropdownActive && (
                <ul className="dropdown w-[100%] bg-[#ffffff]">
                  <li>
                    <NavLink
                      to=""
                      className="inline-block w-[100%] border-b border-solid border-[#E4E4E766] px-[5px] py-[10px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99]"
                    >
                      Item 1
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to=""
                      className="inline-block w-[100%] border-b border-solid border-[#E4E4E766] px-[5px] py-[10px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99]"
                    >
                      Item 2
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to=""
                      className="inline-block w-[100%] border-b border-solid border-[#E4E4E766] px-[5px] py-[10px] font-Geist text-[14px] font-normal leading-[20px] text-[#09090B99]"
                    >
                      Item 3
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/Compatibility"
                className="inline-flex h-[20px] font-Geist text-[20px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
              >
                Compatibility
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Features"
                className="inline-flex h-[20px] font-Geist text-[20px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
              >
                Features
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Faq"
                className="inline-flex h-[20px] font-Geist text-[20px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
              >
                FAQ
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Support"
                className="inline-flex h-[20px] font-Geist text-[20px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
              >
                Support
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/WhatServer"
                className="inline-flex h-[20px] font-Geist text-[20px] font-normal leading-[20px] text-[#09090B99] transition-all duration-[0.3s] hover:text-[#09090B]"
              >
                What server do I need?
              </NavLink>
            </li>

            <div className="mt-[40px] flex h-[37px] min-w-[205px] items-center justify-between rounded-[5px] border border-solid border-[#E4E4E7] px-[13px] pb-[7px] pt-[5.5px]">
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
