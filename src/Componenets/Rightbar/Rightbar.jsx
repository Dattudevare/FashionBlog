import { Avatar, Box, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import postImage2 from "../../assets/static/image2.jpg"
import postImage3 from "../../assets/static/image3.jpg"
import postImage4 from "../../assets/static/image4.jpg"

function Rightbar() {
    return (

        <Box>
            <Typography textAlign="center" bgcolor={"black"} color={"white"}>
                Most Popular
            </Typography>
            <List sx={{ width: '100%', height: "100%", maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar sx={{ height: 80, width: 80 }} variant='square' alt="Remy Sharp" src={postImage4} />
                    </ListItemAvatar>
                    <ListItemText

                        secondary={

                            " — I'll be in your neighborhood doing errands this…"

                        }
                    />
                </ListItem>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar sx={{ height: 80, width: 80 }} variant='square' alt="Remy Sharp" src={postImage2} />
                    </ListItemAvatar>
                    <ListItemText
                        
                        secondary={

                            " — I'll be in your neighborhood doing errands this…"

                        }
                    />
                </ListItem>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar sx={{ height: 80, width: 80 }} variant='square' alt="Remy Sharp" src={postImage3} />
                    </ListItemAvatar>
                    <ListItemText
                        
                        secondary={

                            " — I'll be in your neighborhood doing errands this…"

                        }
                    />
                </ListItem>
                <Divider variant='inset' component={"li"}/>

            </List>
            <Typography textAlign="center" bgcolor={"black"} color={"white"}>
                Most Popular
            </Typography>
            <Card cardImage={postImage3}/>
        </Box>

    )



}

export default Rightbar