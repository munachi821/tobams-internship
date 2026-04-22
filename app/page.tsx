import Image from "next/image";
import section2img from "@/public/section2_img.jpg";
import { ArrowUpRight } from "lucide-react";
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
      <section className="bg-[#5712441A] p-13 h-screen flex gap-10 items-center">
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
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today&apos;s competitive
              tech landscape.
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
      </section>
    </main>
  );
}
