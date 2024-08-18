import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { getImagePath } from "../../utils";


function MiniAppCard({ info }) {
    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    height="150"
                    image={`${getImagePath()}/${info.image}`}
                    alt={info.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {info.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Access</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default MiniAppCard;