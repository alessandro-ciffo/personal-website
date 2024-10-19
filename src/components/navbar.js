import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="shadow-md text-white border-b border-neutral-800">
      <div className="container max-w-[960px] mx-auto px-4 py-2 md:py-4 flex justify-between items-center">
        <div>
          <Link href="/" className="text-base font-regular text-white">
            Alessandro Ciffo
          </Link>
        </div>
        <div className="flex space-x-4 text-neutral-400 text-base gap-2">
          <Link href="/about" className="p-3 hover:bg-neutral-800 hover:text-white rounded-xl">About</Link>
          <Link href="/projects" className="p-3 hover:bg-neutral-800 hover:text-white rounded-xl">Projects</Link>
          <Link href="/contact" className="p-3 hover:bg-neutral-800 hover:text-white rounded-xl">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
