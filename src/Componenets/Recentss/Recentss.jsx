import { Box, Grid, } from '@mui/material'
import carimg from "../../assets/static/image3.jpg"
import React from 'react'
import Card from '../Card/Card'
import postImage2 from "../../assets/static/image2.jpg"
import postImage3 from "../../assets/static/image3.jpg"
import postImage4 from "../../assets/static/image4.jpg"

function Recentss() {
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{xs:1,sm:2,md:1}}>
                <Grid item >
                    <Card cardImage={carimg} />
                </Grid>
                <Grid item md={6} xs={12} >

                    <Card cardImage={postImage2} />

                </Grid>
                <Grid item md={6} xs={12} >

                    <Card cardImage={postImage3} />

                </Grid>
                <Grid item md={6} xs={12} >

                    <Card cardImage={postImage4} />

                </Grid>
                <Grid item md={6} xs={12} >

                    <Card cardImage={carimg} />

                </Grid>
            </Grid>
        </Box>
    )
}

export default Recentss