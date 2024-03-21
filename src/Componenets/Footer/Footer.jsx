import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const SocialBox = styled(Box)({
    display: "flex",
    gap: 30,
})

const Footer = () => {
    return (
        <Box sx={{ background: "black", height: "300px" }} color={"white"}>
            <Stack direction={{ xs: "row", md: "row" }} p={7}>
                <Box flex={1}>
                    <Typography color={"white"} align='center'>
                        Contact Us
                    </Typography>
                    <Typography color={"white"} align='center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nulla?
                    </Typography>
                    <Typography color={"white"} align='center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, fugit.
                    </Typography>
                    <Typography color={"white"} align='center'>
                        Lorem ipsum dolor sit amet.
                    </Typography>

                </Box>
                <Box  flex={1}>
                    <Typography color={"white"} align='center'>
                        Data policy
                    </Typography>
                    <Typography color={"white"} align='center'>
                        Cookies
                    </Typography>
                    <Typography color={"white"} align='center'>
                        Data Safety
                    </Typography>
                </Box>
                <Box flex={1}>
                    <Typography color={"white"} align='center' variant='body2'>
                        Categories
                    </Typography>
                    <Typography color={"white"} align='center' variant='body2'>
                        Kids
                    </Typography>
                    <Typography color={"white"} align='center' variant='body2'>
                        Wome
                    </Typography>
                    <Typography color={"white"} align='center' variant='body2'>
                        Men
                    </Typography>
                </Box>
                <Box>
                    <Typography color={"white"} align='center'>
                        Follow Us
                
                            <SocialBox mt={3}>
                                <FacebookIcon />
                                <InstagramIcon />
                                <TwitterIcon />
                            </SocialBox>
                        </Typography>
                    
                </Box>
            </Stack>
        </Box>
    )
}

export default Footer