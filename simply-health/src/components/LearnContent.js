import { Box, Typography, CardMedia,Grid} from '@mui/material';

const ImageText = ({ src, alt, title, description }) => (
  <Grid item xs={12} sm={4}> {/* 设置为整个宽度的1/3 */}
    <CardMedia component="img" image={src} alt={alt} sx={{ width: '100%', height: 250, borderRadius: 5 }} />
    <Typography variant="h6" component="h3" sx={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>{title}</Typography>
    <Typography variant="body1" sx={{ textAlign: 'justify' }}>{description}</Typography>
  </Grid>
);
const imageUrls = [
  { url: 'baselayer.jpg', label: 'BASE LAYER' },
  { url: 'uggs.jpg', label: 'THICK SOCKS/UGGS' },
  { url: 'gloves.jpg', label: 'GLOVES' },
  { url: 'middlelayer.jpg', label: 'MIDDLE LAYER' },
  { url: 'scarf.jpg', label: 'SCARF' }
];

const LearnContent = () => {
  return (
    <>
      {/* Heading 1 */}
      <Box sx={{
        padding: 2,
        backgroundColor: '#A29999',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '150px', // 替换LOGO_WIDTH为你的logo宽度
        marginTop: '60px',   // 替换TOP_MARGIN为你希望的顶部空白区域的高度
        }}>
        <Typography variant="h4" component="div" sx={{ color: '#800000',marginLeft:'50px' }}><span style={{  fontSize: '1.7em' }}>Ignorance</span> Doesn’t Always Equal <span style={{  fontSize: '1.7em' }}>Bliss</span> For...</Typography>
      </Box>


      <Box sx={{ padding: 2 ,marginTop:'30px'}}>
        <Grid container spacing={15} justifyContent="center" >
          <ImageText
            src="heart.jpeg"
            alt="Image 1"
            title="Your Heart"
            description={<span>
              Cold homes can put a strain on your heart. <a href="https://www.ncbi.nlm.nih.gov/books/NBK535294/">Studies</a> link low indoor temperatures to increased blood pressure, a major risk factor for heart disease. Aim for a minimum of 18°C, but remember vulnerable groups like older adults, children, and those with chronic illnesses may need it even warmer.
            </span>}
          />
          <ImageText
            src="lung.jpg"
            alt="Image 2"
            title="Your Lungs"
            description={<span>Extreme temperatures, both hot and cold, can increase your risk of <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8156969/">respiratory problems</a>. Cold air weakens your immune system and irritates airways, making you more susceptible to illnesses like pneumonia and bronchitis. Hot air can have similar effects, and may also worsen chronic conditions like COPD and asthma.</span>}
          />
          <ImageText
            src="brain.png"
            alt="Image 3"
            title="Your Brainpower"
            description={<span>Did you know your brain prefers a comfortable temperature too? <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6377698/">Research</a> suggests a link between indoor air temperature and how well you think. People performed best on tasks in rooms at a comfortable 22°C. Both hotter and colder temperatures led to more mistakes, suggesting feeling too hot or cold can hinder focus and concentration.</span>}
          />
        </Grid>
      </Box>
      
      
      {/* Heading 2 */}
      <Box sx={{
        padding: 2,
        backgroundColor: '#93E6DE',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '150px', 
        marginTop: '60px',   
        }}>
        <Typography variant="h4" component="div" sx={{ color: '#800000',marginLeft:'50px' }}>Cheapest Fix? <span style={{  fontSize: '1.7em' }}>DRESS UP AT HOME</span></Typography>
      </Box>
      
      {/* OlympicRingsLayout */}
      <Box sx={{ padding: 2 }}>
        <Typography variant="body1" sx={{ fontSize: '20px',fontFamily:'open Sans',fontWeight: 'bold',fontStyle:'italic',display: 'flex',justifyContent:"center",alignItems: 'center',marginBottom: 9 }}>
          <span>Adjusting your thermostat down by just 1° can <a href="https://www.energy.gov.au/households/household-guides/seasonal-advice/winter">Save</a> you 5-10% on heating costs!</span>
        </Typography>

        <Grid container justifyContent="center" alignItems="center" spacing={10}>
          {/* Render the first three images */}
          {imageUrls.slice(0, 3).map((image, index) => (
            <Grid item key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CardMedia
                component="img"
                image={image.url}
                alt={image.label}
                sx={{ width: 250, height: 250, borderRadius: '50%' }}
              />
              <Typography variant="caption"sx={{ fontSize: '1.2rem' }}>{image.label}</Typography>
            </Grid>
          ))}
        </Grid>

        <Grid container justifyContent="center" alignItems="center" spacing={10} sx={{ marginTop: -6 }}>
          {/* Render the last two images, which are offset to create the Olympic Rings layout */}
          {imageUrls.slice(3, 5).map((image, index) => (
            <Grid item key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: index === 0 ? 5 : 0, marginRight: index === 1 ? 5 : 0 }}>
              <CardMedia
                component="img"
                image={image.url}
                alt={image.label}
                sx={{ width: 250, height: 250, borderRadius: '50%' }}
              />
              <Typography variant="caption"sx={{ fontSize: '1.2rem' }}>{image.label}</Typography>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body1" sx={{ fontFamily:'open sans',marginTop: 4 ,display: 'flex',alignItems: 'center',justifyContent:"center"}}>
          In Melbourne, as temperatures dip, so does your wallet, with winter electricity bills often surpassing summer expenses by up to $200 or more. 
        </Typography>
        <Typography variant="body1" sx={{ fontFamily:'open sans',marginTop: 4 ,display: 'flex',alignItems: 'center',justifyContent:"center"}}>
          Embrace the warmth of cozy socks, uggs, and layers before reaching for that thermostat dial. Your bank account will appreciate it!
        </Typography>
      </Box>
      {/* Heading 1 */}
      <Box sx={{
        padding: 2,
        backgroundColor: '#F0E5D3',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '150px', 
        marginTop: '60px',   
        }}>
        <Typography variant="h4" component="div" sx={{ color: '#800000',marginLeft:'100px' }}> Is DIY <span style={{  fontSize: '1.7em' }}>ENOUGH</span> For You</Typography>
      </Box>
      <Box sx={{ padding: 2 ,ml:30,mr:30}}>
        <Typography variant="body1" sx={{ fontSize: '20px',fontFamily:'open Sans',fontWeight: 'bold',fontStyle:'italic',display: 'flex',justifyContent:"center",alignItems: 'center',marginBottom: 5 }}>
          Your locality and Building age may play a bigger role than you think in your home’s capacity to accept dIY solutions. Find out Below!
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#800000', ml: 0, mr: '400px', p: 2 }}>
        <Typography variant="h5" sx={{ color: 'white', mb: 2,ml:10,fontFamily:'open sans' ,fontSize:'30px'}}>Local Heat Vulnerability</Typography>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              image="temperature.png" 
              alt="Descriptive Alt Text"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ color: 'white',fontWeight:'bold' ,fontStyle:'italic',marginLeft:'20px',marginRight:'20px',textAlign: 'justify'}}>
              Some areas with the increased urbanisation, face the urban heat island effect and are more vulnerable to overhearting. Find out how your suburb compares to others with the map. 
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ backgroundColor: '#800000', mr: 0, ml: '400px', p: 2, mt:10, mb:10}}>
        <Typography variant="h5" sx={{ color: 'white', mb: 2,ml:10,fontFamily:'open sans' ,fontSize:'30px',mb:7}}>Property Age</Typography>
       
          
        <Typography variant="body1" sx={{ color: 'white',fontWeight:'bold' ,fontStyle:'italic',marginLeft:'80px',marginRight:'300px',textAlign: 'justify',mb: 3}}>
          Use the search bar below to look up your home address and find our how old it is and when it was last refurbished. 
        </Typography>
         
        <Typography variant="body2" sx={{ color: 'white',fontWeight:'bold' ,fontStyle:'italic',marginLeft:'80px',marginRight:'300px',textAlign: 'justify'}}>
          *Only valid address from Melbourne City will be accepted
        </Typography>
        
      </Box>






    

  

   

      
    
    </>
  );
};

export default LearnContent;
