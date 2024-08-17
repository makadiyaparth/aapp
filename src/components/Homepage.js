import { Container, Typography, Box } from '@mui/material';

function Homepage() {
    return (
        <Container maxWidth="md">
            <Typography variant="h3" component="h2" gutterBottom>
                Welcome to my Portfolio
            </Typography>
            <Box>
                {/* Your home page content here */}
            </Box>
        </Container>
    );
}

export default Homepage;