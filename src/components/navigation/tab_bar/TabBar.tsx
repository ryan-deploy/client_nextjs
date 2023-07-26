import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useRouter } from 'next/router';
import { useState } from 'react';

export interface ITabBar extends React.ComponentPropsWithoutRef<'div'> {}

const TabBar: React.FC<ITabBar> = ({ ...divProps }) => {
  const router = useRouter();
  const { pathname } = router;
  const [value, setValue] = useState(pathname);

  return (
    <div {...divProps}>
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
          label="Home"
          icon={<HomeSharpIcon />}
        />
        <BottomNavigationAction
          value="/user"
          label="User"
          icon={<AccountBoxSharpIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default TabBar;
