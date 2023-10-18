"use client";

import Link from "next/link";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
const FooterPage = () => {
  return (
    <div className="bg-base-200 p-[2rem] lg:p-[5rem] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <div className="text-center">
          <div>
            <header className="text-2xl font-bold">EventEmpire</header>
            <p>Social Media</p>
            <div className="text-2xl flex gap-2 pt-2 justify-center">
              <BsFacebook
                fill="#316FF6"
                className="hover:text-3xl hover:cursor-pointer"
              />
              <AiFillTwitterCircle
                fill="#26a7de"
                className="hover:text-3xl hover:cursor-pointer"
              />
              <BsLinkedin
                fill="#0072b1"
                className="hover:text-3xl hover:cursor-pointer"
              />
              <BsInstagram
                fill="#feda75"
                className="hover:text-3xl hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div>
          <header className="text-2xl font-bold">EventEmpire</header>
          <ul className="text-sm">
            <li>
              <Link href="" className="">
                Dhaka
              </Link>
            </li>
            <li>
              <Link href="" className="">
                Rajshahi
              </Link>
            </li>
            <li>
              <Link href="" className="">
                Khulna
              </Link>
            </li>
            <li>
              <Link href="" className="">
                Chittagong
              </Link>
            </li>
            <li>
              <Link href="" className="">
                Sylhet
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <header className="text-2xl font-bold">Suppliers</header>
          <ul className="text-sm">
            <li>
              <Link href="" className="">
                Photographers
              </Link>
            </li>
            <li>
              <Link href="" className="">
                Decorators
              </Link>
            </li>
            <li>
              <Link href="" className="">
                Venues Planner
              </Link>
            </li>
            <li>
              <Link href="" className="">
                Designer
              </Link>
            </li>
            <li>
              <Link href="" className="">
                Makeup Artists
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <header className="text-2xl font-bold">Quick Links</header>
          <ul className="text-sm">
            <li>
              <Link href="" className="">
                About Us
              </Link>
            </li>
            <li>
              <Link href="" className="">
                Careers
              </Link>
            </li>
            <li>
              <Link href="" className="">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="" className="">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="" className="">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-[2rem]">
        {" "}
        ©All Right Reserves to EventEmpire 2023
      </p>
    </div>
  );
};

export default FooterPage;
