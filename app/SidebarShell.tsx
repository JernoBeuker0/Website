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
    { href: '/admin', label: 'Admin' },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when clicking a link
  };

  return (
    <>
      {/* Burger button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 text-3xl text-gray-300 hover:text-blue-500 transition-colors"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-30 bg-black transition-opacity duration-300 ${
          menuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-1/5 min-w-[200px] bg-[#161B22] text-[#E6EDF3] rounded-r-lg shadow-lg p-6 z-40 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col justify-between h-full">
          {/* Top Links */}
          <div className="flex flex-col gap-6 text-right mt-20">
            {navLinks
              .filter((link) => link.label !== 'Admin')
              .map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`transition-all duration-300 transform ${
                      isActive
                        ? 'text-xl text-[#E6EDF3] font-bold bg-[#30363D] rounded-md px-3 py-2'
                        : 'text-xl text-[#8B949E] font-semibold hover:text-[#E6EDF3] hover:scale-105'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
          </div>

          {/* Admin Link at Bottom */}
          <div className="text-right mt-10">
            {(() => {
              const link = navLinks.find((l) => l.label === 'Admin');
              if (!link) return null;
              const isActive = pathname === link.href;
              return (
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`transition-all duration-300 transform ${
                    isActive
                      ? 'text-xl text-[#E6EDF3] font-bold bg-[#30363D] rounded-md px-3 py-2'
                      : 'text-xl text-[#8B949E] font-semibold hover:text-[#E6EDF3] hover:scale-105'
                  }`}
                >
                  {link.label}
                </a>
              );
            })()}
          </div>
        </nav>
      </div>

      {/* Page content */}
      <main className="min-h-screen w-full bg-[#0D1117] p-6">
        {children}
      </main>
    </>
  );
}