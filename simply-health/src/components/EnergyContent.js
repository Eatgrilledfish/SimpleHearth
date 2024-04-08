import { Box, CardMedia } from '@mui/material';

const EnergyContent = () => {
    return (
        <Box sx={{
            display: 'flex',       // 启用flex布局
            justifyContent: 'center', // 水平居中
            alignItems: 'center',     // 垂直居中
            height: '100vh',          // 容器高度设置为视口的100%
        }}>
            <CardMedia
                component="img"
                image="/comingsoon.webp" // 确保路径正确
                alt="Comingsoon"
                sx={{ width: '500px', height: '500px' }}
            />
        </Box>
    );
};

export default EnergyContent;
