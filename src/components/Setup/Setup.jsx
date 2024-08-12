import RandomScribble from "../../assets/images/random-scribble.svg.svg";
import { SetupData } from "../../constants";

const Setup = () => {
  return (
    <section className="sm:bg-[#FAFAFA]">
      <div className="container px-[30.5px] py-[40px] sm:px-[72px]">
        <div className="text-center">
          <h5 className="mb-[8px] font-Manrope text-[16px] font-bold uppercase leading-[24px] text-[#FF420080]">
            HOW TO SETUP
          </h5>

          <div className="mx-auto sm:max-w-[438px]">
            <h3 className="text-[29px] font-extrabold leading-[30px] tracking-[-1px] text-[#171717] sm:text-[40px]">
              How To Setup NT8 VPS
            </h3>

            <div className="hidden justify-end md:flex">
              <img src={RandomScribble} alt="vector" className="mt-[36px]" />
            </div>
          </div>
        </div>

        <div className="my-[50px] mb-[20px] grid grid-cols-1 gap-[50px] sm:mb-[50px] md:grid-cols-3">
          {SetupData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <img
                src={item.imgUrl}
                alt="vector"
                className="max-w-[80px] sm:max-w-[100%]"
              />

              <div className="mt-[-50px]">
                <h4 className="font-Manrope text-[20px] font-bold leading-[28px] text-[#000000] sm:text-[24px] sm:leading-[32px]">
                  {item.title}
                </h4>

                <p className="mt-[8px] max-w-[370px] font-Manrope text-[14px] font-normal leading-[20px] text-[#000000] sm:text-[16px] sm:leading-[24px]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Setup;
