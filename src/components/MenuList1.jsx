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
      to: "/aboutPage",
      icon: <MdDashboard className="mr-4 text-xl" />,
      label: "About",
    },
    {
      id: 2,
      to: "/products",
      icon: <AiOutlineBars className="mr-4 text-xl" />,
      label: "Product",
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
