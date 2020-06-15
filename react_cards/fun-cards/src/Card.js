import React from 'react';
import './App.css';
import CardItem from './CardItem';

function Card(){
    return(
        <div className="container-fluid wrapper">
            <div className="row row-cols-lg-3">
                <CardItem src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-bs1SjmA5sqEuOfk20dZZIRDKe6b7ERXH5ES4t_yywurPLwoO&usqp=CAU" title="The First Title" text="The First Text"/>
                <CardItem src="https://static.bangkokpost.com/media/content/dcx/2020/02/09/3519624.jpg" title="The Second Title" text="The Second Text"/>
                <CardItem src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHmE6jrF5Bcmp6vENvME5xqAtQmWO8IG2ws2mXCN5M95eoXhqd&usqp=CAU" title="The Third Title" text="The Third Text"/>
            </div>
        </div>
    )
}
export default Card