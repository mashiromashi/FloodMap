import React from "react";

function NavBarItem({ pageName, pageRoute }) {
  return (
    <li>
      <a href={pageRoute}>{pageName}</a>
    </li>
  );
}

export default NavBarItem;
