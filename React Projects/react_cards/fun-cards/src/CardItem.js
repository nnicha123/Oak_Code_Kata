import React from 'react';
import './App.css';


function CardItem(props) {
    return (
        <div className="col card p-0">
            <img className="card-image" src={props.src}/>
            <div className="card-content">
    <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    )
}
export default CardItem;