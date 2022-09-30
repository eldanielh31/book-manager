import React, { useState } from 'react'

import './newbook.css'

const NewBook = () => {

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
      <div className='createContainerBook'>
          <h1 className='headerCreate'>
              Crear
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
  )
}

export default NewBook