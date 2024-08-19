import { Chip, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { formatDate, getYearTillToday } from "../../utils";

function ListDates({ dates, tag }) {
    const getData = () => {
        if (!tag) {
            return dates;
        }

        return dates.filter(date => date.tags && date.tags.includes(tag));
    }

    const getTags = (date) => {
        return date.tags ? date.tags : [];
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Note</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Expiry Date</TableCell>
                            <TableCell>Tags</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getData().map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{formatDate(row.date)}</TableCell>
                                <TableCell>{row.note}</TableCell>
                                <TableCell>{getYearTillToday(row.date, row.expiryDate)}</TableCell>
                                <TableCell>{formatDate(row.expiryDate)}</TableCell>
                                <TableCell>
                                    <Stack direction="row" spacing={1}>
                                        {
                                            getTags(row).map((tag, index) => (
                                                <Chip key={index} label={tag} size="small" />
                                            ))
                                        }
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default ListDates;