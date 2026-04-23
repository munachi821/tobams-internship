import Image from "next/image";
import section2img from "@/public/section2_img.jpg";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Thunder from "@/components/Svg/thunder";
import services1 from "@/public/services-1.jpg";
import services2 from "@/public/services-2.jpg";
import services3 from "@/public/services-3.jpg";
import section3img from "@/public/section3_img.jpg";
import section4img from "@/public/section4_img.jpg";
import Thunder_white from "@/components/Svg/thunder_white";
import Thunder_light from "@/components/Svg/thunder_light";
import testimonial1 from "@/public/testimonial1.png";
import testimonial2 from "@/public/testimonial2.png";
import testimonial3 from "@/public/testimonial3.png";
import testimonial4 from "@/public/testimonial4.jpg";
export default function Home() {
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
      <section className="bg-[#F9F9F9] flex items-center justify-center p-12">
        <div className="w-fit gap-10 bg-[#2C0922] rounded-2xl p-7 flex items-center justify-between">
          <div className="w-125 h-130 shrink-0">
            <Image
              src={section3img}
              alt="Management development program"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-white w-140">
            <h2 className="text-[35px] font-nunito">
              Management Development Program
            </h2>
            <div className="text-lg font-normal space-y-5 mt-2">
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

            <div className="w-fit mx-auto flex-col font-semibold space-y-4 mt-4">
              <div className="flex bg-[#8F6182] w-127.5 py-1.5 items-center px-4 gap-3 rounded-lg">
                <Thunder_white /> Enhanced Leadership Skills
              </div>
              <div className="flex bg-[#8F6182] w-127.5 py-1.5 items-center px-4 gap-3 rounded-lg">
                <Thunder_white /> Improved Employee Engagement
              </div>
              <div className="flex bg-[#8F6182] w-127.5 py-1.5 items-center px-4 gap-3 rounded-lg">
                <Thunder_white /> Stronger Organisational Culture
              </div>
              <div className="flex bg-[#8F6182] w-127.5 py-1.5 items-center px-4 gap-3 rounded-lg">
                <Thunder_white /> Sustainable Growth
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F9F9F9] pb-10">
        <div className="bg-white py-10">
          <div className="bg-[#EF435333] p-6 rounded-2xl max-w-6xl mx-auto">
            <div>
              <p className="text-[#1671D9] font-semibold font-nunito italic">
                Learning With Our CEO:
              </p>
              <h2 className="text-2xl text-primary font-semibold font-nunito italic mt-1">
                Transformation Hub with jite Newton
              </h2>
              <p className="text-base text-main_text mt-4">
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
            <div className="mt-4 flex gap-8">
              <div className="w-130 h-80 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={section4img}
                  alt="Transformation Hub with jite Newton"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-[#FFFFFF4D] w-full p-5 py-7 rounded-lg flex my-auto flex-col">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Strategic Career Guidiance",
                    "LeaderShip Development",
                    "CV Development",
                    "Sustainability Leadership",
                    "Communication Skills",
                    "Business Model",
                  ].map((item) => (
                    <div
                      className="bg-white p-3.5 flex gap-3 items-center rounded-lg font-semibold"
                      key={item}
                    >
                      <Thunder_light /> {item}
                    </div>
                  ))}
                </div>
                <button className="w-fit flex items-center gap-2 text-white bg-primary text-base px-5 py-2.5 font-semibold rounded-sm mt-4">
                  Learn More <ArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#5712441A] p-15">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-nunito font-semibold text-3xl text-primary">
            Training The Consultant
          </h2>
          <p className="text-base font-semibold text-primary mt-1.5">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="mt-2 text-main_text">
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified
            training consultant. Learn from professionals in the field, immerse
            yourself in a thorough curriculum, and hone your training methods
            through interactive workshops. Participating in our program will
            enable you to gain expertise in diverse courses while also
            developing the abilities to mentor and encourage others in their
            career advancement.
          </p>

          <div className="grid grid-cols-2 bg-primary p-5 text-white rounded-lg mt-4 gap-4">
            <div>
              <h3 className="font-semibold mb-3">Expert-Led Learning</h3>
              <p>
                Gain insight from seasoned professionals in the field as they
                mentor you through the subtleties of business analysis.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Interactive Workshops</h3>
              <p className="font-normal">
                Engage in hands-on workshops designed to enhance your training
                capabilities and provide practical insights.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Comprehensive Curriculum</h3>
              <p>
                Access a robust curriculum that covers fundamental principles
                and advanced methodologies, ensuring a well-rounded
                understanding.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Global Recognition</h3>
              <p>
                Engage in hands-on workshops designed to enhance your training
                capabilities and provide practical insights.
              </p>
            </div>
          </div>
          <button className="w-fit flex items-center gap-2 text-white bg-primary text-base px-6 py-2.5 font-semibold rounded-sm mt-9">
            Learn More <ArrowUpRight />
          </button>
        </div>
      </section>
      <section className="py-8 bg-[#F9F9F9]">
        <div className="bg-primary max-w-5xl mx-auto font-nunito p-9 flex flex-col items-center justify-center rounded-md">
          <p className="text-white text-center text-lg font-semibold">
            Want to accelerate professional growth and development at your
            organisation? <br /> See how we can help.
          </p>
          <button className="w-fit mx-auto text-primary bg-white text-base px-6 py-2.5 font-semibold rounded-xs mt-6">
            Book a Consultation
          </button>
        </div>

        <div className="mt-10 pl-14">
          <h2 className="text-4xl font-nunito text-center font-bold">
            Testimonials
          </h2>

          <div className="max-w-full mt-8 flex items-center overflow-y-auto gap-5 hide-scrollbar">
            {testimonials.map((testimonial, i) => (
              <div
                className="p-4 bg-white w-100 rounded-xl border-l-2 border-[#EF4353] shrink-0"
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

          <div className="flex gap-4 items-center justify-end mr-4 mt-8">
            <button className="size-8 rounded-lg bg-[#F043541A] text-[#EF4353] flex items-center justify-center cursor-pointer">
              <ChevronLeft size={25} strokeWidth={2.5} />
            </button>
            <button className="size-8 rounded-lg bg-[#F043541A] text-[#EF4353] flex items-center justify-center cursor-pointer">
              <ChevronRight size={25} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="bg-[#1D0617] py-8 px-10 flex items-center justify-between text-white mt-10">
          <div>
            <p className="text-lg">
              Ready to be a part of something extraodinary?
            </p>
            <h2 className="font-nunito text-3xl mt-4 font-semibold">
              Let&apos;s work together to create a diffrence
            </h2>
          </div>

          <button className="bg-primary py-2 px-5 cursor-pointer">
            Get In Touch
          </button>
        </div>
      </section>
    </main>
  );
}
