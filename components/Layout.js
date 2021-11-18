import React, { Children } from 'react'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import usesStyles from '../utils/styles'

export default function Layout({children}) {
    const classes = usesStyles();
    return (
        <div>
            <Head>
                <title> next ecommerce </title>
            </Head>
            <AppBar position="static" className={classes.navbar} >
                <Toolbar>
                    <Typography> Next Ecommerce </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main} >
                {children}
            </Container>
            <footer className={classes.footer} >
                <Typography> All Rights Reserved . Powered by ParlakUlgam </Typography>
            </footer>
        </div>
    )
}
