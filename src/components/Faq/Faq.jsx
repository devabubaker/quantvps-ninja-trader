import FaqArrow from "../../assets/images/faq-arrow.svg";
import { AccordionData3 } from "../../constants";
import { AccordionData32 } from "../../constants";
import Accordion2 from "../Accordion/Accordion2";

const Faq = () => {
  return (
    <section className="sm:bg-[#FAFAFA]">
      <div className="container px-[16px] pt-[20px] sm:pb-[64.89px] md:px-[80px]">
        <div className="relative mb-[18px] flex justify-center gap-[19.1px] sm:mb-0 sm:gap-[9.33px]">
          <img
            src={FaqArrow}
            alt="vector"
            className="mt-[12.47px] hidden sm:block"
          />

          <h3 className="hidden text-center text-[40px] font-extrabold leading-[30px] tracking-[-1px] text-[#1F2937] sm:block">
            Frequently Asked Questions
          </h3>

          <h3 className="text-center text-[28px] font-semibold leading-[36px] tracking-[-1px] text-[#15141A] sm:hidden">
            FAQs
          </h3>

          <img
            src={FaqArrow}
            alt="vector"
            className="mt-[25px] max-w-[34px] scale-x-[-1] sm:hidden"
          />
        </div>

        <div className="hidden flex-col gap-[10px] px-[20px] sm:flex">
          {AccordionData3.map((item) => (
            <Accordion2
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>

        <div className="flex flex-col gap-[10px] sm:hidden">
          {AccordionData32.map((item) => (
            <Accordion2
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
