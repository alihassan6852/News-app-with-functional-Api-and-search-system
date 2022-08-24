import React from 'react'

const Newscard = (props) => {
  return (
    <>
        
        
    <div className="cards">
      <h1 className="title">{props.data.title}</h1>
      <img className="images" src={props.data.urlToImage} />
      <p>{props.data.content}</p>
      <p className="category">{props.data.description}</p>
      <p className="price">{props.data.publishedAt}</p>
    </div>
 

</>
  )
}

export default Newscard