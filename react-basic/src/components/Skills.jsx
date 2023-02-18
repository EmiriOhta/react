import React from 'react'
import {Header, Footer, Title} from '../index'
import image from "../img/moonicon.png"

let items = [
  {id: 1, name:'HTML',  img:image, text:'テキストテキストテキスト'},
  {id: 2, name:'CSS',img:image, text:'テキストテキストテキスト'},
  {id: 3, name:'JavaScript',img:image, text:'テキストテキストテキスト'},
  {id: 4, name:'React',img:image, text:'テキストテキストテキスト'},
  {id: 5, name:'PHP',img:image, text:'テキストテキストテキスト'},
  {id: 6, name:'Git',img:image, text:'テキストテキストテキスト'},

]

const Skills = () => {
  return (
    <div>
      <Header />
      <Title 
        title={'Skills'}
      />
      <div className = 'container'>
          <div className = 'row'>
              {items.map((item) => 
                <div className = 'col-4 text-center mt-5'>
                    <h3 className='skillhead'>{item.name}</h3>
                    <p className='py-3'><img className='skillimg' src={item.img} alt="#" /></p>
                    <p className='skilltext'>{item.text}</p>
                </div>
              )}
          </div>
      </div>


      <Footer />
    </div>
  )
}


export default Skills