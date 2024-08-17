import { Container, Typography, Box } from '@mui/material';

function About() {
    return (
        <Container maxWidth="lg">
            <Typography variant="h3" component="h2" gutterBottom>
                About
            </Typography>
            <Box>
                {/* Your home page content here */}
            </Box>
        </Container>
    );
}

export default About;