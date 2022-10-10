import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function WholeList(props) {
    let a = props.list;
    useEffect(setCards
        , []);
    const [cardsArray, setCardsArray] = useState(null);
    function setCards() {
        let i = 0;
        setCardsArray(a.map((itemObj) => {
            let cards = <EventCard
                key={i}
                item={itemObj}
            />
            i = i + 1;
            return cards;
        }));
    }

    return (
        <div className='body all'>
            <div>
                {cardsArray}
            </div>
            <div>
                <p className='important'>Sorry, these b*llsh*ts are a mess to me. There is NO WAY I can categorize them.</p>
                <Link to="../" className="btn btn-danger" >Go Back</Link>
            </div>


        </div>
    )
}

function EventCard(props) {
    return (
        <div className="col d-flex justify-content-center">
            <div className="card">
                <div className="card-body">
                    <div>
                        <p>{props.item.summary}</p>
                    </div>
                    <div className="image-container">
                        <img src={props.item.pic} alt={props.item.picAlt} />
                    </div>

                </div>
            </div>
        </div>
    );
}