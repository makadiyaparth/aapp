import { Box, Card, CardContent, CardMedia, Grid, List, ListItem, Rating, Stack, Typography } from '@mui/material';
import { getImagePath } from "../utils";
import personalInfo from '../data/personal-info.json';

function About() {

    const topSkills = () => {
        return personalInfo['skills'] ? personalInfo['skills'].filter(skill => skill.feature) : [];
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="250"
                            image={`${getImagePath()}/profile-photo.png`}
                            alt="Profile photo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                Parth Makadiya
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {personalInfo.aboutMe}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Featured Skills
                            </Typography>
                            <List>
                                {
                                    topSkills().map((skill, index) => (
                                        <ListItem key={index} sx={{ justifyContent: 'space-between' }}>
                                            <Box>{skill.skill}</Box>
                                            <Rating name={`rating-${index}`} defaultValue={0} value={skill.rating} precision={0.5} readOnly />
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid >
        </>
    );
}

export default About;