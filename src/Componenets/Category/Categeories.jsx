import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import kids from "../../assets/static/kids.jpg"
import women from "../../assets/static/women.jpg"
import men from "../../assets/static/men.jpg"

const StyledBox = styled(Box)({
    height: 200,
    width: "100%",
    cursor: "pointer",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundSize:"cover"
})
const StyleTypography = styled(Typography)({
    margin: "25% 50px 25% 50px",
    background: "white",
    opacity: "0.8"
})


const Categeories = () => {
    return (
        <Box>

            <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:"1",sm:2,md:4}}mt={5}>
                <StyledBox sx={{backgroundImage:`url(${kids})`}}>
                    <Typography align='center' variant='h3'>Kids</Typography>
                </StyledBox>
                <StyledBox sx={{backgroundImage:`url(${women})`}}>
                    <Typography align='center' variant='h3'>Kids</Typography>
                </StyledBox>
                <StyledBox sx={{backgroundImage:`url(${men})`}}>
                    <Typography align='center' variant='h3'>Kids</Typography>
                </StyledBox>

            </Stack>
        </Box>
    )
}

export default Categeories