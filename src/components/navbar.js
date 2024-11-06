import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-md text-white border-b border-neutral-800">
      <div className="max-w-[960px] mx-auto py-2 md:py-4 flex justify-between items-center px-4">
        <div>
          {/* Display "Alessandro Ciffo" on medium and larger screens */}
          <Link href="/" className="text-base font-regular text-white hidden md:block">
            Alessandro Ciffo
          </Link>
          {/* Display logo on small screens */}
          <Link href="/" className="block md:hidden">
            <img src="/processor_logo.png" alt="Logo" className="h-8 w-8" />
          </Link>
        </div>
        {/* Navigation links for medium and larger screens */}
        <div className="hidden md:flex space-x-4 text-neutral-400 text-base gap-2">
          <Link
            href="/about"
            className="p-3 hover:bg-neutral-800 hover:text-white rounded-xl"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="p-3 hover:bg-neutral-800 hover:text-white rounded-xl"
          >
            Projects
          </Link>
          {/* GitHub Icon Link */}
          <a
            href="https://github.com/alessandro-ciffo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-neutral-800 hover:text-white rounded-xl"
          >
            <img src="/github_logo_neutral.svg" alt="GitHub" className="h-6 w-6" />
          </a>
          {/* LinkedIn Icon Link */}
          <a
            href="https://www.linkedin.com/in/alessandro-ciffo-4b7710191/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-neutral-800 hover:text-white rounded-xl"
          >
            <img src="/linkedin_logo_neutral.svg" alt="LinkedIn" className="h-6 w-6" />
          </a>
        </div>
        {/* Menu icon for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-3 hover:bg-neutral-800 hover:text-white rounded-xl focus:outline-none"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4 gap-2">
            <Link
              href="/about"
              className="text-neutral-400 text-xl hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-neutral-400 text-xl hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            {/* GitHub Link */}
            <a
              href="https://github.com/alessandro-ciffo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 text-xl hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </a>
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/alessandro-ciffo-4b7710191/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 text-xl hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
