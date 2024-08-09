import { useState, useRef } from "react";
import ChevronDown from "../../assets/images/icons/chevron-down.svg";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div
        className="flex h-[60px] w-[100%] cursor-pointer select-none items-center justify-between rounded-[8px] bg-[#F3F3F3] pl-[30px] pr-[58px]"
        onClick={toggleAccordion}
      >
        <h5 className="text-[16px] font-semibold leading-[24px] text-[#15141A]">
          {title}
        </h5>

        <img
          src={ChevronDown}
          alt="icon"
          className={`transform transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
        />
      </div>

      <div
        ref={contentRef}
        className="transition-max-height overflow-hidden px-[30px] duration-300"
        style={{
          maxHeight: isActive ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        <p className="mb-[21px] mt-[10px] font-Geist text-[16px] font-normal leading-[24px] text-[#6B7280]">
          {content}
        </p>

        <button className="inline-flex h-[38px] w-[200px] items-center justify-center rounded-[8px] border border-solid border-[#000000] text-[14px] font-bold leading-[20px] text-[#000000] shadow-Shadow4">
          Check Broker Latency
        </button>
      </div>
    </div>
  );
};

export default Accordion;
