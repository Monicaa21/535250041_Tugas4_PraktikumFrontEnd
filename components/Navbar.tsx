"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `nav-link ${pathname === href ? "active" : ""}`;

  const current = (href: string) =>
    pathname === href ? "page" : undefined;

  return (
    <nav className="navbar navbar-expand-sm" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className={linkClass("/")} aria-current={current("/")} href="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={linkClass("/skinType")} aria-current={current("/skinType")} href="/skinType">Skin Type</Link>
            </li>
            <li className="nav-item">
              <Link className={linkClass("/productRec")} aria-current={current("/productRec")} href="/productRec">Product Recommendation</Link>
            </li>
            <li className="nav-item">
              <Link className={linkClass("/about")} aria-current={current("/about")} href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}