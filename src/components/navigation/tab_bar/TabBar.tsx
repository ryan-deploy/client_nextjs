import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';

export interface ITabBar extends React.ComponentPropsWithoutRef<'div'> {}

const TabBar: React.FC<ITabBar> = ({ className, ...divProps }) => {
  const [value, setValue] = useState(0);

  return (
    <div
      {...divProps}
      className={`w-full p-5 bg-slate-100 text-slate-500 ${className}`}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default TabBar;
