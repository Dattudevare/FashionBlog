import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function Card({ cardImage }) {
    return (
        <>
            <Box>
                <Link to="http://localhost:5173/Detailss" style={{textDecoration:"none"}}> {""}
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="100%"
                        image={cardImage}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1" align="center" component="div" color="tomato">
                            Perfumes
                        </Typography>
                        <Typography gutterBottom variant="h5" align="center" component="div">
                            wering this will ake everyone love you
                        </Typography>
                        <Typography gutterBottom variant="body2" align="center" component="div" color="text.secondry" >
                            it's womes love
                        </Typography>
                        <Typography variant="h5" align='center' color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Link>
            </Box>
        </>
    )
}

export default Card