import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Hero from '../Hero/Hero'
import Categeories from '../Category/Categeories'
import Recentss from '../Recentss/Recentss'
import Rightbar from '../Rightbar/Rightbar'

const Home = () => {
  return (
<Box>
<Hero/>
<Container>
    <Categeories/>
    <hr/>
<Stack direction="row" spacing={8} mt={8}>
    <Box flex={3} sx={{padding:"18px 100px 100px 100px"}}>
        <Recentss/>
    </Box>
    <Box flex={1}>
        <Rightbar/>
    </Box>
    
</Stack>
</Container>
</Box> 
 )
}

export default Home