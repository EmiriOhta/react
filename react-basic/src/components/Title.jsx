import React from 'react'

const Title = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='title text-center mt-4'>{props.title}</h1>
      </div>
    </div>
  )
}

export default Title