import { Box, Typography, CardMedia, Grid } from '@mui/material';
import InputFileUpload from './InputFileUpload'; 

const ThermalAiContent = () => {
  const images = [
    { src: "ai1.jpeg", alt: "Image 1", description: "Foam Strips" },
    { src: "ai2.jpeg", alt: "Image 2", description: "Door Seals" },
    { src: "ai3.jpeg", alt: "Image 3", description: "Door Snakes" },
    { src: "ai4.png", alt: "Image 4", description: "DIY Attics" },
    { src: "ai5.png", alt: "Image 5", description: "DIY Intermediate Tips" },
    { src: "ai6.png", alt: "Image 6", description: "DIY Roofs" },
  ];
  return (
    <>
      {/* 标题 */}
      <Box sx={{ padding: 2, backgroundColor: 'lightyellow', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" component="div" sx={{ color: 'red' ,fontStyle: 'italic'}}>Is Your Home Tipping The Scales Between Ventillation And Draughts?</Typography>
      </Box>
      
      {/* 第一段文字 */}
      <Box sx={{ padding: 4 ,textAlign: 'center'}}>
        <Typography variant="body1">
        Let's clear the air: ventilation keeps things fresh and healthy, while draughts sneakily steal your cozy warmth and spike your energy bills.
        </Typography>
      </Box>
      
      {/* 并列的两个图 */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 4 }}>
        <CardMedia component="img" image="winterSummerhorizontal.png" alt="First Image" sx={{ width: '45%' }} />
        
      </Box>
      
      {/* 第二段文字 */}
      <Box sx={{ padding: 2 ,marginLeft:'250px',marginRight:'250px',textAlign: 'justify'}}>
        <Typography variant="body1">
        Did you know? Up to 25% of your snug winter heat can vanish through tiny gaps and leaks in your home. That's where draughts do their dirty work! In Melbourne, where insulation woes are all too common, older houses can have an 'airtightness' rating of more than 30 changes per hour. Imagine—all that precious warmth slipping away faster than you can say 'winter.
        </Typography>
      </Box>
      
      {/* 左边两个竖着的图片和右边的一段文字 */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 ,marginLeft:'350px',marginRight:'350px'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <CardMedia component="img" image="winterSummerVertical.jpg" alt="Third Image"  />
         
        </Box>
        <Box sx={{ width: '45%' ,marginTop:'100px'}}>
          <Typography variant="body1">
          But as the saying goes, a picture is worth a thousand words. Feast your eyes on the multitude of ways warmth slips away from us when we need it most in winter, and how heat infiltrates our homes during scorching summers.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ padding: 2, backgroundColor: '#796A6A', height: '150px', display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" component="div" sx={{ color: 'white' ,fontWeight: 'bold',marginTop:'10px'}}>Ready to bid farewell to those pesky draughts and leaks?</Typography>
        <Box sx={{ padding: 2 }}>
          <Typography variant="body1"sx={{ color: 'white' ,fontWeight: 'bold'}}>
            Utilize our personalized, no-cost expert analytics below to pinpoint the sources of air leaks in your home and access quick tips to seal them shut.
          </Typography>
        </Box>
      </Box>

       {/* New Box with a heading, an image, text, and an upload button */}
      <Box sx={{ padding: 2 ,backgroundColor: '#F0E5D3'}}>
        {/* Heading */}
        <Typography variant="h5" component="div" sx={{ textAlign: 'center', margin: '20px 0' }}>
            Where's Waldo? With AI detection, we'll tell you.
        </Typography>

        {/* Image and Text with Upload Button */}
        <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', padding: 2,marginLeft:'250px' ,marginRight:'250px'}}>
          {/* Image */}
          <CardMedia
            component="img"
            image="thermal image.jpeg"
            alt="Descriptive Alt Text"
            sx={{ width: 350, height: 300, marginRight: 10 }}
          />

          {/* Text and Upload Button */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' ,marginTop:'70px',textAlign: 'justify'}}>
            <Typography variant="body1">
            Grab your trusty thermal camera and capture an image of the wall in your chilly room, ensuring doors and windows are covered. Upload your snapshot below, and dive into our AI-generated reports just a scroll away.
            </Typography>
            
            <InputFileUpload> </InputFileUpload>
            
          </Box>
        </Box>
      </Box>

      {/* 包含标题“Results”的新Box */}
      <Box sx={{ padding: 2, backgroundColor: 'white', display: 'flex', justifyContent: 'center' ,height:'300px'}}>
        <Typography variant="h4" component="div" sx={{ color: 'black' }}>
          RESULTS
        </Typography>
      </Box>

       {/* 新Box包含标题和六张图片 */}
      <Box sx={{ padding: 2, backgroundColor: '#D9D9D9' }}>
        <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 5 }}>
          Zip it, Waldo. Follow our links to seal it shut
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {images.map((image, index) => (
            <Grid item xs={4} key={index} sx={{ position: 'relative', width: 350, height: 300, margin: 'auto' }}>
              <Box
                sx={{
                  width: '400px', 
                  height: '270px', 
                  backgroundImage: `url(${image.src})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'center',
                  marginLeft:'30px',
                  padding: '20px',
                }}
              >
                <Typography variant="body2" sx={{ textAlign: 'center', color: 'black',fontWeight:'bold' ,backgroundColor: '#D9D9D9', borderRadius: '4px', padding: '4px' }}>
                  {image.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ThermalAiContent;
