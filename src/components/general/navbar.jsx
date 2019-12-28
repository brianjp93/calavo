import React from 'react'
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

const useStyles = makeStyles({
    nav: {
        background: 'white',
    }
})

function NavBar() {
    const classes = useStyles()
    return (
        <AppBar position="static" className={classes.nav}>
            <Toolbar>
                <Typography variant="h3">
                    <Link to='/'>
                        <span style={{fontFamily: 'Fredericka the Great'}}>
                            CSP
                        </span>
                    </Link>
                </Typography>

                <Typography variant="h6">
                    <div style={{display: 'inline-block', marginLeft: 30}}></div>
                    <Link to='/contact'>Contact</Link>
                </Typography>
            
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
