import { Box, Card, CardContent, CardMedia, Divider, Grid, List, ListItem, ListSubheader, Rating, Typography } from '@mui/material';
import { getImagePath } from "../utils";
import personalInfo from '../data/personal-info.json';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';

function About() {

    const topSkills = () => {
        return personalInfo['skills'] ? personalInfo['skills'].filter(skill => skill.feature) : [];
    }

    const skillsOfCategory = (category) => {
        return personalInfo['skills'] ? personalInfo['skills'].filter(skill => skill.category === category) : [];
    }

    const categories = () => {
        return ["Backend", "Frontend", "Database", "UI/UX", "Others"]
    }

    const educations = () => {
        return personalInfo['education'] ?? [];
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
                    <Card sx={{ mt: 2 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Education
                            </Typography>
                            <Timeline position='alternate'>
                                {
                                    educations().map((education, index) => (
                                        <TimelineItem>
                                            <TimelineOppositeContent
                                                sx={{ m: 'auto 0' }}
                                                align="right"
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                {education.fromYear} - {education.toYear}
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineConnector />
                                                <TimelineDot>
                                                </TimelineDot>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                                <Typography variant="h6" component="span">
                                                    {education.course}
                                                </Typography>
                                                <Typography>
                                                    {education.institute}
                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))
                                }
                            </Timeline>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Skills
                            </Typography>
                            <List
                                subheader={<ListSubheader>Featured</ListSubheader>}>
                                {
                                    topSkills().map((skill, index) => (
                                        <ListItem key={index} sx={{ justifyContent: 'space-between' }}>
                                            <Box>{skill.skill}</Box>
                                            <Rating name={`rating-${index}`} defaultValue={0} value={skill.rating} precision={0.5} readOnly />
                                        </ListItem>
                                    ))
                                }
                            </List>
                            {
                                categories().map((category, index) => (
                                    <>
                                        <Divider />
                                        <List key={index}
                                            subheader={<ListSubheader>{category}</ListSubheader>}>
                                            {
                                                skillsOfCategory(category).map((skill, index) => (
                                                    <ListItem key={index} sx={{ justifyContent: 'space-between' }}>
                                                        <Box>{skill.skill}</Box>
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                    </>
                                ))
                            }
                        </CardContent>
                    </Card>
                </Grid>
            </Grid >
        </>
    );
}

export default About;