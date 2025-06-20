import { TbBrandProducthunt } from "react-icons/tb"; 
import { AiOutlineUser } from "react-icons/ai"; 
import { BiErrorCircle } from "react-icons/bi"; 
import { BiMessageAltError } from "react-icons/bi"; 
import { BiError } from "react-icons/bi"; 
import { MdDashboard } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { FiHeadphones } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const MenuList = () => {
  const menuItems = [
    {
      id: 1,
      to: "/dashboard",
      icon: <MdDashboard className="mr-4 text-xl" />,
      label: "Dashboard",
    },
    {
      id: 2,
      to: "/orders",
      icon: <AiOutlineBars className="mr-4 text-xl" />,
      label: "Orders",
    },
    {
      id: 3,
      to: "/customers",
      icon: <FiHeadphones className="mr-4 text-xl" />,
      label: "Customers",
    },
    {
      id: 4,
      to: "/error-400",
      icon: <BiMessageAltError className="mr-4 text-xl" />,
      label: "Error 400",
    },
     {
      id: 5,
      to: "/user",
      icon: <AiOutlineUser className="mr-4 text-xl" />,
      label: "User",
    },
    {
      id: 6,
      to: "/products",
      icon: <TbBrandProducthunt className="mr-4 text-xl" />,
      label: "Products",
    },
    {
      id: 7,
       to: "/error-401",
      icon: <BiError className="mr-4 text-xl" />,
      label: "Error 401",
    },
    {
      id: 8,
      to: "/error-402",
      icon: <BiErrorCircle className="mr-4 text-xl" />,
      label: "Error 402",
    },
  ];

  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    ${isActive 
      ? "text-hijau bg-green-200 font-extrabold" 
      : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <ul className="space-y-3">
      {menuItems.map((item) => (
        <li key={item.id}>
          <NavLink to={item.to} className={menuClass}>
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
