import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';
import { mockAvatar, mockConversations, mockPictures } from '../data';
import ItemAvatarConversation from './Items/ItemAvatarConversation';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          {mockAvatar.map(({ name, link, id }) => (
            <Avatar alt={name} src={link} key={`key-${id}`} />
          ))}
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {mockPictures.map(({ alt, link, id }) => (
            <ImageListItem key={`key-${id}`} sx={{ margin: 1 }}>
              <img src={link} alt={alt} />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {mockConversations.map((data) => (
            <ItemAvatarConversation {...data} key={`key-${data.id}`} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
