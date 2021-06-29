import { Avatar, Card, CardHeader, CardMedia } from '@material-ui/core'
import { useStyles } from './styles'

export default function ImageCard({image}) {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {image.photographer[0].toUpperCase()}
                    </Avatar>
                }
                title={image.photographer}
                subheader={image.photographer_url}
            />
            <CardMedia
                className={classes.media}
                image={image.src.medium}
                title="Paella dish"
            />
        </Card>
    )
}
