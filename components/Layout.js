import React, { Children } from 'react'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title> next ecommerce </title>
            </Head>
            <AppBar position="static">
                <Toolbar>
                    <Typography> Next Ecommerce </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography> All Rights Reserved . Powered by ParlakUlgam </Typography>
            </footer>
        </div>
    )
}
