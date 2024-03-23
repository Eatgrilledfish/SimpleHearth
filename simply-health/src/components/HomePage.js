import { Container, Typography, Box } from '@mui/material';

const HomePage = () => {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to My App
                </Typography>
                <Typography variant="body1">
                    This is the beginning of my awesome Next.js application using Material-UI.
                </Typography>
            </Box>
        </Container>
    );
};

export default HomePage;
