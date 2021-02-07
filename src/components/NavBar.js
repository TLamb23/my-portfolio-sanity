import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-gray-400 hover:text-white text-4xl font-bold cursive tracking widest"
          >
            Tanner Lambert
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-white"
            activeClassName="text-black bg-gray-600"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-white"
            activeClassName="text-black bg-gray-600"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-white"
            activeClassName="text-black bg-gray-600"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/tllaxman23"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCx9Aah334A7o9b8XTcBMavw"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/tanner-lambert"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 50, width: 50 }}
          />
        </div>
      </div>
    </header>
  );
}
