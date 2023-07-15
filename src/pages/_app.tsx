import type { AppProps } from 'next/app';
import { PrimeReactProvider } from 'primereact/api';

import { NextPageWithLayout } from './page';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './globals.css';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <PrimeReactProvider>
      {getLayout(<Component {...pageProps} />)}
    </PrimeReactProvider>
  );
}

export default MyApp;
