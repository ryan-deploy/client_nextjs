import type { AppProps } from 'next/app';

import { NextPageWithLayout } from './page';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './globals.css';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      {/* [Viewport `meta` tags should not be used in `_document.js` `<Head>`](https://nextjs.org/docs/messages/no-document-viewport-meta) */}
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
