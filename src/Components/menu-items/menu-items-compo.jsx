import React from 'react';
import './menu-items-styles.scss'

const MenuItems = ({title,imageUrl,size}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} 
    className = { `${size} menu-item`}>
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
);

export default MenuItems;