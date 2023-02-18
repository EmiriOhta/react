import React from 'react'
import {Header, Footer} from '../index'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='container-md'>
        <div className='row'>
          <h1 className='hometext col-10 mt-3 mx-auto px-4'>
              Welcome to <br />
              Emiri's <br />
              HomePage 
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home