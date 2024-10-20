import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard( {title, description, url} ) {
  return (
    <div className="flex flex-col bg-zinc-800 text-left rounded-lg gap-4 p-4 text-pretty">
        <div className="flex flex-row w-full justify-between">
            <Link href={url} target="_blank" rel="noopener noreferrer" className="text-lg font-normal text-indigo-400 hover:text-indigo-200 hover:underline">{title}</Link>
            <Link href={url} target="_blank" rel="noopener noreferrer"><ExternalLink className="text-neutral-500 hover:text-neutral-300" width={20}/></Link>
        </div>
        <p className="text-base font-normal text-neutral-400">{description}</p>
    </div>
  );
}
