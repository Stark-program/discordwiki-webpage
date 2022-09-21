import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Nav from '../components/messages/Nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
