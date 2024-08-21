import { Box, Card, CardContent, CardMedia, Divider, Grid, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Rating, Typography } from '@mui/material';
import { getImagePath, monthYear } from "../utils";
import personalInfo from '../data/personal-info.json';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, timelineOppositeContentClasses, TimelineSeparator } from '@mui/lab';
import { Email, Phone, LinkedIn } from '@mui/icons-material';

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

    const experiences = () => {
        return personalInfo['experience'] ?? [];
    }

    const educations = () => {
        return personalInfo['education'] ?? [];
    }

    const contacts = () => {
        return personalInfo['contact'] ?? [];
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
                                Experiences
                            </Typography>
                            <Timeline
                                sx={{
                                    [`& .${timelineOppositeContentClasses.root}`]: {
                                        flex: 0.4,
                                    },
                                }}
                            >
                                {
                                    experiences().map((experience, index) => (
                                        <TimelineItem key={index}>
                                            <TimelineOppositeContent sx={{ py: '6px', px: 2 }} variant='body2' color="textSecondary">
                                                <Typography variant="h6" component="span">
                                                    {experience.role}
                                                </Typography>
                                                <Typography sx={{ color: 'grey' }}>
                                                    {monthYear(experience.fromDate) + ' - ' + monthYear(experience.toDate)}
                                                </Typography>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot color='primary' />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant="h6" component="span">
                                                    {experience.company}
                                                </Typography>
                                                <Box sx={{ color: 'grey' }}>
                                                    <ul>
                                                        {
                                                            experience.points.map((point, idx) => (
                                                                <li key={idx}>{point}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </Box>
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))
                                }
                            </Timeline>
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
                                        <TimelineItem key={index}>
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
                                                <TimelineDot color='primary'>
                                                </TimelineDot>
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                                <Typography variant="h6" component="span">
                                                    {education.course}
                                                </Typography>
                                                <Typography sx={{ color: 'grey' }}>
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
                                Let's connect over
                            </Typography>
                            <List>
                                {
                                    contacts().map((contact, index) => (
                                        <ListItem key={index} disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    {contact.type === 'LinkedIn' && <LinkedIn fontSize='large' sx={{ color: 'blue' }} />}
                                                    {contact.type === 'Email' && <Email fontSize='large' sx={{ color: 'red' }} />}
                                                    {contact.type === 'Call' && <Phone fontSize='large' sx={{ color: 'black' }} />}
                                                </ListItemIcon>
                                                <ListItemText primary={
                                                    <Link href={contact.link} color='inherit' underline="hover">
                                                        {contact.info}
                                                    </Link>
                                                } />
                                            </ListItemButton>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </CardContent>
                    </Card>
                    <Card sx={{ mt: 2 }}>
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
                                        <Divider key={`divider-${index}`} />
                                        <List key={index}
                                            subheader={<ListSubheader>{category}</ListSubheader>}>
                                            {
                                                skillsOfCategory(category).map((skill, idx) => (
                                                    <ListItem key={idx} sx={{ justifyContent: 'space-between' }}>
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