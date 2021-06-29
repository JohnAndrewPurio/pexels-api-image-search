import { useRef } from 'react'
import { AppBar, Button, Toolbar, InputBase } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import { fetchImagesFromPexel } from '../../redux/actions'

export default function SearchBar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const search = useRef()

    const searchHandler = () => {
        dispatch(fetchImagesFromPexel(search.current.value))
        search.current.value = ''
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <Search />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        inputRef={search}
                    />
                </div>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={searchHandler}
                >
                    Search
                </Button>
            </Toolbar>
        </AppBar>
    )
}
