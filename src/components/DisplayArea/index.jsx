import { useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchImagesFromPexel } from '../../redux/actions'
import ImageCard from '../ImageCard'

export default function DisplayArea() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const currentImages = useSelector(state => state.currentImages)

    useEffect(() => {
        dispatch(fetchImagesFromPexel())

        // eslint-disable-next-line
    }, [])

    return (
        <Grid container>
            {
                currentImages && currentImages.photos.length > 0 ? currentImages.photos.map(image => (
                    <Grid key={image.id} item xs={4}>
                        <Grid className={classes.item} container justify="center">
                            <ImageCard image={image} />
                        </Grid>
                    </Grid>
                ))
                    :
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <Typography variant="h6">There is no images in the database for your search query</Typography>
                        </Grid>
                    </Grid>
            }
        </Grid >
    )
}
