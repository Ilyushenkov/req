import React, {useEffect, useState} from 'react';
import Card from "./card";
import '../css/style.css'
import Download from "./download";
import ReactDOM from 'react-dom/client';


function my_request(pets, setPets){
    document.getElementById('download').style.display='table'
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+localStorage.token);
    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
        method: 'GET',
        headers: myHeaders
    };
    fetch("http://pets.сделай.site/api/pets", requestOptions)
        .then(response=>response.json())
        .then(response=>setPets(response))
        .then(()=>{document.getElementById('download').className='none'})

}
const Cards = () => {
let [pets, setPets]=useState({data:{orders:[]}})
    useEffect(()=>my_request(pets, setPets), [pets])
    let cards=pets.data.orders.map((pet, index)=><Card pet={pet} key={index}/>)
    return (
        <div className='d-flex flex-row flex-wrap'>
            {cards}
           <Download style={{display: 'none'}}/>
        </div>
    );
};

export default Cards;
