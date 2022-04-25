import React from 'react'
import './productList.css'
import Product from '../product/Product'
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Works</h1>
            <p className="pl-desc">These are my works. One of them is my group project and the other ones my personal projects.<br></br>Html, Css, Javascript, Nodejs, React, JQuerry, MongoDB </p>
        </div>
        <div className="pl-list">
         {products.map((item) => (
           <Product key={item.id} img={item.img} link={item.link} title={item.title} desc={item.desc} tech={item.tech}/>
         ))}
        </div>
    </div>
  )
}

export default ProductList