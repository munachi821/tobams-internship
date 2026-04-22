import Image from "next/image";
import section2img from "@/public/section2_img.jpg";
import { ArrowUpRight } from "lucide-react";
import Thunder from "@/components/Svg/thunder";
import services1 from "@/public/services-1.jpg";
import services2 from "@/public/services-2.jpg";
import services3 from "@/public/services-3.jpg";
export default function Home() {
  return (
    <main className="font-nunito-normal">
      <section className="h-screen relative hero-bg flex items-center justify-center">
        <div className="absolute bg-black/50 w-full h-full"></div>
        <div className="py-10 relative text-center text-white max-w-272 space-y-2 mt-32">
          <div className="w-48.25 bg-white/10 font-semibold rounded-full px-4 text-center py-2 text-sm mx-auto mb-4">
            <p>WHAT WE DO</p>
          </div>
          <h1 className="font-bold text-[57px] font-nunito leading-tight">
            Training and Development
          </h1>
          <p className="font-medium text-lg">
            Our comprehensive range of programs and resources is designed to
            enhance skills, broaden knowledge, and propel careers forward in
            today&apos;s ever-evolving landscape.
          </p>
          <button className="bg-primary text-lg px-5 py-2.5 font-semibold rounded-sm mt-10">
            Book a Consultation
          </button>
        </div>
      </section>
      <section className="bg-[#F9F9F9] py-8 h-fit flex my-auto">
        <div className="bg-[#5712441A] px-10 overflow-x-hidden py-5  flex gap-10 items-center">
          <div className="w-139 h-142 rounded-full overflow-hidden bg-red-500 shrink-0">
            <Image
              src={section2img}
              alt="learning management system"
              className="object-cover w-full h-full"
            />
          </div>

          <div>
            <h2 className="font-nunito font-semibold text-[35px] text-primary mb-5">
              Learning Management System
            </h2>

            <div className="bg-[#5712441A] p-4 rounded-md w-2xl text-lg text-main_text leading-6.5">
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
              <ul className="flex flex-wrap gap-x-5 text-base gap-y-2">
                <li>● Business Analysis</li>
                <li>● Design Thinking</li>
                <li>● Effective Communication</li>
                <li>● Entreprenurship</li>
                <li>● Carrer Development</li>
                <li>● Business Model</li>
              </ul>
            </div>

            <button className="flex items-center gap-2 text-white bg-primary text-lg px-6 py-2.5 font-semibold rounded-sm mt-10">
              Learn More <ArrowUpRight />
            </button>
          </div>
        </div>
      </section>
      <section className="px-10 py-12 space-y-20">
        <div className="flex justify-between items-center">
          <div className="w-161.5">
            <h2 className="font-nunito font-semibold text-[40px] text-main_text">
              Corporate Trainings
            </h2>
            <p className="text-lg text-[#696969]">
              Empower your team with our customised Corporate Training programs
              designed to address the unique needs and objectives of your
              organisation. Our expert facilitators work closely with your team
              to deliver tailored learning experiences that align with your
              company&apos;s goals and values.
            </p>
            <ul className="mt-2.5 ml-5 space-y-1">
              {[
                "Leadership Training",
                "Strategic Planning and Implementation",
                "Project Management",
                "Sustainability Training",
                "Customised Training",
              ].map((item) => (
                <li
                  className="flex items-center gap-3 text-[#696969] text-lg"
                  key={item}
                >
                  <Thunder /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-145 h-86.5 rounded-tl-[56px] rounded-tr-3xl rounded-br-[23px] rounded-bl-xl overflow-hidden">
            <Image
              src={services1}
              alt="Corporate Trainings"
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="flex justify-between items-center flex-row-reverse">
          <div className="w-161.5">
            <h2 className="font-nunito font-semibold text-[40px] text-main_text">
              Personalised Individual Training
            </h2>
            <p className="text-lg text-[#696969]">
              Begin a journey of lifelong learning and professional development
              with Tobams Group&apos;s diverse range of training programs for
              individuals. From technical skills mastery to soft skills
              enhancement, our courses cover a wide spectrum of topics to meet
              the evolving needs of today&apos;s professionals.
            </p>
            <ul className="mt-2.5 ml-5 space-y-1">
              {[
                "Leadership Development",
                "Soft Skills Development",
                "Industry Specific Knowledge",
                "Technical Skills Enhancement",
                "Time Management and Productivity",
                "Career Development",
              ].map((item) => (
                <li
                  className="flex items-center gap-3 text-[#696969] text-lg"
                  key={item}
                >
                  <Thunder /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-145 h-86.5 rounded-tl-[56px] rounded-tr-3xl rounded-br-[23px] rounded-bl-xl overflow-hidden">
            <Image
              src={services2}
              alt="Personalised Individual Training"
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-161.5">
            <h2 className="font-nunito font-semibold text-[40px] text-main_text">
              Capacity Development
            </h2>
            <p className="text-lg text-[#696969]">
              At Tobams Group, we empower individuals and organizations through
              tailored training programs, expert-led workshops, and personalized
              mentorship. We are committed to your success and growth. We are
              dedicated to providing a comprehensive suite of benefits designed
              to foster your development and success:
            </p>
            <ul className="mt-2.5 ml-5 space-y-1">
              {[
                "Tailored Training Programs",
                "Expert-Led Workshops",
                "Personalized Mentorship",
                "Technical Skills Enhancement",
                "Collaborative Learning Environment",
                "Ongoing Support and Resources",
              ].map((item) => (
                <li
                  className="flex items-center gap-3 text-[#696969] text-lg"
                  key={item}
                >
                  <Thunder /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-145 h-86.5 rounded-tl-[56px] rounded-tr-3xl rounded-br-[23px] rounded-bl-xl overflow-hidden">
            <Image
              src={services3}
              alt="Corporate Trainings"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
