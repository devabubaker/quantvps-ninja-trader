import { NavLink } from "react-router-dom";
import Instagram from "../../assets/images/icons/instagram.svg";
import Youtube from "../../assets/images/icons/youtube.svg";
import Telegram from "../../assets/images/icons/telegram.svg";
import Discord from "../../assets/images/icons/discord.svg";
import Twitter from "../../assets/images/icons/twitter.svg";
import Paypal from "../../assets/images/icons/paypal.svg";
import Visa from "../../assets/images/icons/visa.svg";
import Mastercard from "../../assets/images/icons/mastercard.svg";
import Stripe from "../../assets/images/icons/stripe.svg";
import OnlineImg from "../../assets/images/online-img.png";

const Footer = () => {
  return (
    <footer className="border-solid border-[#00000014] sm:border">
      <div className="container px-[120px] pb-[32px] pl-[24px] pr-[10px] pt-[29px] sm:pl-[120px] sm:pr-[120px]">
        <div className="sm:px-[16px]">
          <div className="sm:hidden">
            <h5 className="mb-[13px] font-Geist text-[14px] font-bold leading-[24px] text-[#374151]">
              Client Menu
            </h5>

            <ul className="flex flex-col gap-[10px]">
              <li>
                <NavLink className="font-Geist text-[14px] font-normal leading-[24px] text-[#666666]">
                  Client Login
                </NavLink>
              </li>

              <li>
                <NavLink className="font-Geist text-[14px] font-normal leading-[24px] text-[#666666]">
                  Open a Support Ticket
                </NavLink>
              </li>

              <li>
                <NavLink className="font-Geist text-[14px] font-normal leading-[24px] text-[#666666]">
                  Manage Billing
                </NavLink>
              </li>

              <li>
                <NavLink className="font-Geist text-[14px] font-normal leading-[24px] text-[#666666]">
                  Deploy New Server
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="my-[24px] sm:hidden">
            <h5 className="mb-[13px] font-Geist text-[14px] font-bold leading-[24px] text-[#374151]">
              Resources
            </h5>

            <div className="flex">
              <ul className="flex w-[204.91px] flex-col gap-[10px]">
                <li>
                  <NavLink className="font-Geist text-[14px] font-normal leading-[24px] text-[#666666]">
                    FAQ
                  </NavLink>
                </li>

                <li>
                  <NavLink className="font-Geist text-[14px] font-normal leading-[24px] text-[#666666]">
                    Pricing
                  </NavLink>
                </li>

                <li>
                  <NavLink className="font-Geist text-[14px] font-normal leading-[24px] text-[#666666]">
                    Compatibility
                  </NavLink>
                </li>

                <li>
                  <NavLink className="font-Geist text-[14px] font-normal leading-[24px] text-[#666666]">
                    Features
                  </NavLink>
                </li>

                <li>
                  <NavLink className="font-Geist text-[14px] font-normal leading-[24px] text-[#666666]">
                    FAQ
                  </NavLink>
                </li>
              </ul>

              <ul className="flex w-[204.91px] flex-col gap-[10px]">
                <li>
                  <NavLink className="font-Geist text-[14px] font-normal leading-[24px] text-[#666666]">
                    Knolwedgebase
                  </NavLink>
                </li>

                <li>
                  <NavLink className="font-Geist text-[14px] font-normal leading-[24px] text-[#666666]">
                    Blog
                  </NavLink>
                </li>

                <li>
                  <NavLink className="font-Geist text-[14px] font-normal leading-[24px] text-[#666666]">
                    Support
                  </NavLink>
                </li>

                <li>
                  <NavLink className="font-Geist text-[14px] font-normal leading-[24px] text-[#666666]">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <img src={OnlineImg} alt="image" className="max-w-[215px]" />
          </div>

          <div className="my-[24px] sm:hidden">
            <h5 className="mb-[13px] font-Geist text-[14px] font-bold leading-[24px] text-[#374151]">
              Socials
            </h5>

            <ul className="flex items-center gap-[16px]">
              {[Instagram, Youtube, Telegram, Discord, Twitter].map(
                (item, i) => (
                  <li key={i}>
                    <NavLink>
                      <img src={item} alt="icon" />
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </div>

          <ul className="flex items-center gap-[5px] text-[#666666]">
            <li>
              <NavLink className="font-Inter text-[12px] font-light leading-[18px] text-[#666666] underline">
                English
              </NavLink>
            </li>

            <li>|</li>

            <li>
              <NavLink className="font-Inter text-[12px] font-light leading-[18px] text-[#666666] underline">
                Русский
              </NavLink>
            </li>

            <li>|</li>

            <li>
              <NavLink className="font-Inter text-[12px] font-light leading-[18px] text-[#666666] underline">
                Polski
              </NavLink>
            </li>

            <li>|</li>

            <li>
              <NavLink className="font-Inter text-[12px] font-light leading-[18px] text-[#666666] underline">
                Español
              </NavLink>
            </li>

            <li>|</li>

            <li>
              <NavLink className="font-Inter text-[12px] font-light leading-[18px] text-[#666666] underline">
                中文
              </NavLink>
            </li>
          </ul>

          <p className="my-[16px] font-Inter text-[12px] font-normal leading-[18px] text-[#666666]">
            Copyright © 2013-2024 www.QuantVPS.com <br />
            Address: 315 E Cermak Road, Chicago, Illinois
          </p>

          <ul className="flex items-center gap-[5px] text-[#666666]">
            <li>
              <NavLink className="font-Inter text-[12px] font-light leading-[18px] text-[#666666] underline">
                Terms of Service
              </NavLink>
            </li>

            <li>|</li>

            <li>
              <NavLink className="font-Inter text-[12px] font-light leading-[18px] text-[#666666] underline">
                Privacy Policy
              </NavLink>
            </li>

            <li>|</li>

            <li>
              <NavLink className="font-Inter text-[12px] font-light leading-[18px] text-[#666666] underline">
                Cookie Policy
              </NavLink>
            </li>

            <li>|</li>

            <li>
              <NavLink className="font-Inter text-[12px] font-light leading-[18px] text-[#666666] underline">
                SLA
              </NavLink>
            </li>
          </ul>

          <p className="my-[16px] font-Inter text-[12px] font-normal leading-[18px] text-[#666666]">
            * We offer a service-level-agreement (SLA) should your service drop
            beneath 99.99% uptime. This guarantee excludes notified scheduled
            maintenance and events outside our control (force majeure). More on
            our service level agreement can be{" "}
            <NavLink className="underline">read here</NavLink>.
          </p>

          <p className="font-Inter text-[12px] font-normal leading-[18px] text-[#666666]">
            Caution: Trading involves the possibility of financial loss. Only
            trade with money that you are prepared to lose, you must recognise
            that for factors outside your control you may lose all of the money
            in your trading account. Many forex brokers also hold you liable for
            losses that exceed your trading capital. So you may stand to lose
            more money than is in your account. QuantVPS does not guarantee the
            profitability of trades executed on its systems. We have no
            knowledge on the level of money you are trading with or the level of
            risk you are taking with each trade. You must make your own
            financial decisions, we take no responsibility for money made or
            lost as a result of using our servers or advice on forex related
            products on this website.
          </p>

          <div className="mt-[22px] hidden h-[48px] w-[100%] items-center justify-between pl-[29.8px] pr-[15px] sm:flex">
            <ul className="flex items-center gap-[16px]">
              {[Instagram, Youtube, Telegram, Discord, Twitter].map(
                (item, i) => (
                  <li key={i}>
                    <NavLink>
                      <img src={item} alt="icon" />
                    </NavLink>
                  </li>
                ),
              )}
            </ul>

            <div className="flex items-center gap-[16.77px]">
              <span className="text-[13px] font-normal leading-[19.5px] text-[#808080]">
                Payments We Accept
              </span>

              <ul className="flex items-center gap-[7.16px]">
                {[Paypal, Visa, Mastercard, Stripe].map((item, i) => (
                  <li key={i}>
                    <NavLink>
                      <img src={item} alt="icon" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
