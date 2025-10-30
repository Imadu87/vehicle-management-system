import Image from "next/image";
import profile from "@/public/images/profile.png";
import notification from "@/public/images/Notification.png";

export default function Navbar() {
  return (
    <header className="fixed w-full bg-[#222434ED] shadow-sm px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
      {/* Left side - Logo text */}
      <div className="text-xl font-bold text-white whitespace-nowrap">Logo</div>

      {/* Right side - Notification + Profile */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notification Icon */}
        <button className="relative">
          <Image
            src={notification}
            alt="Notification Icon"
            width={22}
            height={22}
            className="object-contain"
            priority
          />
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-2 sm:gap-4 cursor-pointer">
          <span className="font-medium text-base text-white hidden sm:block">
            Mr Jack
          </span>
          <Image
            alt="Profile Image"
            src={profile}
            width={42}
            height={42}
            className="rounded-full border-2 border-white object-cover"
            priority
          />
        </div>
      </div>
    </header>
  );
}
