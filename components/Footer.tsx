import Image from "next/image";
import tobamsLogo from "@/public/tobams-logo.png";
import X from "@/components/Svg/x";
import Linkedin from "./Svg/linkedin";
import Instagram from "./Svg/instagram";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#11040E] py-8 px-15 text-white border-t-2 border-[#C4C4C4]">
      <div className="flex justify-between">
        <div className="w-83 font-light">
          <Image src={tobamsLogo} alt="tobams group logo" className="w-38" />

          <p>
            Tobams Group is an innovative consultancy firm reshaping the future
            of tech talent development in Africa, specializing in talent
            acquisition, internships, and skill development with a global
            perspective.
          </p>

          <div className="flex gap-5 mt-4">
            <Linkedin /> <Instagram /> <X />
          </div>
        </div>

        <ul className="space-y-2 mt-4 font-light">
          <li className="text-lg font-semibold mb-3">What We Do</li>
          <li>Sustainability Service</li>
          <li>Strategy Planning and Implementation</li>
          <li>Tech Talent Solutions</li>
          <li>Training and Development</li>
          <li>IT Consulting Services</li>
          <li>Social Impact</li>
          <li>Talent Recruitment</li>
        </ul>

        <ul className="space-y-2 mt-4 font-light">
          <li className="text-lg font-semibold mb-3">Company</li>
          <li>About</li>
          <li>Jobs</li>
          <li>Projects</li>
          <li>Our Founder</li>
          <li>Business Model</li>
          <li>The Team</li>
          <li>Contact Us</li>
          <li>Blog</li>
          <li>FAQs</li>
          <li>Testimonials</li>
        </ul>

        <ul className="space-y-2 mt-4 font-light">
          <li className="text-lg font-semibold mb-3">Solution</li>
          <li>Tobams Group Academy</li>
          <li>Help a Tech Talent</li>
          <li>Campus Ambassadors Program</li>
          <li>Join Our Platform</li>
          <li>Pricing</li>
          <li>Book a Consultation</li>
          <li>Join Our SLack COmmunity</li>
        </ul>
      </div>

      <div className="bg-[#FFFFFF0F] rounded-md px-5 py-7 flex mt-15">
        <div>
          <h3 className="font-nunito text-lg">Registered Offices</h3>

          <div className="flex mt-2">
            <div>
              <p className="font-light">
                <span className="text-[#EF4353]">United Kingdom</span>
                <br />
                07451196 (Registered by Company House) Vine Cottages, 215 North
                Street, Romford, Essex, United Kingdom, RM1 4QA
              </p>
            </div>
            <div className="border-l pl-5 border-[#DDD0DA]/10">
              <p className="font-light">
                <span className="text-[#EF4353]">Nigeria</span>
                <br />
                RC 1048722 (Registered by the Corporate Affairs Commission) 4,
                Muaz Close, Angwar-Rimi
              </p>
            </div>
          </div>
        </div>

        <div className="border-l pl-5 border-[#DDD0DA]/10">
          <h3 className="font-nunito text-lg">Contact Information</h3>
          <div className="mt-4 space-y-2.5">
            <p className="flex gap-3 items-center">
              <Mail color="#ef4353" size={20} /> theteam@tobamsgroup.com
            </p>
            <p className="flex gap-3 items-center">
              <Phone color="#ef4353" size={20} /> +447886600748
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between font-extralight border-t border-[#DDD0DA]/10 py-4 mt-8">
        <p>Copyright ⓒ Tobams Group, 2024. All rights reserved.</p>

        <ul className="flex gap-3 items-center">
          <li className="underline">
            <Link href="/">Terms and Conditions</Link>
          </li>
          <li className="underline">
            <Link href="/">Privacy Policy</Link>
          </li>
          <li className="underline">
            <Link href="/">Cookies Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
