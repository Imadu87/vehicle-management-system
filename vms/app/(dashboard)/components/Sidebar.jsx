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
      className="fixed top-16 left-0 w-60 h-screen bg-[#27273AEB] backdrop-blur-sm bg-cover bg-no-repeat bg-center p-4 hidden md:flex flex-col justify-between"
      style={{
        backgroundImage:
          "linear-gradient(rgba(39,39,58,0.95), rgba(39,39,58,0.95)), url('/images/sidebar.png')",
      }}
    >
      {/* Menu Section */}
      <nav className="flex flex-col text-white mt-6">
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <button
              onClick={() => handleMenuClick(item, index)}
              className="group flex items-center gap-3 py-3 px-4 rounded-lg relative text-left transition-all duration-300"
            >
              <Image src={item.icon} alt={item.name} width={22} height={22} />
              <span className="text-[16px] font-medium group-hover:text-white/90 transition-colors duration-300">
                {item.name}
              </span>

              {/* underline */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white/60 translate-y-2 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* Submenu */}
            {item.subItems && openMenu === index && (
              <div className="flex flex-col pl-10 mt-2 space-y-2">
                {item.subItems.map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    href={sub.link}
                    className={`flex items-center gap-2 text-[15px] transition-all duration-200 ${
                      subIndex === 0
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    {sub.name}
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
