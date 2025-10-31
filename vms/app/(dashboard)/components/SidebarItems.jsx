import dashboardIcon from "@/public/images/dashboard.png";
import userIcon from "@/public/images/user.png";
import driverIcon from "@/public/images/driver.png";
import vehicleIcon from "@/public/images/vehicle.png";
import settingIcon from "@/public/images/setting.png";

const menuItems = [
  { name: "Dashboard", icon: dashboardIcon, link: "/" },
  { name: "User", icon: userIcon, link: "/user" },
  {
    name: "Driver",
    icon: driverIcon,
    link: "/getAllDriver",
    subItems: [
      { name: "All Drivers", link: "/getAllDriver" },
      { name: "Balance List", link: "/driver/balane" },
    ],
  },
  { name: "Vehicle", icon: vehicleIcon, link: "/vehicle" },
  { name: "Setting", icon: settingIcon, link: "/setting" },
];

export default menuItems;
