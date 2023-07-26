import TabBar from '@/components/navigation/tab_bar/TabBar';
import TopBar from '@/components/navigation/top_bar/TopBar';
import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>PrimaryLayout</title>
      </Head>

      <TopBar />
      <div {...divProps}>
        <main className="flex">{children}</main>
      </div>
      <TabBar />
    </>
  );
};

export default PrimaryLayout;
