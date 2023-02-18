import React from 'react'
import {Header, Footer, Title } from '../index'
import image from "../img/moonicon.png"


let items = [
  {id: 1, name:'Gmail',  img:image},
  {id: 2, name:'Twitter',img:image},
  {id: 3, name:'LinkdIn',img:image},
  {id: 4, name:'Github',img:image},

]



const Contact = () => {
  return (
    <div>
      <Header />
      <Title 
        title={'Contact'}
      />
      <div className = 'container col-6'>
          <div className = 'row my-5'>
              {items.map((item) => 
                <div className = 'col-3 text-center mt-5'>
                    <p className='py-3'><img className='skillimg' src={item.img} alt="#" /></p>
                    <h3 className='contactName'>{item.name}</h3>
                </div>
              )}
          </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact