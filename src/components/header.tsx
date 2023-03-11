import { useState } from "react";

function Header() {
  return (
    <nav className="w-full p-1 border-b-2 flex-1 h-20 md:h-24 overflow-hidden">
      <img
        src="meski_logo.jpeg"
        className="h-full m-auto sm:m-0 cursor-pointer"
        onClick={() => {
          document.location.href = "/";
        }}
      />
    </nav>
  );
}

export default Header;
