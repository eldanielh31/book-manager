import React from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./home.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const data = [
    {
        "id": 1,
        "title": "The text",
        "description": "texto descriptivo de the wanderer",
        "url": "https://edit.org/images/cat/portadas-libros-big-2019101610.jpg",
        "year": 2022,
        "available": 1,
        "author_id": 1,
        "created_at": "2022-09-30T02:32:48.000000Z",
        "updated_at": "2022-09-30T03:47:54.000000Z"
    },
    {
        "id": 2,
        "title": "Daniel dot com",
        "description": "texto descriptivo de the wanderer",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/05/Portada-libro.jpg",
        "year": 2022,
        "available": 1,
        "author_id": 2,
        "created_at": "2022-09-30T02:33:19.000000Z",
        "updated_at": "2022-09-30T02:33:19.000000Z"
    },
    {
        "id": 3,
        "title": "Souron's Eye",
        "description": "texto descriptivo de the eye of sauron",
        "url": "https://template.canva.com/EADtutwov_Q/1/0/256w-nJr37FPJeZs.jpg",
        "year": 2020,
        "available": 1,
        "author_id": 1,
        "created_at": "2022-09-30T02:34:32.000000Z",
        "updated_at": "2022-09-30T02:34:32.000000Z"
    },
    {
        "id": 4,
        "title": "Souron's Eye Sequel",
        "description": "texto descriptivo de the eye of sauron",
        "url": "https://www.adobe.com/es/express/create/cover/media_18d86248e8c6c00f18e7461e58ee5291a8485f45f.png?width=400&format=png&optimize=medium",
        "year": 2020,
        "available": 1,
        "author_id": 1,
        "created_at": "2022-09-30T02:34:40.000000Z",
        "updated_at": "2022-09-30T02:34:40.000000Z"
    },
    {
        "id": 5,
        "title": "Souron's Eye Sequel Sequel",
        "description": "texto descriptivo de the eye of sauron",
        "url": "https://www.researchgate.net/publication/334836566/figure/fig2/AS:787100425261056@1564670773357/Portada-del-libro-Origen-de-la-Vida-y-del-Hombre-publicado-por-la-BAC-en-1963.ppm",
        "year": 2021,
        "available": 1,
        "author_id": 1,
        "created_at": "2022-09-30T02:34:49.000000Z",
        "updated_at": "2022-09-30T02:34:49.000000Z"
    },
    {
        "id": 6,
        "title": "It Latino",
        "description": "texto descriptivo de the eye of sauron",
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/PORTADA_LIBRO_EL_FIN_DESDE_EL_PRINCIPIO.jpg",
        "year": 2019,
        "available": 0,
        "author_id": 3,
        "created_at": "2022-09-30T02:36:04.000000Z",
        "updated_at": "2022-09-30T02:36:04.000000Z"
    },
    {
        "id": 7,
        "title": "It Latino Pandora",
        "description": "texto descriptivo de the eye of sauron",
        "url": "https://s-media-cache-ak0.pinimg.com/originals/23/64/31/23643180b97ce3b3129e8ea096fc8a79.jpg",
        "year": 2020,
        "available": 0,
        "author_id": 3,
        "created_at": "2022-09-30T02:36:23.000000Z",
        "updated_at": "2022-09-30T02:36:23.000000Z"
    },
    {
        "id": 8,
        "title": "Ayuda al Exito",
        "description": "texto descriptivo de Ayuda al Exito",
        "url": "https://edit.org/photos/img/blog/ppe-crear-portadas-de-libros-online.jpg-840.jpg",
        "year": 2012,
        "available": 1,
        "author_id": 5,
        "created_at": "2022-09-30T02:37:00.000000Z",
        "updated_at": "2022-09-30T02:37:00.000000Z"
    },
    {
        "id": 9,
        "title": "El Cosmos",
        "description": "texto descriptivo del Cosmos",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrl4TzpYVbsE4pmLbDzm1ctjr95---1pR_Q&usqp=CAU",
        "year": 2015,
        "available": 1,
        "author_id": 4,
        "created_at": "2022-09-30T02:37:21.000000Z",
        "updated_at": "2022-09-30T02:37:21.000000Z"
    },
    {
        "id": 10,
        "title": "El Cosmos y Las Estrellas",
        "description": "texto descriptivo del Cosmos",
        "url": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623078210-la-naranja-mecanica-anthony-burgess-201505261226.jpg?crop=1xw:1xh;center,top&resize=480:*",
        "year": 2017,
        "available": 1,
        "author_id": 4,
        "created_at": "2022-09-30T02:37:37.000000Z",
        "updated_at": "2022-09-30T02:37:37.000000Z"
    }
]


const Home = () => {

    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/book/${id}`)
    }

    return (
        <div>
            <div className='containerListBooks'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        {
                            data.map(e => {
                                return (
                                    <Grid item xs={1.5} key={e.id}>
                                        <Card sx={{ maxWidth: 345 }} onClick={() => handleClick(e.id)}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="300"
                                                    image={e.url}
                                                    alt="imagen libro"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {e.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {e.description}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </Box>
            </div>

        </div>
    )
}

export default Home