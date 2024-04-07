import { Box, Typography, CardMedia } from '@mui/material';

const ThermalAiContent = () => {
    return (
      <>
        {/* Heading 1 */}
        <Box sx={{ padding: 2, backgroundColor: 'lightyellow', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" component="div" sx={{ color: 'red' ,fontStyle: 'italic'}}>Is Your Home Tipping The Scales Between Ventillation And Draughts?</Typography>
        </Box>
    </>
    );
};
export default ThermalAiContent;