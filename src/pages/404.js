import Link from 'next/link';
import Image from 'next/image';

// const NotFoundPage = () => {
//     return (
//         <div className="flex flex-row px-4 py-40 gap-10 bg-zinc-800 justify-between">
//             <div className="flex flex-col bg-zinc-700 gap-4">
//                 <h1 className="text-5xl text-white font-bold">404 - Page not found</h1>
//                 <p className="text-2xl text-neutral-400">The page you are looking for does not exist.</p>
//                 <Link href="/" className="text-xl text-indigo-500 hover:text-indigo-300 font-medium">Go back to the homepage &rarr;</Link>
//             </div>
//             <Image 
//                 src="/vincent.gif" 
//                 alt="Vincent Vega confused" 
//                 width={300} 
//                 height={300} 
//                 className="rounded-lg"
//             />
//         </div>
//     );
// };

const NotFoundPage = () => {
    return (
        <section className="flex flex-col max-w-[1200px] px-4 py-20 gap-10 justify-between items-center">
            <div className="w-full max-w-xs">
                <Image 
                    src="/vincent.gif" 
                    alt="Vincent Vega confused" 
                    layout="responsive" 
                    width={300} 
                    height={300} 
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-8 text-center">
                <h1 className="text-3xl md:text-5xl text-white font-bold">404 - Page not found</h1>
                <p className="text-xl md:text-2xl text-neutral-400">The page you are looking for does not exist.</p>
                <Link href="/" className="text-xl text-indigo-500 hover:text-indigo-300 font-medium">Go back to the homepage &rarr;</Link>
            </div>
        </section>
    );
};


export default NotFoundPage;