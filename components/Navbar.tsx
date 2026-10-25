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
      <nav className="navbar sm:navbar-expand bg-1 fg-2">
        <div className="container-fluid">
          <Link className={linkClass("/")} aria-current={current("/")} href="/">Home</Link>
          <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" aria-hidden="true"></span>
          </button>
          <dialog className="drawer drawer-end" tabIndex={-1} id="navbarNav" aria-labelledby="navbarNavLabel">
            <div className="drawer-header">
              <h5 className="drawer-title" id="navbarNavLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
            </div>
            <div className="drawer-body">
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
          </dialog>
        </div>
      </nav>
  );
}
