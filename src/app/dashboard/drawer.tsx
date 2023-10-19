import SideBar from "@/components/ui/Sidebar";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";
import { useGetServicesQuery } from "@/redux/features/services/serviceApi";

const items = [
  { label: "Option 1", key: "1" },
  { label: "Option 2", key: "2" },
  {
    label: "Home",
    key: "sub1",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Team",
    key: "sub2",
    // icon: "fas fa-users",
    children: [
      { label: "Team 1", key: "6" },
      { label: "Team 2", key: "8" },
    ],
  },
  { label: "Files", key: "9" },
];

const DrawerPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="min-h-screen flex">
      <aside
        className={`w-16 p-4 bg-black rounded-lg text-white ${
          collapsed ? "w-16" : "w-60"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="text-white text-2xl font-bold">
            {collapsed ? (
              <i className="fas fa-chevron-right" />
            ) : (
              <i className="fas fa-chevron-left" />
            )}
          </div>
          <button
            className="text-white focus:outline-none"
            onClick={toggleCollapse}
          >
            <CiMenuFries className="text-2xl font-extrabold " />
          </button>
        </div>
        <ul>
          {items.map((item) => (
            <li key={item.key} className="mb-2">
              <a href={item.to} className="flex items-center">
                <span className="mr-2 text-xl">{item?.icon}</span>

                {!collapsed && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-4">
        <nav className="bg-gray-100 p-4 rounded-md shadow-md">
          <div className="max-w-xs text-sm breadcrumbs">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Documents</a>
              </li>
              <li>Add Document</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md min-h-screen">
            <p>Bill is a cat.</p>
            <p>{}</p>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default DrawerPage;
