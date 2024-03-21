import { Box, Typography } from '@mui/material'
import React from 'react';
import Heroimage from "../../assets/static/HeroImage.jpg"

function Hero() {
    return (
        <Box>
            <Typography align='center' variant='h3' fontWeight="900" >Fashion
                <b style={{ color: "red" }}>Blog</b></Typography>
            <Typography align='center' variant='body2' fontWeight="100" >
                We Make you look the better of you !
            </Typography>
            <Box sx={{
                backgroundImage: `url(${Heroimage})`,
                backgroundRepeat: "no-repeat",
                // backgroundColor:"black",
                backgroundPosition: "center",
                backgroundAttachment:"fixed",
                backgroundSize: "cover",
                height: 600,
                width: "100%",
                display: "flex",
                justifyContent: "center"
            }}>
                <Box sx={{ width: {xs:"100%",sm:"50%",md:"40%"}, padding: {xs:3,sm:2,md:20} }}>

                    <Box sx={{ background: "white", opacity: "0.8" }}>
                        <Typography variant='h6' color="tomato" align='center' pt={8}>
                            Trendig Styles
                        </Typography>

                        <Typography variant='h4' color="tomato" align='center' pt={8}>
                            Life is boaring without Passions !
                        </Typography>
                        <Typography variant='body1' align='center' pb={8}>
                            We Love to change your style lorem ipsum
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Hero