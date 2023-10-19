import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import sidebarItems from "@/constants/sidebarItems"; // Corrected import
import { USER_ROLE } from "@/constants/role";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const role = USER_ROLE.ADMIN;

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const sidebarMenuItems = sidebarItems(role);
  console.log(sidebarMenuItems);
  console.log(sidebarItems(role));
  return (
    <div className="flex h-screen">
      <div
        className={`${
          collapsed ? "w-16" : "w-60"
        } bg-blue-700 text-white transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-bold">
            {collapsed ? (
              <FaChevronRight onClick={toggleCollapse} />
            ) : (
              <FaChevronLeft onClick={toggleCollapse} />
            )}
          </div>
        </div>
        <ul>
          {sidebarMenuItems.map((item) => (
            <li key={item.key} className="mb-2">
              <a href={item.link} className="flex items-center">
                <i className={`mr-2 ${item.icon}`} />
                {!collapsed && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <main className="flex-1 p-4">{/* Content for the main area */}</main>
    </div>
  );
};

export default SideBar;
