"use client";

import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/imgs/logo.png"
                      alt="Sichuan Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="hidden sm:block text-white font-bold text-lg">
                    SICHUAN{" "}
                    <span className="text-red-600 longcang">川里川外</span>
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white text-sm tracking-wide transition-colors duration-200 roboto-regular relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
                <a
                  href="tel:+33147706411"
                  className="flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-full transition-all duration-300 roboto-regular"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Reserver
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Ouvrir le menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          <DisclosurePanel className="md:hidden">
            <div className="glass mx-4 mb-4 rounded-xl overflow-hidden">
              <div className="space-y-1 px-4 py-4">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 roboto-regular"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
                <a
                  href="tel:+33147706411"
                  className="flex items-center justify-center gap-2 mx-4 mt-4 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300 roboto-regular"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Reserver
                </a>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
