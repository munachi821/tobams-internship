import Image from "next/image";
import section2img from "@/public/section2_img.jpg";
import { ArrowUpRight } from "lucide-react";

const LearningManagement = () => {
  return (
    <section className="bg-[#F9F9F9] py-8 h-fit flex my-auto w-full">
      <div className="bg-[#5712441A] px-5 sm:px-10 overflow-x-hidden py-5 flex flex-col lg:flex-row gap-10 items-center">
        <div>
          <h2 className="lg:hidden font-nunito font-semibold text-[22px] md:text-[28px] text-primary mb-5">
            Learning Management System
          </h2>
          <div className="w-full max-w-142 aspect-square rounded-full overflow-hidden shrink-0 mx-auto">
            <Image
              src={section2img}
              alt="learning management system"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div>
          <h2 className="hidden lg:block font-nunito font-semibold text-[35px] text-primary mb-5">
            Learning Management System
          </h2>

          <div className="bg-[#5712441A] p-4 rounded-md max-w-2xl text-lg text-main_text leading-6.5">
            <p>
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy
              offers a wide range of courses to cater to diverse learning
              needs. With accessible and interactive learning materials,
              individuals can enhance their skills and stay ahead in
              today&apos;s competitive tech landscape.
            </p>

            <p className="font-bold text-primary mt-4 mb-2">
              Some of our courses include:
            </p>
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-5 text-base gap-y-2">
              <li>● Business Analysis</li>
              <li>● Design Thinking</li>
              <li>● Effective Communication</li>
              <li>● Entreprenurship</li>
              <li>● Carrer Development</li>
              <li>● Business Model</li>
            </ul>

            <button className="flex lg:hidden items-center gap-2 text-white bg-primary text-lg px-6 py-2.5 font-semibold rounded-sm mt-8">
              Learn More <ArrowUpRight />
            </button>
          </div>

          <button className="hidden lg:flex items-center gap-2 text-white bg-primary text-lg px-6 py-2.5 font-semibold rounded-sm mt-10">
            Learn More <ArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningManagement;
