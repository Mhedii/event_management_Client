import React, { useState } from "react";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import Link from "next/link";

type SidebarItem = {
  label: string | JSX.Element;
  key: string;
  icon?: JSX.Element;
  children?: SidebarItem[];
};
const Sidebar = (role: string) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const items: SidebarItem[] = [
    {
      label: "Profile",
      key: "profile",
      icon: <TiArrowRight />,
      children: [
        {
          label: (
            <Link href="/admin/profile">
              <p>Account Profile</p>
            </Link>
          ),
          key: "/admin/profile",
        },
        {
          label: (
            <Link href="/admin/change-password">
              <a>Change Password</a>
            </Link>
          ),
          key: "/admin/change-password",
        },
        {
          label: (
            <Link href="/admin/manage-student">
              <a>Manage Students</a>
            </Link>
          ),
          // icon: <Table set="bulk" />,
          key: "/admin/manage-student",
        },
        {
          label: (
            <Link href="/admin/manage-service">
              <a>Manage Services</a>
            </Link>
          ),
          // icon: <Table set="bulk" />,
          key: "/admin/manage-service",
        },
        {
          label: (
            <Link href="/admin/manage-booking">
              <a>Manage Bookings</a>
            </Link>
          ),
          // icon: <Table set="bulk" />,
          key: "/admin/manage-booking",
        },
        {
          label: (
            <Link href="/admin/manage-profile">
              <a>Manage Profiles</a>
            </Link>
          ),
          // icon: <Table set="bulk" />,
          key: "/admin/manage-profile",
        },
        {
          label: "Manage Content",
          key: "manage-content",
          // icon: <Table set="bulk" />,
          children: [
            {
              label: (
                <Link href="/admin/academic/faculty">
                  <a>Faculties</a>
                </Link>
              ),
              key: "/admin/academic/faculty",
            },
            {
              label: (
                <Link href="/admin/academic/department">
                  <a>Departments</a>
                </Link>
              ),
              key: "/admin/academic/department",
            },
            {
              label: (
                <Link href="/admin/academic/semester">
                  <a>Semesters</a>
                </Link>
              ),
              key: "/admin/academic/semester",
            },
          ],
        },
        {
          label: (
            <Link href="/admin/manage-admin">
              <a>Manage Admins</a>
            </Link>
          ),
          // icon: <Table set="bulk" />,
          key: "/admin/manage-admin",
        },
        {
          label: (
            <Link href="/admin/manage-user">
              <a>Manage Users</a>
            </Link>
          ),
          // icon: <Table set="bulk" />,
          key: "/admin/manage-user",
        },
        {
          label: "Manage Permission",
          key: "manage-permission",
          // icon: <Collection set="bulk" />,
          children: [
            {
              label: (
                <Link href="/admin/permission">
                  <a>View Permissions</a>
                </Link>
              ),
              key: "/admin/permission",
            },
          ],
        },
        {
          label: (
            <Link href="/admin/profile">
              <a>Profile</a>
            </Link>
          ),
          key: "profile",
          // icon: <Table set="bulk" />,
        },
      ],
    },
    {
      label: (
        <Link href="/admin/manage-student">
          <a>Manage Students</a>
        </Link>
      ),
      icon: <TiArrowRight />,
      key: "/admin/manage-student",
    },
    // Add other sidebar items here...
  ];

  return (
    <div className="min-h-screen flex">
      <aside
        className={`w-16 p-4 bg-blue-700 flex flex-col items-center justify-between ${
          collapsed ? "w-16" : "w-60"
        }`}
      >
        <div>
          <button
            className="text-white focus:outline-none"
            onClick={toggleCollapse}
          >
            {collapsed ? <TiArrowRight size={24} /> : <TiArrowLeft size={24} />}
          </button>
        </div>
        <ul>
          {items.map((item) => (
            <li key={item.key} className="mb-2">
              <a
                href={item.key}
                className="flex items-center"
                onClick={() => setCollapsed(false)}
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
