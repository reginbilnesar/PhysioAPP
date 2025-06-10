"use client";
import Link from "next/link";
import styles from "./links.module.css";
import NavLinks from "./navLink/navLinks";
import { useState } from "react";
const Links = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/About",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  //TEMPOPARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLinks item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLinks item={{ title: "login", path: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLinks item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
