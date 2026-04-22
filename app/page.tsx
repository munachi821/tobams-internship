import Image from "next/image";
import section2img from "@/public/section2_img.jpg";
export default function Home() {
  return (
    <main>
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
      <section className="bg-[#5712441A] p-13 h-screen flex">
        <div className="w-139 h-142 rounded-full overflow-hidden bg-red-500">
          <Image
            src={section2img}
            alt="learning management system"
            className="object-cover w-full h-full"
          />
        </div>

        <div>
          <h2 className="font-nunito font-semibold text-[40px] text-primary">
            Learning Management System
          </h2>
        </div>
      </section>
    </main>
  );
}
