import { Box, Typography, CardMedia } from '@mui/material';

const ImageText = ({ src, alt, title, description }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
    <CardMedia component="img" image={src} alt={alt} sx={{ width: 90, height: 90 }} />
    <Box>
      <Typography variant="h6" component="h3">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  </Box>
);

const LearnContent = () => {
  return (
    <>
      {/* Heading 1 */}
      <Box sx={{ padding: 2, backgroundColor: '#eee' }}>
        <Typography variant="h4" component="div">Heading 1</Typography>
      </Box>
      
      {/* Content for Heading 1 */}
      <Box sx={{ padding: 2 }}>
        {/* Repeat this structure for each imageText, modifying the props as needed */}
        <ImageText
          src="/path/to/image1.jpg"
          alt="Image 1"
          title="Small Heading 1"
          description="Description for image 1..."
        />
        {/* ...other ImageText components */}
      </Box>

      {/* Heading 2 */}
      <Box sx={{ padding: 2, backgroundColor: '#eee' }}>
        <Typography variant="h4" component="div">Heading 2</Typography>
      </Box>
      
      {/* Content for Heading 2 */}
      <Box sx={{ padding: 2 }}>
        <ImageText
          src="/path/to/image2.jpg"
          alt="Image 2"
          title=""
          description="Description for the image..."
        />
        {/* ...other ImageText components for Heading 2 */}
      </Box>
      
      {/* ...other headings and content as needed */}
    </>
  );
};

export default LearnContent;
