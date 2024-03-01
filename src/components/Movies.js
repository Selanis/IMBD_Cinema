import './Data.scss';
import React, { Component} from 'react'
import $, { extend } from 'jquery';

function Movies(props) {
    const { 
        poster: poster,
        id: id,
        name: name,
        type: type,
        genres: genres,
    } = props

    return (
        <div className='card' style={{background: 'url("linear.svg") center/cover no-repeat, url("{https://image.openmoviedb.com/kinopoisk-images/9784475/0d357941-77df-4aa2-b1b0-0f608887a2b9/x1000}") center/cover no-repeat'}}>
            <div className="card__text">
                <h2>{name}</h2>
                <h3>{type}</h3>
            </div>
        </div>
)
}

export {Movies}