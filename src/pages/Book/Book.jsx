import React, { useState } from 'react'

import './book.css'

const Book = () => {

    // const data = [
    //     {
    //         "id": 1,
    //         "title": "The text",
    //         "description": "texto descriptivo de the wanderer",
    //         "url": "https://edit.org/images/cat/portadas-libros-big-2019101610.jpg",
    //         "year": 2022,
    //         "available": 1,
    //         "author_id": 1,
    //         "created_at": "2022-09-30T02:32:48.000000Z",
    //         "updated_at": "2022-09-30T03:47:54.000000Z"
    //     },
    //     {
    //         "id": 2,
    //         "title": "Daniel dot com",
    //         "description": "texto descriptivo de the wanderer",
    //         "url": "https://upload.wikimedia.org/wikipedia/commons/0/05/Portada-libro.jpg",
    //         "year": 2022,
    //         "available": 1,
    //         "author_id": 2,
    //         "created_at": "2022-09-30T02:33:19.000000Z",
    //         "updated_at": "2022-09-30T02:33:19.000000Z"
    //     },
    //     {
    //         "id": 3,
    //         "title": "Souron's Eye",
    //         "description": "texto descriptivo de the eye of sauron",
    //         "url": "https://template.canva.com/EADtutwov_Q/1/0/256w-nJr37FPJeZs.jpg",
    //         "year": 2020,
    //         "available": 1,
    //         "author_id": 1,
    //         "created_at": "2022-09-30T02:34:32.000000Z",
    //         "updated_at": "2022-09-30T02:34:32.000000Z"
    //     },
    //     {
    //         "id": 4,
    //         "title": "Souron's Eye Sequel",
    //         "description": "texto descriptivo de the eye of sauron",
    //         "url": "https://www.adobe.com/es/express/create/cover/media_18d86248e8c6c00f18e7461e58ee5291a8485f45f.png?width=400&format=png&optimize=medium",
    //         "year": 2020,
    //         "available": 1,
    //         "author_id": 1,
    //         "created_at": "2022-09-30T02:34:40.000000Z",
    //         "updated_at": "2022-09-30T02:34:40.000000Z"
    //     },
    //     {
    //         "id": 5,
    //         "title": "Souron's Eye Sequel Sequel",
    //         "description": "texto descriptivo de the eye of sauron",
    //         "url": "https://www.researchgate.net/publication/334836566/figure/fig2/AS:787100425261056@1564670773357/Portada-del-libro-Origen-de-la-Vida-y-del-Hombre-publicado-por-la-BAC-en-1963.ppm",
    //         "year": 2021,
    //         "available": 1,
    //         "author_id": 1,
    //         "created_at": "2022-09-30T02:34:49.000000Z",
    //         "updated_at": "2022-09-30T02:34:49.000000Z"
    //     },
    //     {
    //         "id": 6,
    //         "title": "It Latino",
    //         "description": "texto descriptivo de the eye of sauron",
    //         "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/PORTADA_LIBRO_EL_FIN_DESDE_EL_PRINCIPIO.jpg",
    //         "year": 2019,
    //         "available": 0,
    //         "author_id": 3,
    //         "created_at": "2022-09-30T02:36:04.000000Z",
    //         "updated_at": "2022-09-30T02:36:04.000000Z"
    //     },
    //     {
    //         "id": 7,
    //         "title": "It Latino Pandora",
    //         "description": "texto descriptivo de the eye of sauron",
    //         "url": "https://s-media-cache-ak0.pinimg.com/originals/23/64/31/23643180b97ce3b3129e8ea096fc8a79.jpg",
    //         "year": 2020,
    //         "available": 0,
    //         "author_id": 3,
    //         "created_at": "2022-09-30T02:36:23.000000Z",
    //         "updated_at": "2022-09-30T02:36:23.000000Z"
    //     },
    //     {
    //         "id": 8,
    //         "title": "Ayuda al Exito",
    //         "description": "texto descriptivo de Ayuda al Exito",
    //         "url": "https://edit.org/photos/img/blog/ppe-crear-portadas-de-libros-online.jpg-840.jpg",
    //         "year": 2012,
    //         "available": 1,
    //         "author_id": 5,
    //         "created_at": "2022-09-30T02:37:00.000000Z",
    //         "updated_at": "2022-09-30T02:37:00.000000Z"
    //     },
    //     {
    //         "id": 9,
    //         "title": "El Cosmos",
    //         "description": "texto descriptivo del Cosmos",
    //         "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrl4TzpYVbsE4pmLbDzm1ctjr95---1pR_Q&usqp=CAU",
    //         "year": 2015,
    //         "available": 1,
    //         "author_id": 4,
    //         "created_at": "2022-09-30T02:37:21.000000Z",
    //         "updated_at": "2022-09-30T02:37:21.000000Z"
    //     },
    //     {
    //         "id": 10,
    //         "title": "El Cosmos y Las Estrellas",
    //         "description": "texto descriptivo del Cosmos",
    //         "url": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623078210-la-naranja-mecanica-anthony-burgess-201505261226.jpg?crop=1xw:1xh;center,top&resize=480:*",
    //         "year": 2017,
    //         "available": 1,
    //         "author_id": 4,
    //         "created_at": "2022-09-30T02:37:37.000000Z",
    //         "updated_at": "2022-09-30T02:37:37.000000Z"
    //     }
    // ]

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [url, setUrl] = useState('');
    const [year, setYear] = useState('');
    const [autor, setAutor] = useState('');
    const [available, setAvailable] = useState(0);

    const handleClick = () => {
        console.log(title, desc, url, year, autor, available)
    }

    return (
        <div className='containerBook'>
            <div className='updateContainerBook'>
                <h1 className='headerUpdate'>
                    Actualizar
                </h1>
                <div className='containerWrapper'>

                    <div className='wrapperFormUpdate'>

                        <form className='formUpdateBook'>

                            <label className='inputUpdate'>
                                Title:
                                <br />
                                <input className='inputFieldUpdate' type="text" id='title' onChange={(e) => { setTitle(e.target.value) }} />
                            </label>

                            <label className='inputUpdate'>
                                Description:
                                <br />
                                <input className='inputFieldUpdate' type="text" id='description' onChange={(e) => { setDesc(e.target.value) }} />
                            </label>


                            <label className='inputUpdate'>
                                URL:
                                <br />
                                <input className='inputFieldUpdate' type="text" id='url' onChange={(e) => { setUrl(e.target.value) }} />
                            </label>


                            <label className='inputUpdate'>
                                Year:
                                <br />
                                <input className='inputFieldUpdate' type="text" id='year' onChange={(e) => { setYear(e.target.value) }} />
                            </label>


                            <label className='inputUpdate'>
                                Autor:
                                <br />
                                <input className='inputFieldUpdate' type="text" id='autor' onChange={(e) => { setAutor(e.target.value) }} />
                            </label>


                            <label className='inputUpdate'>
                                Available:
                                <br />
                                <input type="number" id='available' onChange={(e) => { setAvailable(e.target.value) }} />
                            </label>


                        </form>

                        <button className="button-28" onClick={() => { handleClick() }}>
                            OK
                        </button>

                    </div>
                </div>
            </div>
            <div className='infoContainerBook'>
                Hola 2
            </div>
        </div>
    )
}

export default Book