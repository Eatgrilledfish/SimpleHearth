import { Container, Typography, Button, Box, Paper } from '@mui/material';
import InputFileUpload from './InputFileUpload'; 

const HomePage = () => {

  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically
        height: '100vh', // Make the Box take up the full viewport height
        backgroundImage: `url(${'/sweethome.png'})`,
        backgroundSize: 'cover', // Ensure the image covers the Box
        backgroundPosition: 'center', // Center the background image
        textAlign: 'center', // Center the text
      }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Is bad insulation costing you more than money?
        </Typography>
        <Button variant="contained" sx={{
          mt: 2, // Button top margin
          backgroundColor: '#52F9EF', // Light blue background
          color: '#775556', // White text
          '&:hover': {
            backgroundColor: '#90CEE6', // Change background on hover
          },
        }}>
          Find Out How
        </Button>
      </Box>

      {/* 新增的白色背景Box */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 4, bgcolor: 'white', mt: 2 ,height: '600px'}}>
        <Box>
          <Typography variant="h5" gutterBottom>Seeing Is believing</Typography>
          <Typography variant="body1" gutterBottom>
          Fill our downloadable template with your previous E-bills and upload it to see your next month's estimate.
          </Typography>
          <InputFileUpload />
        </Box>
        <Box>
          <img src="/upload.png" alt="Side Image" style={{ width: '450px', height: '450px' }} />
        </Box>
      </Box>

      {/* 粉色背景Box，包含三个长方形模块 */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 3, bgcolor: 'pink', mt: 2, height: '350px'}}>
        <Paper sx={{ bgcolor: 'yellow', p: 2, borderRadius: '16px', width: '30%' }} elevation={3}>
          <Typography>Yellow Box</Typography>
        </Paper>
        <Paper sx={{ bgcolor: 'grey', p: 2, borderRadius: '16px', width: '30%' }} elevation={3}>
          <Typography>Grey Box</Typography>
        </Paper>
        <Paper sx={{ bgcolor: 'cyan', p: 2, borderRadius: '16px', width: '30%' }} elevation={3}>
          <Typography>Cyan Box</Typography>
        </Paper>
      </Box>
    </>
  );
};

export default HomePage;
