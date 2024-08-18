import { Typography, Box, Grid } from '@mui/material';
import data from '../../data/mini-apps.json';
import MiniAppCard from './MiniAppCard';

function MiniApps() {
    return (
        <>
            <Typography variant="h4" component="h3" gutterBottom>
                Mini Apps
            </Typography>
            <Box>
                <Grid container spacing={2}>
                    {
                        data.map(miniAppDetail => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={miniAppDetail.id} >
                                <MiniAppCard info={miniAppDetail}></MiniAppCard>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    );
}

export default MiniApps;