import Navbar from '../components/navbar';
import { Analytics } from "@vercel/analytics/react"
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="max-w-[960px] mx-auto px-4">
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}

export default MyApp;
