import Image from "next/image";
import section3img from "@/public/section3_img.jpg";
import Thunder_white from "@/components/Svg/thunder_white";

const ManagementProgram = () => {
  return (
    <section className="bg-[#F9F9F9] flex items-center justify-center py-5 sm:p-12 px-4">
      <div className="max-w-6xl w-full gap-5 lg:gap-10 bg-[#2C0922] rounded-2xl p-3.5 sm:p-10 flex flex-col lg:flex-row items-center justify-between">
        <div>
          <h2 className="lg:hidden text-base md:text-[24px] font-semibold text-white mt-1.5 mb-3.5 font-nunito">
            Management Development Program
          </h2>
          <div className=" lg:max-w-125 lg:h-130 shrink-0 rounded-lg rounded-br-none overflow-hidden md:mx-auto">
            <Image
              src={section3img}
              alt="Management development program"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-white max-w-140 w-full">
          <h2 className="hidden lg:block text-[35px] font-nunito">
            Management Development Program
          </h2>
          <div className="text-base sm:text-lg font-normal space-y-5 sm:mt-2">
            <p>
              Tobams Group offers a comprehensive Management Development
              Program designed to equip corporate organisations with the high
              -performing leaders they need to thrive.
            </p>

            <p>
              Our program includes workshops, seminars, coaching sessions,
              online courses, and experiential learning opportunities designed
              to improve leadership, strategic thinking, communication, and
              other essential managerial competencies for corporate
              organisations.
            </p>
          </div>

          <div className="font-semibold space-y-4 mt-6 sm:mt-4 w-full">
            <div className="flex bg-[#8F6182] w-full py-1.5 items-center px-4 gap-3 rounded-lg ml-0 sm:ml-2">
              <Thunder_white /> Enhanced Leadership Skills
            </div>
            <div className="flex bg-[#8F6182] w-full py-1.5 items-center px-4 gap-3 rounded-lg ml-0 sm:ml-2">
              <Thunder_white /> Improved Employee Engagement
            </div>
            <div className="flex bg-[#8F6182] w-full py-1.5 items-center px-4 gap-3 rounded-lg ml-0 sm:ml-2">
              <Thunder_white /> Stronger Organisational Culture
            </div>
            <div className="flex bg-[#8F6182] w-full py-1.5 items-center px-4 gap-3 rounded-lg ml-0 sm:ml-2">
              <Thunder_white /> Sustainable Growth
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementProgram;
