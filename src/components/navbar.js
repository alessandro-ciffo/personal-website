import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="shadow-md text-white border-b border-neutral-800">
      <div className="max-w-[960px] mx-auto py-2 md:py-4 flex justify-between items-center px-4">
        <div>
          <Link href="/" className="text-base font-regular text-white">
            Alessandro Ciffo
          </Link>
        </div>
        <div className="flex space-x-4 text-neutral-400 text-base gap-2">
          <Link href="/about" className="p-3 hover:bg-neutral-800 hover:text-white rounded-xl">
            About
          </Link>
          <Link href="/projects" className="p-3 hover:bg-neutral-800 hover:text-white rounded-xl">
            Projects
          </Link>
          {/* GitHub Icon Link */}
          <a
            href="https://github.com/alessandro-ciffo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-neutral-800 hover:text-white rounded-xl"
          >
            <img src="/github_logo_neutral.svg" alt="GitHub" className="h-6 w-6"/>
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
      </div>
    </nav>
  );
}
