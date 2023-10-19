import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const items = [
  { label: "Option 1", key: "1", icon: "fas fa-chart-pie" },
  { label: "Option 2", key: "2", icon: "fas fa-desktop" },
  {
    label: "User",
    key: "sub1",
    icon: "fas fa-user",
    children: [
      { label: "Tom", key: "3" },
      { label: "Bill", key: "4" },
      { label: "Alex", key: "5" },
    ],
  },
  {
    label: "Team",
    key: "sub2",
    icon: "fas fa-users",
    children: [
      { label: "Team 1", key: "6" },
      { label: "Team 2", key: "8" },
    ],
  },
  { label: "Files", key: "9", icon: "fas fa-file" },
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
              <a href="#" className="flex items-center">
                <i className={`mr-2 ${item.icon}`} />
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
          </div>
        </nav>
      </main>
    </div>
  );
};

export default DrawerPage;
