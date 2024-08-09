import RandomScribble from "../../assets/images/random-scribble.svg.svg";
import { SetupData } from "../../constants";

const Setup = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="container px-[72px] py-[40px]">
        <div className="text-center">
          <h5 className="mb-[8px] font-Manrope text-[16px] font-bold uppercase leading-[24px] text-[#FF420080]">
            HOW TO SETUP
          </h5>

          <div className="mx-auto max-w-[438px]">
            <h3 className="text-[40px] font-extrabold leading-[30px] tracking-[-1px] text-[#171717]">
              How To Setup NT8 VPS
            </h3>

            <div className="flex justify-end">
              <img src={RandomScribble} alt="vector" className="mt-[36px]" />
            </div>
          </div>
        </div>

        <div className="my-[50px] grid grid-cols-3 gap-[50px]">
          {SetupData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <img src={item.imgUrl} alt="vector" />

              <div className="mt-[-50px]">
                <h4 className="font-Manrope text-[24px] font-bold leading-[32px] text-[#000000]">
                  {item.title}
                </h4>

                <p className="mt-[8px] max-w-[370px] font-Manrope text-[16px] font-normal leading-[24px] text-[#000000]">
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
