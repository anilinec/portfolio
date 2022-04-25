import React from 'react'
import './product.css'


const Product = ({img,link,title,desc,tech}) => {
  return (
    <div className="abc">
      <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
        <a href={link} target="_blank" rel='noreferrer'>
        <img src={img} alt="" className="p-img" />
        </a>
      </div>
    <div className="bottom">
       <p className="p-title">
         <h1>{title}</h1> 
         <h2>{desc}</h2>
         <h2>{tech}</h2>
         </p></div>
    </div>
  )
}


export default Product