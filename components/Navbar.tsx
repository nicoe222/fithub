"use client";

import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import logo from "../public/assets/cropped-fithub-tp-logo.png";
import Link from "next/link";
import { links, links1 } from "../data/dummy";
import { Menu, Transition } from "@headlessui/react";
import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBarDrop, setNavBarDrop] = useState(false);

  const handleView = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleNavbar = () => {
      if (window.scrollY > 1) {
        setNavBarDrop(true);
      } else {
        setNavBarDrop(false);
      }
    };

    window.addEventListener("scroll", handleNavbar);
  }, []);

  return (
    <nav className="">
      <div
        className={
          navBarDrop ? `hidden` : `bg-blues hidden md:flex py-3 w-full`
        }
      >
        <div className="px-10 flex items-center justify-between w-full">
          <div className="flex space-x-4 w-full justify-end cursor-pointer">
            <p className="text-sm text-white font-semibold hover:underline">
              Free Trial
            </p>
            <p className="text-white text-sm font-semibold hover:underline">
              Partnership
            </p>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          navBarDrop
            ? `fixed z-50 w-full top-0 ease-in-out duration-1000 delay-300`
            : `w-full top-[-100%] ease-in-out duration-1000 delay-300 bg-sky-500`,
          `bg-sky-500/30 backdrop-blur-lg px-5 sm:px-28`
        )}
      >
        <div className="flex flex-wrap items-center justify-between mx-auto dark:bg-slate-800 w-full">
          <div
            className="hidden w-full md:block md:w-auto dark:bg-slate-800"
            id="navbar-dropdown"
          >
            <ul className="flex p-4 space-x-8 text-sm dark:bg-slate-800 ">
              {links.map((item) => (
                <Menu as="div" key={item.title}>
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center text-sm tracking-tighter font-bold uppercase text-white">
                          {item.title}
                          {open ? (
                            <ChevronUpIcon
                              className="ml-2 -mr-1 h-5 w-5 text-white dark:text-gray-50 hover:text-violet-100"
                              aria-hidden="true"
                            />
                          ) : (
                            <ChevronDownIcon
                              className="ml-2 -mr-1 h-5 w-5 text-white dark:text-gray-50 hover:text-violet-100"
                              aria-hidden="true"
                            />
                          )}
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          className="absolute z-50 mt-2 w-fit origin-top-right divide-y 
              divide-gray-100 rounded-md bg-blues dark:bg-slate-700 shadow-lg  focus:outline-none"
                        >
                          <div className="p-1">
                            {item.links.map((link) => (
                              <Menu.Item key={link.name}>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active
                                        ? " text-white dark:text-gray-50"
                                        : "text-white dark:text-gray-50"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold`}
                                  >
                                    <Link href={link.url}>{link.name}</Link>
                                  </button>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              ))}
              <li className="text-sm tracking-tighter font-bold uppercase text-white">
                <Link href="/aboutus">About Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="/">
              <Image src={logo} alt={"Logo"} width={62} height={50} />
            </Link>
          </div>
          <div>
            <div
              className="hidden w-full md:block md:w-auto dark:bg-slate-800"
              id="navbar-dropdown"
            >
              <ul className="flex p-4 space-x-8 text-sm dark:bg-slate-800 ">
                {links1.map((item) => (
                  <Menu as="div" key={item.title}>
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center text-sm tracking-tighter font-bold uppercase text-white">
                            {item.title}
                            {open ? (
                              <ChevronUpIcon
                                className="ml-2 -mr-1 h-5 w-5 text-white dark:text-gray-50 hover:text-violet-100"
                                aria-hidden="true"
                              />
                            ) : (
                              <ChevronDownIcon
                                className="ml-2 -mr-1 h-5 w-5 text-white dark:text-gray-50 hover:text-violet-100"
                                aria-hidden="true"
                              />
                            )}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            className="absolute z-50 mt-2 w-fit origin-top-right divide-y 
              divide-gray-100 rounded-md bg-blues dark:bg-slate-700 shadow-lg  focus:outline-none"
                          >
                            <div className="p-1">
                              {item.links.map((link) => (
                                <Menu.Item key={link.name}>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? " text-white dark:text-gray-50"
                                          : "text-white dark:text-gray-50"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold`}
                                    >
                                      <Link href={link.url}>{link.name}</Link>
                                    </button>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                ))}
                <li className="text-sm tracking-tighter font-bold uppercase text-white">
                  <Link href="">Event</Link>
                </li>
              </ul>
            </div>
            <div className="md:hidden" onClick={handleView}>
              <AiOutlineMenu
                size={25}
                className="dark:text-gray-50 text-white"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-50"
            : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#F7F7F7] dark:bg-slate-800 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-end">
              <div
                onClick={handleView}
                className="cursor-pointer text-gray-700 dark:text-gray-50 text-lg"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className=" py-2 text-sm">
                    Home
                  </li>
                </Link>

                {links.map((item) => (
                  <Menu
                    as="div"
                    className="focus:outline-none"
                    key={item.title}
                  >
                    {({ open }) => (
                      <>
                        <div className="flex w-full">
                          <Menu.Button className="flex justify-between items-center w-full">
                            <div className="py-2">
                              <span className="uppercase text-sm py-4">
                                {item.title}
                              </span>
                            </div>

                            <div>
                              {open ? (
                                <ChevronUpIcon
                                  className="h-5 w-5 text-gray-700 dark:text-gray-50 hover:text-violet-100"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ChevronDownIcon
                                  className="h-5 w-5 text-gray-700 dark:text-gray-50 hover:text-violet-100"
                                  aria-hidden="true"
                                />
                              )}
                            </div>
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items>
                            <div className="">
                              {item.links.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "text-gray-900 dark:text-gray-50"
                                          : "text-gray-900 dark:text-gray-50"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      <Link
                                        href={item.url}
                                        onClick={() => setNav(false)}
                                      >
                                        {item.name}
                                      </Link>
                                    </button>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                ))}

                {links1.map((item) => (
                  <Menu
                    as="div"
                    className="focus:outline-none"
                    key={item.title}
                  >
                    {({ open }) => (
                      <>
                        <div className="flex w-full">
                          <Menu.Button className="flex justify-between items-center w-full">
                            <div className="py-2">
                              <span className="uppercase text-sm py-4">
                                {item.title}
                              </span>
                            </div>

                            <div>
                              {open ? (
                                <ChevronUpIcon
                                  className="h-5 w-5 text-gray-700 dark:text-gray-50 hover:text-violet-100"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ChevronDownIcon
                                  className="h-5 w-5 text-gray-700 dark:text-gray-50 hover:text-violet-100"
                                  aria-hidden="true"
                                />
                              )}
                            </div>
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items>
                            <div className="">
                              {item.links.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "text-gray-900 dark:text-gray-50"
                                          : "text-gray-900 dark:text-gray-50"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      <Link
                                        href={item.url}
                                        onClick={() => setNav(false)}
                                      >
                                        {item.name}
                                      </Link>
                                    </button>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                ))}

                <Link href="/kontak">
                  <li onClick={() => setNav(false)} className="text-sm py-2">
                    About Us
                  </li>
                </Link>
              </ul>

              <div className="pt-10">
                <hr></hr>
                <p className="uppercase tracking-widest text-[#5651e5] py-2">
                  Let&#39;s Connect
                </p>

                <div className="flex items-center space-x-4 my-4 w-full sm:w-[80%]">
                  <Link href="" className="text-gray-500 hover:text-gray-900">
                    <FaTwitter className="w-4 h-4" />
                  </Link>

                  <Link
                    href=""
                    className="text-gray-500 hover:text-gray-900"
                    onClick={() => setNav(!nav)}
                  >
                    <BsFacebook className="w-4 h-4" />
                  </Link>

                  <Link
                    href=""
                    className="text-gray-500 hover:text-gray-900"
                    onClick={() => setNav(!nav)}
                  >
                    <BsInstagram className="w-4 h-4" />
                  </Link>

                  <Link
                    href=""
                    className="text-gray-500 hover:text-gray-900"
                    onClick={() => setNav(!nav)}
                  >
                    <BsYoutube className="w-4 h-4" />
                  </Link>

                  <Link
                    href=""
                    className="text-gray-500 hover:text-gray-900"
                    onClick={() => setNav(!nav)}
                  >
                    <BsWhatsapp className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
