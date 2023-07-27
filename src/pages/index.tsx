import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { NextPageWithLayout } from './page';

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

const Home: NextPageWithLayout = () => {
  const [hommeSectionHeight, setHommeSectionHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const homeSectionEl = document.querySelector('#homeSection');

      if (homeSectionEl) {
        setHommeSectionHeight(homeSectionEl.clientHeight);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="homeSection" className="h-full">
      <FixedSizeList
        height={hommeSectionHeight}
        width="100%"
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
