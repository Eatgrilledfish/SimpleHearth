import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();

  const tabItems = [
    { label: 'HOME', path: '/' },
    { label: 'THERMALAI', path: '/thermalai' },
    { label: 'GREENERY', path: '/greenery' },
    { label: 'ENERGY', path: '/energy' },
    { label: 'LEARN', path: '/learn' },
    // ... more items
  ];

  const currentTab = tabItems.findIndex(tab => router.pathname === tab.path);

  const handleChange = (event, newValue) => {
    router.push(tabItems[newValue].path);
  };

  return (
    <Box sx={{
      display: 'flex', 
      alignItems: 'center', 
      
      bgcolor: '#964B00', // 整个导航栏的背景色，这里使用深蓝色作为示例
      height: '100px', // 调整整个导航栏的高度
    }}>
      {/* Logo Container */}
      <Box sx={{
        flexGrow: 0,
        
        height: '230px', // 根据导航栏的高度调整，也可以调整logo的大小以适应新高度
      }}>
        < img src="/SimpleHearthLogo.png" alt="Logo" style={{ height: '100%' }} />
      </Box>

      {/* Navigation Tabs Container */}
      <Box sx={{
        flexGrow: 2, 
        bgcolor: 'transparent', // 使Tabs背景透明，以适应整体风格
        borderRadius: '4px', 
        marginLeft: '24px',
        '.MuiTabs-root': {
          minHeight: '48px', // 调整Tabs的最小高度以适应整体高度
        },
        '.MuiTab-root': {
          border: 'none', // 适应新颜色方案的边框颜色
          borderBottom: 'none',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
          backgroundColor: '#964B00', // 适应新颜色方案的背景色
          color: '#FFFFFF',
          '&.Mui-selected': {
            backgroundColor: '#964B00', // 适应新颜色方案的选中背景色
            color: '#FFFFFF',
          },
        },
      }}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="Navigation Tabs"
          centered
          TabIndicatorProps={{ style: { display: 'none' }, }}
        >
          {tabItems.map((item, index) => (
            <Tab key={index} label={item.label} />
          ))}
        </Tabs>
      </Box>

      {/* Spacer to the right of tabs */}
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );
};

export default NavBar;