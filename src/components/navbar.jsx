import { useState } from "react";
import { Link } from 'react-router-dom';
import { navLinks } from "../constants";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";




function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  
  return (
    <>
            <nav className="w-auto bg-blue-300 shadow-lg shadow-blue-500/50">
              <div className="container mx-auto px-4 py-2 flex items-center justify-between ">
                
                    <div className="md:flex hidden mr-56">
                          <ul className="flex space-x-4">
                            {navLinks.map((nav, index) => (
                              <li
                                key={nav.id}
                                className={`transition duration-300 ${
                                  active === nav.title ? "text-black" : "text-white"
                                } ${index === navLinks.length - 1 ? "mr-0" : "mr-4"}`}
                                onClick={() => setActive(nav.title)}
                              >
                                    <Link to={`/${nav.id}`}>{nav.title}</Link>
                              </li>
                            ))}

                          </ul>
                        </div>
                    

                        

                    <div className="md:hidden flex flex-1 justify-end items-center">

                            {toggle ? (
                                <IoCloseOutline
                                  alt="close"
                                  className="text-black w-[28px] h-[28px] object-contain"
                                  onClick={() => setToggle(!toggle)}
                                />
                              ) : (
                                <IoIosMenu
                                  alt="menu"
                                  className="text-black w-[28px] h-[28px] object-contain"
                                  onClick={() => setToggle(!toggle)}
                                />
                              )}
                        <div
                          className={`${
                            !toggle ? "hidden" : "flex"
                          } z-10 flex-col bg-blue-500 absolute p-10 top-16 left-0 w-full h-full justify-between`}
                        >
                          <ul className="list-none flex flex-col ml-8 tracking-widest">
                            {navLinks.map((nav, index) => (
                              <li
                                key={nav.id}
                                className={`cursor-pointer text-[20px] ${
                                  active === nav.title ? "text-black" : "text-white"
                                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(nav.title)}
                              >
                                 <Link to={`/${nav.id}`}>{nav.title}</Link>
                              </li>
                            ))}

                          </ul>
                         
                        </div>

                    </div>
              </div>
            </nav>
    </>
  );
}

export default Navbar;