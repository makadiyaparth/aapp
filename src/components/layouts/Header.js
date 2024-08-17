import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Aapp
                    </Typography>
                    <Button component={RouterLink} sx={{ color: 'white' }} to="/">Home</Button>
                    <Button component={RouterLink} sx={{ color: 'white' }} to="/mini-apps">Mini Apps</Button>
                    <Button component={RouterLink} sx={{ color: 'white' }} to="/about">About</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;