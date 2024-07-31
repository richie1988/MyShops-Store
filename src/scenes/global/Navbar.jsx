import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Badge, IconButton } from '@mui/material';
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { setIsCartOpen } from '../../state';
import { shades } from '../../theme';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      top="0"
      left="0"
      zIndex="1"
      position="fixed"
      padding="22px"
    >
      <Box
        flexGrow={1}
        textAlign="center"
        width="80%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer', color: shades.secondary[500] } }}
        >
          MYSHOP
        </Box>
        <Box display="flex" justifyContent="space-between" columnGap="10px">
          <IconButton sx={{ color: 'black' }} onClick={() => navigate('/search')}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: 'black' }} onClick={() => navigate('/profile')}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              }
            }}
          >
            <IconButton sx={{ color: 'black' }} onClick={() => dispatch(setIsCartOpen(true))}>
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: 'black' }} onClick={() => navigate('/cart')}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
