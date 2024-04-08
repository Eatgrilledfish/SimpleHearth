import { Box, CardMedia } from '@mui/material';

const GreenaryContent = () => {
    return (
        <Box sx={{
            display: 'flex',       
            justifyContent: 'center', 
            alignItems: 'center',     
            height: '100vh',   
        }}>
            <CardMedia
                component="img"
                image="/comingsoon.webp" 
                alt="Comingsoon"
                sx={{ width: '500px', height: '500px' }}
            />
        </Box>
    );
};

export default GreenaryContent;

