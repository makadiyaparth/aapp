import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Aapp
                </Typography>
                <Button component={RouterLink} sx={{ color: 'white' }} to="/">Home</Button>
                <Button component={RouterLink} sx={{ color: 'white' }} to="/mini-apps">Mini Apps</Button>
                <Button component={RouterLink} sx={{ color: 'white' }} to="/calculators">Calculators</Button>
                <Button component={RouterLink} sx={{ color: 'white' }} to="/about">Portfolio</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;