import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';

import PostList from '@/components/lists/post/PostList';
import { mockPostListProps } from '@/components/lists/post/PostList.mocks';
import { NextPageWithLayout } from './page';

const Index: NextPageWithLayout = () => {
  return <PostList list={mockPostListProps.list} />;
};

Index.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Index;
