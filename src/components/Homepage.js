import { Container, Typography, Box } from '@mui/material';

function Homepage() {
    return (
        <Container maxWidth="md">
            <Typography variant="h3" component="h2" gutterBottom>
                Homepage
            </Typography>
            <Box>
                {/* Your home page content here */}
            </Box>
        </Container>
    );
}

export default Homepage;