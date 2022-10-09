import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export function Detail(props) {
    const urlParams = useParams();
    const index = urlParams.num;
    const item = props.list[index];
    return (
        <div className='body'>
            <div>
                <p>{item.summary}</p>
                <img src={item.pic} alt={item.picAlt}></img>
            </div>
        </div>
    );
}