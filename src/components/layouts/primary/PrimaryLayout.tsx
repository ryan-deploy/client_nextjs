import Footer from '@/components/navigation/tab_bar/TabBar';
import Header from '@/components/navigation/top_bar/TopBar';
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
