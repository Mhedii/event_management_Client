"use client";
import Link from "next/link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
const Navbar = () => {
  let isUser = true;
  // const closeDropDown;
  return (
    <>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn  bg-transparent lg:hidden">
              <HiOutlineMenuAlt1 className="text-2xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              <li>
                <Link href="Home">Home</Link>
              </li>
              <li>
                <Link href="Home">Venue</Link>
              </li>
              <li>
                <Link href="Home">Suppliers</Link>
              </li>
              <li>
                <Link href="Home">About Us</Link>
              </li>
              <li>
                <Link href="Home">Contact Us</Link>
              </li>
              <li>
                <Link href="Home">Venue</Link>
              </li>
            </ul>
          </div>
          <a className=" text-3xl font-semibold">EventEmpire</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1 ">
            <li>
              <Link className="hover:text-blue-700" href="Home">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-700 " href="Home">
                Venue
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-700 " href="Home">
                Suppliers
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-700 " href="Home">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-700 " href="Home">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-700 " href="Home">
                Venue
              </Link>
            </li>
          </ul>
        </div>
        {isUser ? (
          <div className="navbar-end">
            <button className="btn-primary btn-sm text-white rounded-lg font-medium">
              LogOut
            </button>
          </div>
        ) : (
          <div className="navbar-end">
            <button className="btn-primary btn-sm text-white rounded-lg font-thin mr-2">
              Login
            </button>
            <button className="btn-primary btn-sm text-white rounded-lg font-medium">
              SignUp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
