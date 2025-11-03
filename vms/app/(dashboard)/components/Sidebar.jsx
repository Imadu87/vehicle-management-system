"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import menuItems from "./SidebarItems";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);
  const router = useRouter();

  const handleMenuClick = (item, index) => {
    setOpenMenu(openMenu === index ? null : index);
    if (item.link) {
      router.push(item.link);
    }
  };

  return (
    <aside
      className="fixed top-16 left-0 h-screen bg-[#27273AEB] backdrop-blur-sm bg-cover bg-no-repeat bg-center 
      p-4 flex flex-col justify-between w-16 md:w-60"
      style={{
        backgroundImage:
          "linear-gradient(rgba(39,39,58,0.95), rgba(39,39,58,0.95)), url('/images/sidebar.png')",
      }}
    >
      {/* Menu */}
      <nav className="flex flex-col text-white mt-6">
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            {/* Main Menu Button */}
            <button
              onClick={() => handleMenuClick(item, index)}
              className="group flex items-center gap-0 md:gap-3 py-3 px-2 md:px-4 rounded-lg relative 
              justify-center md:justify-start transition-all duration-300"
            >
              {/* Icon always */}
              <Image
                src={item.icon}
                alt={item.name}
                width={22}
                height={22}
                className="block"
              />

              {/* Text only desktop */}
              <span className="hidden md:inline text-[16px] font-medium group-hover:text-white/90 transition-colors duration-300">
                {item.name}
              </span>

              {/* underline hover desktop */}
              <span
                className="hidden md:block absolute left-0 bottom-0 w-0 h-0.5 bg-white/60 translate-y-2 
              transition-all duration-300 group-hover:w-full"
              ></span>
            </button>

            {/* Sub Menu */}
            {item.subItems && openMenu === index && (
              <div className="flex flex-col pl-1 md:pl-10 mt-2 space-y-2">
                {item.subItems.map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    href={sub.link}
                    className={`flex items-center gap-0 md:gap-2 text-[14px] transition-all duration-200 
                    justify-center md:justify-start ${
                      subIndex === 0
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {/* ✅ Mobile: submenu icons only */}
                    <Image
                      src={sub.icon}
                      alt={sub.name}
                      width={16}
                      height={16}
                      className="block md:hidden"
                    />

                    {/* ✅ Desktop: dot bullet */}
                    <span className="hidden md:inline w-1.5 h-1.5 rounded-full bg-white"></span>

                    {/* ✅ Desktop text only */}
                    <span className="hidden md:inline">{sub.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
