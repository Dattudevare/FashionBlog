import { AppBar, Box, Button, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';

const StyleedToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",

})
const SocialBox = styled(Box)({
    display: "flex",
    gap: 30,
})


const MenuBox = styled(Box)({
    display: "flex",
    gap: 5,
})


const Search1 = styled(Box)({
    display: "flex",
    gap: 40,
})

const MenuItems = [
    {
        Name: "Home",
        Link: "/"
    },
    {
        Name: "Products",
        Link: "/"
    },
    {
        Name: "Portfolio",
        Link: "/"
    },
    {
        Name: "Blog",
        Link: "/"
    },
    {
        Name: "Contact Us",
        Link: "/"
    }



]

function Navabar() {
    const[open,Setopen]=useState(false);
    return (
        <>
            <AppBar sx={{ background: "black" ,position:"static"}}>
                <StyleedToolbar>
                    <SocialBox>
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                    </SocialBox>
                    <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>

                        {
                            MenuItems.map((items) => {
                                return (

                                    <Typography sx={{ cursor: "pointer", fontSize: "14px", fontWeight: "bold" }}>{items.Name}</Typography>
                                )

                            })
                        }

                    </MenuBox>
                    <Search1> <InputBase placeholder='Search ,..' sx={{ color: "white" }} /> Search
                    <MenuIcon sx={{color:"white" ,display: { xs: "block", sm: "block", md: "none" }}}
                    
                    onClick={()=>Setopen(!open)}
                    />
                    
                    </Search1>
                    
                </StyleedToolbar>
                <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
    
      >
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"

        open={open}
        onClose={()=>Setopen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{width:350, height:"90vh",}}>
        {
                            MenuItems.map((items) => {
                                return (

                                    <MenuItem sx={{ cursor: "pointer", fontSize: "14px", fontWeight: "bold" }}>{items.Name}</MenuItem>
                                )

                            })
                        }
        </Box>
    

      </Menu>
            </AppBar>
        </>
    )
}

export default Navabar;