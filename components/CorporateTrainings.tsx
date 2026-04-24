import Image from "next/image";
import Thunder from "@/components/Svg/thunder";
import services1 from "@/public/services-1.jpg";
import services2 from "@/public/services-2.jpg";
import services3 from "@/public/services-3.jpg";

const CorporateTrainings = () => {
  return (
    <section className="px-4 sm:px-10 sm:py-12 bg-[#F9F9F9]">
      <div className="bg-[#ffffff] py-2 space-y-6 lg:space-y-20">
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="max-w-161.5 text-base sm:text-lg mt-4 lg:mt-0">
            <h2 className="hidden lg:block font-nunito font-semibold text-[40px] text-main_text">
              Corporate Trainings
            </h2>
            <p className="text-[#696969]">
              Empower your team with our customised Corporate Training
              programs designed to address the unique needs and objectives of
              your organisation. Our expert facilitators work closely with
              your team to deliver tailored learning experiences that align
              with your company&apos;s goals and values.
            </p>
            <ul className="mt-2.5 sm:ml-5 space-y-1">
              {[
                "Leadership Training",
                "Strategic Planning and Implementation",
                "Project Management",
                "Sustainability Training",
                "Customised Training",
              ].map((item) => (
                <li
                  className="flex items-center gap-3 text-[#696969]"
                  key={item}
                >
                  <Thunder /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="block lg:hidden font-nunito font-semibold text-[20px] md:text-[30px] text-main_text mb-4">
              Corporate Trainings
            </h2>
            <div className="max-w-145 sm:h-86.5 rounded-tl-[30px] rounded-tr-3xl rounded-br-[23px] rounded-bl-[40px] lg:rounded-tl-[56px] lg:rounded-tr-3xl lg:rounded-br-[23px] lg:rounded-bl-xl overflow-hidden md:mx-auto">
              <Image
                src={services1}
                alt="Corporate Trainings"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row-reverse">
          <div className="max-w-161.5 text-base sm:text-lg mt-4 lg:mt-0">
            <h2 className="hidden lg:block font-nunito font-semibold text-[40px] text-main_text">
              Personalised Individual Training
            </h2>
            <p className="text-[#696969]">
              Begin a journey of lifelong learning and professional
              development with Tobams Group&apos;s diverse range of training
              programs for individuals. From technical skills mastery to soft
              skills enhancement, our courses cover a wide spectrum of topics
              to meet the evolving needs of today&apos;s professionals.
            </p>
            <ul className="mt-2.5 sm:ml-5 space-y-1">
              {[
                "Leadership Development",
                "Soft Skills Development",
                "Industry Specific Knowledge",
                "Technical Skills Enhancement",
                "Time Management and Productivity",
                "Career Development",
              ].map((item) => (
                <li
                  className="flex items-center gap-3 text-[#696969]"
                  key={item}
                >
                  <Thunder /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="block lg:hidden font-nunito font-semibold text-[20px] md:text-[30px] text-main_text mb-4">
              Personalised Individual Training
            </h2>
            <div className="max-w-145 sm:h-86.5 rounded-tl-[33px] lg:rounded-tl-[56px] rounded-tr-lg rounded-br-lg rounded-bl-lg overflow-hidden md:mx-auto">
              <Image
                src={services2}
                alt="Personalised Individual Training"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="max-w-161.5 text-base sm:text-lg mt-4 lg:mt-0">
            <h2 className="hidden lg:block font-nunito font-semibold text-[40px] text-main_text">
              Capacity Development
            </h2>
            <p className="text-[#696969]">
              At Tobams Group, we empower individuals and organizations
              through tailored training programs, expert-led workshops, and
              personalized mentorship. We are committed to your success and
              growth. We are dedicated to providing a comprehensive suite of
              benefits designed to foster your development and success:
            </p>
            <ul className="mt-2.5 sm:ml-5 space-y-1">
              {[
                "Tailored Training Programs",
                "Expert-Led Workshops",
                "Personalized Mentorship",
                "Technical Skills Enhancement",
                "Collaborative Learning Environment",
                "Ongoing Support and Resources",
              ].map((item) => (
                <li
                  className="flex items-center gap-3 text-[#696969]"
                  key={item}
                >
                  <Thunder /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="block lg:hidden font-nunito font-semibold text-[20px] md:text-[30px] text-main_text mb-4">
              Capacity Development
            </h2>
            <div className="max-w-145 sm:h-86.5 rounded-tl-[33px] lg:rounded-tl-[56px] rounded-tr-lg rounded-br-lg rounded-bl-lg overflow-hidden md:mx-auto">
              <Image
                src={services3}
                alt="Corporate Trainings"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTrainings;
