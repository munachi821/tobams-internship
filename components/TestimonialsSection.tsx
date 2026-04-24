import Image from "next/image";
import testimonial1 from "@/public/testimonial1.png";
import testimonial2 from "@/public/testimonial2.png";
import testimonial3 from "@/public/testimonial3.png";
import testimonial4 from "@/public/testimonial4.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      img: testimonial1,
      name: "Aisha Yusuf",
      bussiness: "Founder, CraftHub NG",
      testimonial:
        "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    },
    {
      img: testimonial2,
      name: "John Davies",
      bussiness: "Marketing Manager, E-Commerce Emporium",
      testimonial:
        "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    },
    {
      img: testimonial3,
      name: "Chinonso Nwankwo",
      bussiness: "HR Director, FutureTech Solutions",
      testimonial:
        "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    },
    {
      img: testimonial4,
      name: "Aisha Yusuf",
      bussiness: "Founder, CraftHub NG",
      testimonial:
        "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
    },
  ];

  return (
    <section className="pt-1 sm:pt-8 bg-[#F9F9F9]">
      <div className="p-2 px-3">
        <div className="bg-primary max-w-5xl mx-auto font-nunito p-9 flex flex-col items-center justify-center rounded-md m-3">
          <p className="hidden md:block text-white text-center text-base sm:text-lg font-semibold">
            Want to accelerate professional growth and development at your
            organisation? <br /> See how we can help.
          </p>
          <p className="block md:hidden text-white text-center text-base sm:text-lg font-semibold">
            Don&apos;t just dream it—let&apos;s build it! Click now and start
            your project with Tobams Group. Your journey to digital excellence
            begins here.
          </p>
          <button className="w-fit mx-auto text-primary bg-white text-base px-6 py-2.5 font-semibold rounded-xs mt-6">
            Book a Consultation
          </button>
        </div>
      </div>

      <div className="mt-10 p-3 sm:pl-14 border-b border-[#C4C4C44D] pb-6 sm:border-none sm:pb-0">
        <h2 className="text-4xl font-nunito text-center font-bold">
          Testimonials
        </h2>

        <div className="max-w-full mt-8 flex items-center overflow-y-auto gap-5 hide-scrollbar">
          {testimonials.map((testimonial, i) => (
            <div
              className="hidden lg:block p-4 bg-white w-100 rounded-xl border-l-2 border-[#EF4353] shrink-0"
              key={i}
            >
              <header className="flex gap-5 items-center">
                <div className="size-11 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.bussiness}
                    className="size-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-[#696969] text-sm">
                    {testimonial.bussiness}
                  </p>
                </div>
              </header>

              <p className="text-main_text mt-5">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
        <div className="lg:hidden p-4 bg-white max-w-100 rounded-xl border-l-2 border-[#EF4353] shrink-0 mx-auto">
          <header className="flex gap-5 items-center">
            <div className="size-11 rounded-full overflow-hidden">
              <Image
                src={testimonial1}
                alt="Founder, CraftHub NG"
                className="size-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold">Sarah Johnson</p>
              <p className="text-[#696969] text-sm">
                {" "}
                CEO of Tech Innovations Inc.
              </p>
            </div>
          </header>

          <p className="text-main_text mt-5">
            Tobams Group is a true partner in our journey to digital
            excellence. Their creativity and technical expertise have
            propelled our projects to new heights. Their work is top-notch,
            and the results speak for themselves. I can&apos;t recommend them
            enough!
          </p>
        </div>

        <div className="flex gap-4 items-center justify-end mr-4 mt-8">
          <button className="size-8 rounded-lg bg-[#F043541A] text-[#EF4353] flex items-center justify-center cursor-pointer">
            <ChevronLeft size={25} strokeWidth={2.5} />
          </button>
          <button className="size-8 rounded-lg bg-[#F043541A] text-[#EF4353] flex items-center justify-center cursor-pointer">
            <ChevronRight size={25} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="bg-[#1D0617] py-8 px-5 sm:px-14 flex items-start md:items-center sm:justify-between flex-col md:flex-row text-white mt-6.5 sm:mt-10">
        <div>
          <p className="text-sm sm:text-lg mb-3">
            Ready to be a part of something extraodinary?
          </p>
          <h2 className="font-nunito text-xl sm:text-3xl mt-4 font-semibold">
            Let&apos;s work together to create a diffrence
          </h2>
        </div>

        <button className="bg-primary py-2 px-5 cursor-pointer rounded-lg mt-5">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
