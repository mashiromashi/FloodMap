import React from "react";

const NavBarItem = ({ pageName, pageRoute }) => {
  return (
    <li>
      <a href={pageRoute}>{pageName}</a>
    </li>
  );
}

export default NavBarItem;
