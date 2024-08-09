import FaqArrow from "../../assets/images/faq-arrow.svg";
import { AccordionData3 } from "../../constants";
import Accordion2 from "../Accordion/Accordion2";

const Faq = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="container px-[80px] pb-[64.89px] pt-[20px]">
        <div className="flex justify-center gap-[9.33px]">
          <img src={FaqArrow} alt="vector" className="mt-[12.47px]" />

          <h3 className="text-center text-[40px] font-extrabold leading-[30px] tracking-[-1px] text-[#1F2937]">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="flex flex-col gap-[10px] px-[20px]">
          {AccordionData3.map((item) => (
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
