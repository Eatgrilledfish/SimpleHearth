import { Container, Typography, Button } from '@mui/material';


const HomePage = () => {
  return (
    <Container maxWidth="sm" sx={{
        
      position: 'relative',
      textAlign: 'center', // 确保文本和按钮居中
      pt: 10, // 上边距，使用主题中的间距值
      pb: 10, // 下边距
      pl: 7, // 与logo相同的左边距
      pr: 7, // 右边距
      backgroundImage: `url(${'/sweethome.png'})`,
      minHeight: '100vh',
      backgroundSize: 'cover', // 背景图片覆盖整个容器
      backgroundPosition: 'center', // 背景图片居中显示
    }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Is bad insulation costing you more than money?
      </Typography>
      <Button variant="contained" sx={{
        mt: 2, // 按钮上边距
        backgroundColor: '#ADD8E6', // 浅蓝色背景
        color: 'white', // 白色文字
        '&:hover': {
          backgroundColor: '#90CEE6', // 鼠标悬停时的按钮背景色变化
        },
      }}>
        Find Out How
      </Button>
    </Container>
  );
};

export default HomePage;
