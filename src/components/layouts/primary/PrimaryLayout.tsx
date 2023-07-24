import Footer from '@/components/navigation/header/Footer';
import Header from '@/components/navigation/header/Header';
import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>PrimaryLayout</title>
      </Head>

      <Header />
      <div {...divProps}>
        <main className="flex">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
