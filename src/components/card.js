import React from 'react'


export default function card({id, title, image, instructor}) {
    return ( 
        <div className='card bg-dark'>
            <div className='card-body text-light'> 
            <img src={image} alt=''></img>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>
                {instructor}
            </p>
            <a href='#' className="btn btn-outline-primary">Ir al sitio web.</a>
            </div>
        </div>
    )
}