import { Dock, DockIcon } from "@/components/magicUI/NavbarDock";
import React from "react";
import { FaHome } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaBlog } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

const Navbar = () => {
  return (
    <Dock>
      <DockIcon>
        <FaHome />
      </DockIcon>
      <DockIcon>
        <CgWebsite />
      </DockIcon>
      <DockIcon>
        <FaBlog />
      </DockIcon>
      <DockIcon>
        <GiSkills />
      </DockIcon>
      <DockIcon>
        <MdAccountCircle />
      </DockIcon>
    </Dock>
  );
};
export default Navbar;
