import TabBar from '@/components/navigation/tab_bar/TabBar';
import TopBar from '@/components/navigation/top_bar/TopBar';
import { grey } from '@mui/material/colors';
import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>PrimaryLayout</title>
      </Head>

      <div
        className="h-screen flex flex-col justify-between"
        style={{ backgroundColor: grey[50] }}
        {...divProps}
      >
        <TopBar />
        <main className="flex-grow overflow-x-hidden overflow-y-scroll">
          {children}
        </main>
        <TabBar />
      </div>
    </>
  );
};

export default PrimaryLayout;
