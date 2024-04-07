import { Box, Typography, CardMedia } from '@mui/material';

const ImageText = ({ src, alt, title, description }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2 }}>
    <CardMedia component="img" image={src} alt={alt} sx={{ width: 300, height: 250 ,borderRadius: 5,marginLeft: 30}} />
    <Box sx={{ marginRight: 30 ,width: '100%'}}>
      <Typography variant="h6" component="h3"sx={{ textAlign: 'center' ,color: 'red',marginBottom:'20px'}}>{title}</Typography>
      <Typography variant="body1" sx={{ textAlign: 'justify'}}>{description}</Typography>
    </Box>
  </Box>
);

const LearnContent = () => {
  return (
    <>
      {/* Heading 1 */}
      <Box sx={{ padding: 2, backgroundColor: 'lightyellow', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" component="div" sx={{ color: 'red' }}>Ignorance Doesnt Always Equal Bliss For...</Typography>
      </Box>

      <Box sx={{ padding: 2 }}>
        <ImageText
          src="heart.jpeg"
          alt="Image 1"
          title="Your Heart"
          description="Cold homes can put a strain on your heart. Studies link low indoor temperatures to increased blood pressure, a major risk factor for heart disease. Aim for a minimum of 18°C, but remember vulnerable groups like older adults, children, and those with chronic illnesses may need it even warmer."
        />
        <ImageText
          src="lung.jpg"
          alt="Image 2"
          title="Your Lungs"
          description="Extreme temperatures, both hot and cold, can increase your risk of respiratory problems. Cold air weakens your immune system and irritates airways, making you more susceptible to illnesses like pneumonia and bronchitis. Hot air can have similar effects, and may also worsen chronic conditions like COPD and asthma."
        />
        <ImageText
          src="brain.png"
          alt="Image 3"
          title="Your Brainpower"
          description="Did you know your brain prefers a comfortable temperature too? Research suggests a link between indoor air temperature and how well you think. People performed best on tasks in rooms at a comfortable 22°C. Both hotter and colder temperatures led to more mistakes, suggesting feeling too hot or cold can hinder focus and concentration."
        />
      </Box>
      
      {/* Heading 2 */}
      <Box sx={{ padding: 2, backgroundColor: 'lightyellow', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" component="div" sx={{ color: 'red' }}>Is Your Suburb Making It Worse?</Typography>
      </Box>

      <Box sx={{ padding: 2 ,height: '350px'}}>
        <ImageText
          src="temperature.png"
          alt="Image 4"
          
          description="Some areas with the increased urbanisation, face the urban heat island effect and are more vulnerable to overhearting. Find out how your suburb compares to others with the map. "
        />
      </Box>

      {/* Heading 3 */}
      <Box sx={{ padding: 2, backgroundColor: 'lightyellow', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" component="div" sx={{ color: 'red' }}>This Issue Is Here To Stay!!</Typography>
      </Box>

      <Box sx={{ padding: 2 }}>
        <ImageText
          src="/path/to/image4.jpg"
          alt="Image 5"
          
          description="As the earth gets hotter, so is Melbourne. We currently average 11 days of 35 degrees or higher each year. By 2050, we can expect to experience an average 16 days greater than 35 degrees each year."
        />
      </Box>

      {/* Heading 4 */}
      <Box sx={{ padding: 2, backgroundColor: 'lightyellow', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" component="div" sx={{ color: 'red' }}>Easiest Fix? Dress Appropriately</Typography>
      </Box>

      <Box sx={{ padding: 2 }}>
        <ImageText
          src="socks.jpg"
          alt="Image 6"
          
          description="Adjusting your thermostat down by just 1° can save you 5-10% on heating costs! In Melbourne, as temperatures dip, so does your wallet, with winter electricity bills often surpassing summer expenses by up to $200 or more.Embrace the warmth of cozy socks, home uggs, and layers before reaching for that thermostat dial. Your bank account will appreciate it!"
        />
      </Box>

      
    
    </>
  );
};

export default LearnContent;
