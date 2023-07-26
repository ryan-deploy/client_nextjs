import FavoriteIcon from '@mui/icons-material/Favorite';
import RestoreIcon from '@mui/icons-material/Restore';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useRouter } from 'next/router';
import { useState } from 'react';

export interface ITabBar extends React.ComponentPropsWithoutRef<'div'> {}

const TabBar: React.FC<ITabBar> = ({ className, ...divProps }) => {
  const router = useRouter();
  const { pathname } = router;
  const [value, setValue] = useState(pathname);

  return (
    <div
      {...divProps}
      className={`w-full p-5 bg-slate-100 text-slate-500 ${className}`}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          router.replace(newValue);
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          value="/"
          label="Recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          value="/about"
          label="Favorites"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default TabBar;
