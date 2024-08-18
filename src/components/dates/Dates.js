import { Box, Tab, Tabs, Typography } from "@mui/material";
import mockDates from "../../data/mock/mockDates.json";
import * as React from 'react';
import ListDates from "./ListDates";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function Dates() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Typography variant="h4" component="h3" gutterBottom>
                Dates
            </Typography>

            <Tabs value={value} onChange={handleChange}>
                <Tab label="All" />
                <Tab label="Important" />
                <Tab label="Birthday" />
            </Tabs>

            <TabPanel value={value} index={0}>
                <ListDates dates={mockDates} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ListDates dates={mockDates} tag={'important'} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ListDates dates={mockDates} tag={'birthday'} />
            </TabPanel>
        </>
    );
}

export default Dates;