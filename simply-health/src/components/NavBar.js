// app/navigation/page.jsx
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

const NavigationTabs = () => {
  const router = useRouter();

  // Define the routes and labels for your tabs
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
    <Box sx={{ display: 'flex', alignItems: 'center', padding: '8px', bgcolor: 'background.default' }}>
      {/* Logo Container */}
      <Box sx={{ flexGrow: 0 }}>
        <img src="/SimpleHearthLogo.png" alt="Logo" style={{ height: '148px' }} />
      </Box>


      {/* Navigation Tabs Container */}
      <Box sx={{ flexGrow: 2, bgcolor: '#A52A2A', borderRadius: '4px', marginLeft: '24px'}}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="Navigation Tabs"
          centered
          TabIndicatorProps={{
            style: {
              display: 'none', // Hides the tab indicator
            },
          }}
          sx={{
            '.MuiTabs-flexContainer': {
              justifyContent: 'left',
              paddingLeft: '24px'
            },
            '.MuiTab-root': {
              border: '1px solid #800000',
              borderBottom: 'none',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
              backgroundColor: '#A52A2A',
              color: '#ffffff',
              '&.Mui-selected': {
                backgroundColor: '#800000',
                color: '#ffffff',
              },
            },
          }}
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

export default NavigationTabs;
