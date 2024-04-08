import { Box, Typography, CardMedia, Grid } from '@mui/material';
import InputFileUpload from './InputFileUpload'; 

const ThermalAiContent = () => {
  const images = [
    { src: "ai1.jpeg", alt: "Image 1", description: <span><a className="my-link" href= "https://www.bunnings.com.au/diy-advice/home-improvement/doors-windows/how-to-weatherproof-your-home-for-winter" >Foam Strips</a></span> },
    { src: "ai2.jpeg", alt: "Image 2", description: <span><a className="my-link" href= "https://www.bunnings.com.au/products/building-hardware/door-hardware/door-seals" >Door Seals</a></span> },
    { src: "ai3.jpeg", alt: "Image 3", description: <span><a className="my-link" href= "https://www.bunnings.com.au/88cm-x-5-3cm-x-5-3cm-assorted-colour-door-snake_p3961723" >Door Snakes</a></span> },
    { src: "ai4.png", alt: "Image 4", description: <span><a className="my-link" href= "https://www.youtube.com/watch?v=1i_2Bk3j3q0&ab_channel=Today%27sHomeownerwithDannyLipford" >DIY Attics</a></span> },
    { src: "ai5.png", alt: "Image 5", description: <span><a className="my-link" href= "https://www.youtube.com/watch?v=MNJFPd_yi8Q&ab_channel=EfficiencyVermont" >DIY Intermediate Tips</a></span> },
    { src: "ai6.png", alt: "Image 6", description: <span><a className="my-link" href= "https://www.youtube.com/watch?v=R3hyKVshRoc&ab_channel=DIYfferent" >DIY Roofs</a></span> },
  ];
  return (
    <>
      {/* 标题 */}
      <Box sx={{ padding: 2, backgroundColor: 'lightyellow', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" component="div" sx={{ color: 'red' ,fontWeight:'bold'}}>Is Your Home Tipping The Scales Between Ventillation And Draughts?</Typography>
      </Box>
      
      {/* 第一段文字 */}
      <Box sx={{ padding: 2,marginTop:'20px',textAlign: 'center',marginLeft:'250px',marginRight:'250px',textAlign: 'justify' }}>
        <Typography variant="body1" sx={{fontStyle:'italic'}}>
        <span style={{ fontWeight: 'bold', fontSize: '1.7em' }}>Let's clear the air:</span> ventilation keeps things fresh and healthy, while draughts sneakily steal your cozy warmth and spike your energy bills.
        </Typography>
      </Box>
      
      {/* 第二段文字 */}
      <Box sx={{ padding: 2 ,marginLeft:'250px',marginRight:'250px',textAlign: 'justify'}}>
        <Typography variant="body1">
        <span>Did you know? Up to <a href="https://www.sustainability.vic.gov.au/energy-efficiency-and-reducing-emissions/building-or-renovating/key-principles-of-energy-efficient-design/planning-and-design/insulation/draught-proofing">25%</a> of your snug winter heat can vanish through tiny gaps and leaks in your home. That's where draughts do their dirty work! In Melbourne, where insulation woes are all too common, older houses can have an 'airtightness' rating of more than <a href="https://www.theguardian.com/commentisfree/2022/jun/13/freezing-indoors-thats-because-australian-homes-are-closer-to-tents-than-insulated-eco-buildings">30</a> changes per hour. Imagine—all that precious warmth slipping away faster than you can say 'winter.</span> 
        </Typography>
      </Box>
      
      {/* 左侧文字右侧图片 */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 ,marginLeft:'250px',marginRight:'250px'}}>
        <Box sx={{ width: '64%' ,marginTop:'80px'}}>
          <Typography variant="body1" sx={{fontSize: 35,fontFamily:'open Sans'}}>
            But as the saying goes, a picture is worth a thousand words. 
          </Typography>
          <Typography sx={{fontSize: 20, marginTop:'20px',fontFamily:'open Sans',textAlign: 'justify'}}>
            Feast your eyes on the multitude of ways warmth slips away from us when we need it most in winter, and how heat infiltrates our homes during scorching summers.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <CardMedia component="img" image="winterSummerVertical.jpg" alt="Third Image"  />
         
        </Box>
        
      </Box>

      <Box sx={{ padding: 2, backgroundColor: '#796A6A', height: '150px', display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" component="div" sx={{ color: 'white' ,fontWeight: 'bold',marginTop:'10px'}}>Ready to bid farewell to those pesky draughts and leaks?</Typography>
        <Box sx={{ padding: 2 }}>
          <Typography variant="body1"sx={{ color: 'white' ,fontWeight: 'bold',marginLeft:'250px',marginRight:'250px',textAlign: 'center'}}>
            Utilize our personalized, no-cost expert analytics below to pinpoint the sources of air leaks in your home and access quick tips to seal them shut.
          </Typography>
        </Box>
      </Box>

       {/* New Box with a heading, an image, text, and an upload button */}
      <Box sx={{ padding: 2 ,backgroundColor: '#F0E5D3'}}>
        {/* Heading */}
        <Typography variant="h5" component="div" sx={{ fontFamily:'Ag ',color:'#800000',textAlign: 'center', margin: '20px 0' ,fontWeight: 'bold'}}>
          <span style={{ fontWeight: 'bold', fontSize: '1.7em' }}>Where's Waldo?</span> With AI detection, we'll tell you.
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

       {/* 新Box包含标题和六张图片 */}
      <Box sx={{ padding: 2, backgroundColor: '#D9D9D9' }}>
        <Typography variant="h5" sx={{ fontFamily:'Ag ',color:'#800000',textAlign: 'center', marginBottom: 5 ,fontWeight: 'bold'}}>
          <span style={{ fontWeight: 'bold', fontSize: '1.7em' }}>Zip it, Waldo.</span> Follow our links to seal it shut
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
                <Typography variant="body2" sx={{ '& .my-link:hover': { color: 'red' }, textAlign: 'center', color: 'black',fontWeight:'bold' ,backgroundColor: '#D9D9D9', borderRadius: '4px', padding: '4px' }}>
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
