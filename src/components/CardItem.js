import React from 'react';
import { Link } from 'react-router-dom';
import BlockContent from "@sanity/block-content-to-react";

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt="Blog Image"
                    className='cards__item__img'/>
                </figure>
                <div className='cards__item__info'>
                    <BlockContent
                    blocks="/"
                    prrojectId="fgis4mwp"
                    dataset="production"
                    >{props.text}</BlockContent>
                </div>
            </li>
        </>
    )
}

export default CardItem;