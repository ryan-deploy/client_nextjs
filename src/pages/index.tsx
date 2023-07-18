import CatCard from '@/components/cards/cat/CatCard';
import { mockCatCardProps } from '@/components/cards/cat/CatCard.mocks';
import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import SidebarLayout from '@/components/layouts/sidebar/SidebarLayout';
import Search from '@/components/utility/base/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="w-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <Search />
      <CatCard {...mockCatCardProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
