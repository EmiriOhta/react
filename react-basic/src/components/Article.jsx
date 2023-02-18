import React from 'react'

const Article = (props) => {
  return (
      <div className="container box justify-content-around mt-5">
        <div className="article col-5 aboutTitle text-center">
          <h2>{props.headline}</h2>
        </div>
        <div className="article col-6 text-box">
          <p>{props.text}</p>
        </div>
      </div>
  )
}

export default Article