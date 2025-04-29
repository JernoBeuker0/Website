'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function SidebarShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/projects', label: 'Projects' },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when clicking a link
  };

  return (
    <>
      {/* Burger button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 text-3xl text-gray-800 hover:text-blue-600 transition-colors"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      {/* Always render backdrop but fade it smoothly */}
      <div
        onClick={() => setMenuOpen(false)} // Click backdrop closes menu
        className={`fixed inset-0 z-30 bg-black transition-opacity duration-300 ${
          menuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Sidebar menu */}
      <div
        className={`fixed top-0 left-0 h-full w-1/5 min-w-[200px] bg-white rounded-r-lg shadow-lg p-6 z-40 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6 text-right mt-20">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`transition-all duration-300 transform ${
                    isActive
                        ? 'text-3xl text-black font-bold bg-gray-200 rounded-md px-3 py-2'
                        : 'text-xl text-gray-700 font-semibold hover:text-black hover:scale-105'
                    }`}
                >
                    {link.label}
                </a>
                );
            })}
        </nav>
      </div>

      {/* Page content */}
      <main className="min-h-screen w-full bg-gradient-to-br from-blue-200 to-purple-300 p-6">
        {children}
      </main>
    </>
  );
}
