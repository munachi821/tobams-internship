import Image from "next/image";
import tobamsLogo from "@/public/tobams-logo.png";
import { ChevronDown, User } from "lucide-react";
import Menu from "./Svg/menu";
const Navbar = () => {
  return (
    <nav className="bg-white w-full absolute top-0 z-10 font-nunito-normal">
      <div className="flex justify-between items-center px-6">
        <div>
          <Image
            src={tobamsLogo}
            alt="tobams group logo"
            className="w-30 sm:w-38"
          />
        </div>

        <div className="gap-3 hidden sm:flex">
          <button className="bg-primary flex text-white text-lg font-semibold items-center px-4 py-2 gap-2 rounded-sm">
            <div className="size-8 rounded-full flex items-center justify-center text-primary bg-[#DDD0DA]">
              <User size={25} />
            </div>
            Account
            <ChevronDown size={18} color="#DDD0DA" />
          </button>
          <button className="bg-[#EF4353] py-2.5 text-white text-lg font-semibold px-5 rounded-sm">
            Take Assessment
          </button>
        </div>
        <div className="sm:hidden">
          <Menu />
        </div>
      </div>
      <div className="border-t border-[#DDD0DA] py-4 hidden lg:block">
        <ul className="w-fit mx-auto flex items-center gap-6 text-lg">
          <li className="flex items-center gap-2 border-b text-primary w-fit cursor-pointer font-semibold">
            About <ChevronDown size={18} color="#571244" className="mt-1" />
          </li>
          <li className="flex items-center gap-2 text-[main_text] w-fit cursor-pointer">
            What We Do
            <ChevronDown size={18} color="#571244" className="mt-1" />
          </li>
          <li className="flex items-center gap-2 text-[main_text] w-fit cursor-pointer">
            Jobs
            <ChevronDown size={18} color="#571244" className="mt-1" />
          </li>
          <li className="flex items-center gap-2 text-[main_text] w-fit cursor-pointer">
            Projects
          </li>
          <li className="flex items-center gap-2 text-[main_text] w-fit cursor-pointer">
            TG Academy
          </li>
          <li className="flex items-center gap-2 text-[main_text] w-fit cursor-pointer">
            Strategic Patnership
          </li>
          <li className="flex items-center gap-2 text-[main_text] w-fit cursor-pointer">
            Pricing
          </li>
          <li className="flex items-center gap-2 text-[main_text] w-fit cursor-pointer">
            Book a Consultation
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
