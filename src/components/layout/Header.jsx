import React from "react";
import NavFloatingAceV2 from "./NavFloatingAceV2";
import NavLinkHeaderLeft from "./NavLinkHeaderLeft";

function Header() {
  return (
    <div className="flex items-center justify-between fixed top-4 inset-x-0 z-[999999] w-full ">
      <NavLinkHeaderLeft />
      <NavFloatingAceV2 />
    </div>
  );
}

export default Header;
