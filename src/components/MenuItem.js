import React from 'react'
import { useState } from 'react/cjs/react.development'
import '../styles/menu.css'

const MenuItem = ({ image, name, price }) => {
    return (
        <>
         <div className="col-11 col-md-4">
          <div className="showMenuList">
                <div className="image_width" style={{backgroundImage: `url(${image})`}}></div>
                <h4 className="text-center">{name}</h4>
                <p className="text-center">$ 
                <span>{price}</span></p>
              </div>
            </div>
        </>
    )
}

export default MenuItem
