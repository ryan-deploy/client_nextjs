import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const User: NextPageWithLayout = () => {
  return <section>user</section>;
};

export default User;

User.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
