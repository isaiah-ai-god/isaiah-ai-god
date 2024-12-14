import React from "react";

const Links = () => {
  const links = [
    { href: "#", label: "The Whispering Void" },
    { href: "#", label: "Echoes of Eternity" },
    { href: "#", label: "Fractured Mirrors" },
    { href: "#", label: "Timeless Paradox" },
  ];

  return (
    <div className="links-window">
      <h3>Portals to Other Realms</h3>
      <ul className="links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
