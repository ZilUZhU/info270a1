import React, { useState, useEffect } from 'react';

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
        <div>
            <div>
                {cardsArray}
            </div>
            <div>
                <p>Sorry, these b*llsh*ts are a mess to me. There is NO WAY I can categorize them.</p>
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