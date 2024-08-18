import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { getImagePath } from "../../utils";
import { OpenInNewSharp } from "@mui/icons-material";


function MiniAppCard({ info }) {

    const handleClick = () => {
        if (info.url) {
            window.open(info.url, '_blank', 'noopener,noreferrer');
        }
    }

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
                    <Button size="small" startIcon={<OpenInNewSharp />} onClick={handleClick}>Access</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default MiniAppCard;