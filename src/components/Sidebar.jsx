import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from '@mui/material';
import ChaletIcon from '@mui/icons-material/Chalet';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ItemIcon from './Items/ItemIcon';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNight from '@mui/icons-material/ModeNight';

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <List>
          <ItemIcon
            component="a"
            hrefPage="home"
            Icon={ChaletIcon}
            title="Home"
          />
          <ItemIcon
            component="a"
            hrefPage="page"
            Icon={ArticleIcon}
            title="Pages"
          />
          <ItemIcon
            component="a"
            hrefPage="groups"
            Icon={GroupIcon}
            title="Groups"
          />
          <ItemIcon
            component="a"
            hrefPage="marketplace"
            Icon={StorefrontIcon}
            title="Marketplace"
          />
          <ItemIcon
            component="a"
            hrefPage="friend"
            Icon={EmojiPeopleIcon}
            title="Friends"
          />
          <ItemIcon
            component="a"
            hrefPage="settings"
            Icon={SettingsApplicationsIcon}
            title="Settings"
          />
          <ItemIcon
            component="a"
            hrefPage="profile"
            Icon={AccountBoxIcon}
            title="Profile"
          />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
