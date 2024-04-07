import React,  {useState } from 'react';
import { Box, Tabs, Tab, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

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
      
      bgcolor: '#775556', // 整个导航栏的背景色，这里使用深蓝色作为示例
      height: '80px', // 调整整个导航栏的高度
    }}>
      {/* Logo Container */}
      <Box sx={{
        flexGrow: 0,
        
        height: '80px', // 根据导航栏的高度调整，也可以调整logo的大小以适应新高度
      }}>
        < img src="/SimpleHearthLogo.jpg" alt="Logo" style={{ height: '100%' }} />
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
          backgroundColor: '#775556', // 适应新颜色方案的背景色
          color: '#FFFFFF',
          '&.Mui-selected': {
            backgroundColor: '#775556', // 适应新颜色方案的选中背景色
            color: '#FFFFFF',
          },
        },
      }}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="Navigation Tabs"
          TabIndicatorProps={{ style: { display: 'none' }, }}
        >
          {tabItems.map((item, index) => (
            <Tab key={index} label={item.label} />
          ))}
        </Tabs>
      </Box>

      {/* Spacer to the right of tabs */}
      <Box sx={{ flexGrow: 1 }} />
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon style={{ color: '#FFF' }} /> 
            </InputAdornment>
          ),
        }}
        sx={{
          marginRight: 2,
          ".MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#775556", // 修改边框颜色
            },
            "&:hover fieldset": {
              borderColor: "#775556", // 鼠标悬停时边框颜色
            },
            "&.Mui-focused fieldset": {
              borderColor: "#775556", // 聚焦时边框颜色
            },
          },
          ".MuiInputBase-input": {
            color: "#100F0F", // 修改文字颜色为白色
          },
          backgroundColor: "#A1A295", // 背景色
          borderRadius: 1, // 边框圆角
          width: 'auto', // 根据需要调整宽度
        }}
      />

    </Box>
  );
};

export default NavBar;