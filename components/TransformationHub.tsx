import Image from "next/image";
import section4img from "@/public/section4_img.jpg";
import Thunder_light from "@/components/Svg/thunder_light";
import { ArrowUpRight } from "lucide-react";

const TransformationHub = () => {
  return (
    <section className="bg-[#F9F9F9] pb-5 sm:pb-10">
      <div className="bg-white py-5 sm:py-10 p-5">
        <div className="bg-[#EF435333] p-6 rounded-2xl max-w-6xl mx-auto">
          <div>
            <p className="text-[#1671D9] font-semibold font-nunito italic text-sm sm:text-base">
              Learning With Our CEO:
            </p>
            <h2 className="text-2xl text-primary font-semibold font-nunito italic mt-1">
              Transformation Hub with jite Newton
            </h2>
            <p className="text-sm sm:text-base text-main_text mt-4">
              Transformation Hub with Jite Newton is a flagship webinar series
              curated by the CEO, Dr. Jite Newton. Designed to elevate career
              trajectories and leadership capabilities, this exclusive event
              offers invaluable insights and strategies for personal and
              professional growth. Whether you&apos;re seeking to advance your
              career or enhance your leadership skills, the Transformation Hub
              provides a transformative learning experience to unlock your
              full potential and drive success in your endeavours.
            </p>
          </div>
          <div className="mt-4 flex flex-col lg:flex-row gap-8">
            <div className="max-w-130 w-full max-h-58 lg:max-h-80 rounded-lg overflow-hidden shrink-0 md:mx-auto">
              <Image
                src={section4img}
                alt="Transformation Hub with jite Newton"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="bg-[#FFFFFF4D] w-full p-5 py-6 sm:py-7 rounded-lg flex my-auto flex-col">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Strategic Career Guidiance",
                  "LeaderShip Development",
                  "CV Development",
                  "Sustainability Leadership",
                  "Communication Skills",
                  "Business Model",
                ].map((item) => (
                  <div
                    className="bg-white p-3.5 flex gap-3 items-center rounded-lg font-semibold text-sm sm:text-base"
                    key={item}
                  >
                    <Thunder_light /> {item}
                  </div>
                ))}
              </div>
              <button className="w-fit flex items-center gap-2 text-white bg-primary text-sm sm:text-base px-5 py-2.5 font-semibold rounded-sm mt-5">
                Learn More <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationHub;
