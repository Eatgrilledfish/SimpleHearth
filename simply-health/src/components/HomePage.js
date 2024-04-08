import { Typography, Button, Box, Paper } from '@mui/material';
import InputFileUpload from './InputFileUpload'; 
import Link from 'next/link';

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
        <Link href="/learn" passHref>
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
        </Link>
      </Box>

      {/* 新增的白色背景Box */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 4, bgcolor: 'white', mt: 2 ,height: '600px'}}>
        <Box>
          <Typography variant="h5" gutterBottom  sx={{
          fontFamily: '"Open Sans", sans-serif', // 示例字体
          fontWeight: 500, 
          color: '#000000', 
          fontSize: '36px',
          ml: 15
        }}>Seeing Is believing</Typography>
          <Typography variant="body1" gutterBottom sx={{
          fontFamily: '"Open Sans", sans-serif', // 示例字体
          fontWeight: 600, 
          color: '#000000', // 字体颜色
          fontSize: '16px',
          ml:15,
          marginBottom: theme => theme.spacing(2),
        }}>
          Fill Our <a href='https://drive.google.com/file/d/1acYWqWA-t7_Kp4P3Pku4lvN1n3qgNzVs/view?usp=sharing'>Downloadable</a> Template With Your Previous E-bills And Upload It To See <br></br>Your Next Month's Estimate.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{
          fontFamily: '"Open Sans", sans-serif', 
          fontWeight: 600, 
          color: '#000000',
          fontSize: '16px',
          ml:15,
          marginBottom: theme => theme.spacing(5),
        }}>
            Knowing the financial impact of poor insulation is crucial in your journey toward enhancing home comfort. Take the first Step Today!
          </Typography>
          <InputFileUpload/>
        </Box>
        <Box>
          <img src="/upload.png" alt="Side Image" style={{ width: '450px', height: '450px' }} />
        </Box>
      </Box>


      {/* 粉色背景Box，包含三个长方形模块 */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 1, bgcolor: '#F8C9D1', mt: 2, height: '350px'}}>
        <Paper sx={{ bgcolor: '#F0E5D3', p: 2, borderRadius: '16px', width: '30%' }} elevation={3}>
          <Typography gutterBottom sx={{padding: '1rem',fontFamily: '"Open Sans", sans-serif',fontSize: '30px'}}>Where's that dratted draft coming from?</Typography>
          <Typography variant="body1"  gutterBottom  sx={{fontFamily: '"Open Sans", sans-serif',fontSize: '16px',marginLeft:'20px',marginRight:'60px',textAlign: 'justify',mb:4}}>
            Don't play detective anymore looking for those air leaks in your windows 
          </Typography>
          <Link href="/thermalai" passHref>
            <Button variant="contained" sx={{
              mt: 1, 
              width: 'fit-content',
              ml:12,
              backgroundColor: '#775556', // 按钮背景色
              
              '&:hover': {
                backgroundColor: '#9E7A85', // 按钮悬停时的背景色
              },
            }}>
              LET OUR AI HELP YOU
            </Button>
          </Link>
        </Paper>
        <Paper sx={{ bgcolor: '#A29999', p: 2, borderRadius: '16px', width: '30%' }} elevation={3}>
          <Typography gutterBottom sx={{padding: '1rem',fontFamily: '"Open Sans", sans-serif',fontSize: '30px'}}>Already know what you need?</Typography>
            <Typography variant="body1"  gutterBottom  sx={{fontFamily: '"Open Sans", sans-serif',fontSize: '16px',marginLeft:'20px',marginRight:'60px',textAlign: 'justify',mb:3}}>
              Jump straight to our DIYs without a second thought 
          </Typography>
          <Link href="/thermalai" passHref>
            <Button variant="contained" sx={{
              mt: 1.5,
              width: 'fit-content',
              ml:16,
              color:'black',
              backgroundColor: '#52F9EF', // 按钮背景色
              
              '&:hover': {
                backgroundColor: '#3FB8C8'
                
              },
            }}>
              DIY Solutions
            </Button>
          </Link>
        </Paper>
        <Paper sx={{ bgcolor: '#93E6DE', p: 2, borderRadius: '16px', width: '30%' }} elevation={3}>
          <Typography gutterBottom sx={{padding: '1rem',fontFamily: '"Open Sans", sans-serif',fontSize: '30px',mb:6}}>Pick your battles right</Typography>
            <Typography variant="body1"  gutterBottom  sx={{fontFamily: '"Open Sans", sans-serif',fontSize: '16px',marginLeft:'20px',marginRight:'60px',textAlign: 'justify',mb:4}}>
              Your home may need more than just simple solutions
          </Typography>
          <Link href="/learn" passHref>
            <Button variant="contained" sx={{
              mt: 1, // 按钮上边距
              width: 'fit-content',
              ml:20,
              color:'black',
              backgroundColor: '#F0E5D3', // 按钮背景色
              
              '&:hover': {
                backgroundColor: '#D3C2AC', // 按钮悬停时的背景色
              },
            }}>
                find out
            </Button>
          </Link>
        </Paper>
      </Box>
    </>
  );
};

export default HomePage;
