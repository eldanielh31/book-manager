import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

import './book.css'

const Book = () => {

    const data = {
        "id": 1,
        "title": "The text",
        "description": "texto descriptivo de the wanderer",
        "url": "https://edit.org/images/cat/portadas-libros-big-2019101610.jpg",
        "year": 2022,
        "available": 1,
        "author_id": 1,
        "created_at": "2022-09-30T02:32:48.000000Z",
        "updated_at": "2022-09-30T03:47:54.000000Z"
    }

    const location = useLocation()
    const bookLocation = location.pathname.split("/")[2];
    const replace = /,/g

    const bookId = bookLocation.replace(replace, ':')

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [url, setUrl] = useState('');
    const [year, setYear] = useState('');
    const [autor, setAutor] = useState('');
    const [available, setAvailable] = useState(0);

    const handleClick = () => {
        console.log(title, desc, url, year, autor, available, bookId)
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
                <img src={data.url} className="imageUpdate" alt='imagen libro'/>
                <h1>
                    {data.title}
                </h1>
                <h4>
                    {data.year}
                </h4>
                <h3>
                    {data.author_id}
                </h3>
                <h2>
                    {data.description}
                </h2>
            </div>
        </div>
    )
}

export default Book