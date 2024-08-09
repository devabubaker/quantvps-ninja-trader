import { AccordionData1 } from "../../constants";
import { AccordionData2 } from "../../constants";
import Accordion from "../Accordion/Accordion";

const MoreInformation = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="container px-[160px] py-[80px]">
        <div>
          <h3 className="text-center text-[40px] font-extrabold leading-[30px] tracking-[-1px] text-[#1F2937]">
            More Information On Our NinjaTrader Servers
          </h3>
        </div>

        <div className="grid grid-cols-2">
          <div className="p-[24px]">
            {AccordionData1.map((item) => (
              <Accordion
                key={item.id}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>

          <div className="p-[24px]">
            {AccordionData2.map((item) => (
              <Accordion
                key={item.id}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInformation;
