import { makeStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

export const useStyles = makeStyles((theme) => ({
    root: {
        height: 500,
        width: 450,
        margin: theme.spacing(2)
    },
    media: {
        height: 400,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}))