import Navbar from '../components/navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="container max-w-[960px] mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
