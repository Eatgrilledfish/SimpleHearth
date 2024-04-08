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
        height: '130vh', // Make the Box take up the full viewport height
        backgroundImage: `url(${'/sweethome.png'})`,
        backgroundSize: 'cover', // Ensure the image covers the Box
        backgroundPosition: 'center', // Center the background image
        textAlign: 'center', // Center the text
      }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{mt:-80, fontStyle: 'italic'}} >
          Is Bad Insulation Costing You More Than Money?
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
          <Typography variant="h5" gutterBottom  sx={{
          fontFamily: '"Open Sans", sans-serif', // 示例字体
          fontWeight: 450, // 字体粗细
          color: '#000000', // 字体颜色，这里使用蓝色
          fontSize: '36px'
        }}>Seeing Is believing</Typography>
          <Typography variant="body1" gutterBottom sx={{
          fontFamily: '"Open Sans", sans-serif', // 示例字体
    
          color: '#000000', // 字体颜色
          fontSize: '16px',
          marginBottom: theme => theme.spacing(5),
        }}>
          Fill Our <a href='https://drive.google.com/file/d/1acYWqWA-t7_Kp4P3Pku4lvN1n3qgNzVs/view?usp=sharing'>Downloadable</a> Template With Your Previous E-bills And Upload It To See <br></br>Your Next Month's Estimate.
          </Typography>
          <InputFileUpload sx={{mt:2}}/>
        </Box>
        <Box>
          <img src="/upload.png" alt="Side Image" style={{ width: '450px', height: '450px' }} />
        </Box>
      </Box>

      {/* 粉色背景Box，包含三个长方形模块 */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 3, bgcolor: 'pink', mt: 2, height: '350px'}}>
        <Paper sx={{ bgcolor: '#F0E5D3', p: 2, borderRadius: '16px', width: '30%' }} elevation={3}>
          <Typography gutterBottom sx={{padding: '1rem',fontFamily: '"Open Sans", sans-serif',fontSize: '20px'}}>Where's that dratted draft coming from?</Typography>
          <Typography variant="body1"  gutterBottom  sx={{padding: '1rem',fontFamily: '"Open Sans", sans-serif',fontSize: '16px'}}>
          Don't play detective anymore 
          </Typography>
          <Button variant="contained" sx={{
            mt: 6, // 按钮上边距
            width: 'fit-content',
            ml:10,
            backgroundColor: '#775556', // 按钮背景色
            
            '&:hover': {
              backgroundColor: '#9E7A85', // 按钮悬停时的背景色
            },
          }}>
            LET OUR AI HELP YOU
          </Button>
        </Paper>
        <Paper sx={{ bgcolor: '#A29999', p: 2, borderRadius: '16px', width: '30%' }} elevation={3}>
          <Button variant="contained" sx={{
            mt: 26, // 按钮上边距
            width: 'fit-content',
            ml:20,
            backgroundColor: '#775556', // 按钮背景色
            
            '&:hover': {
              backgroundColor: '#9E7A85', // 按钮悬停时的背景色
            },
          }}>
            label
          </Button>
        </Paper>
        <Paper sx={{ bgcolor: '#93E6DE', p: 2, borderRadius: '16px', width: '30%' }} elevation={3}>
          <Button variant="contained" sx={{
            mt: 26, // 按钮上边距
            width: 'fit-content',
            ml:20,
            backgroundColor: '#775556', // 按钮背景色
            
            '&:hover': {
              backgroundColor: '#9E7A85', // 按钮悬停时的背景色
            },
          }}>
            label
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default HomePage;
