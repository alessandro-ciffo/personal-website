import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="shadow-md text-white border-b border-neutral-800">
      <div className="container max-w-[1200px] mx-auto px-4 py-2 md:py-6 flex justify-between items-center">
        <div>
          <Link href="/" className="text-xl font-regular text-white">
            Alessandro Ciffo
          </Link>
        </div>
        <div className="flex space-x-4 text-neutral-400 text-xl gap-2">
          <Link href="/about" className="p-4 hover:bg-neutral-800 hover:text-white rounded-xl">About</Link>
          <Link href="/projects" className="p-4 hover:bg-neutral-800 hover:text-white rounded-xl">Projects</Link>
          <Link href="/contact" className="p-4 hover:bg-neutral-800 hover:text-white rounded-xl">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
