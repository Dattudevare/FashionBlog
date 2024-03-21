import { Box, CardMedia, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import imgg from "../../assets/static/image5.jpg"
import postiImage from "../../assets/static/image3.jpg"

function Detailss() {
    return (

        <Box>
            <Box sx={{
                backgroundImage: `url(${imgg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "250px"
            }} >
                <Typography color={"black"} variant='h2' align='center' sx={{ fontWeight: 900, padding: 10 }}>
                    Clicked Post Title

                </Typography>
            </Box>
            <Container>
                <hr />
                <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, sm: 2, md: 8 }} mt={8}
                >
                    <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}                        >

                        <Typography m={4}
                            align='center'
                            color={"gray"}
                            variant='body1'
                            sx={{ fontWeight: 900 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quo voluptate magnam sapiente. At neque minus asperiores odio perspiciatis eos expedita reprehenderit quaerat, eveniet non quas ducimus, perferendis excepturi modi?

                        </Typography>
                        <CardMedia
                            component="img"
                            height="340px"
                            alt='green iquana'
                            image={postiImage} />
                        <Typography variant='h4' align='center' mt={2}>
                            wait for it wait
                        </Typography>
                        <Typography m={2}
                            color={"gray"}
                            variant='body1'
                            sx={{ fontWeight: 900 }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis distinctio aliquam, incidunt eos suscipit ducimus fugiat ratione quas doloribus accusamus eveniet obcaecati! Quisquam ab rerum quasi sunt ullam delectus possimus nobis optio deserunt ipsam quo veritatis, sit natus autem vel reiciendis iusto velit quas corrupti animi quos obcaecati dignissimos! Nulla voluptate nostrum incidunt, ipsam dicta rem voluptatum deleniti. Nobis, inventore. Animi corrupti, odio culpa dolores molestias saepe dicta earum et eius placeat eaque odit quod, alias, sunt veniam harum ut delectus consequatur ipsam repellat. Modi, asperiores recusandae similique totam, distinctio sunt natus, dicta mollitia porro pariatur aperiam expedita harum molestiae obcaecati quia nobis exercitationem corrupti! Quo corporis voluptatibus aut eaque reprehenderit nam laudantium exercitationem illo id minima porro iusto commodi, sint hic repudiandae aliquam totam ad aperiam sequi sit quaerat consequatur ratione necessitatibus suscipit. Exercitationem, sunt labore quo earum iste in obcaecati laudantium delectus iusto, libero repudiandae incidunt aliquam deserunt!

                        </Typography>

                    </Box>
                </Stack>
            </Container>
        </Box>

    )
}

export default Detailss