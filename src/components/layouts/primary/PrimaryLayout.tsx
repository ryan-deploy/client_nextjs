import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>PrimaryLayout</title>
      </Head>
      <div {...divProps}>
        <main className="flex">{children}</main>
      </div>
    </>
  );
};

export default PrimaryLayout;
