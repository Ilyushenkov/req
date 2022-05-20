import React from 'react';

const Card = (props) => {
    return (
                <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: '300px', width: '45%'}}>
                    <img src={'http://pets.сделай.site/'+props.pet.photos} className="w-75" alt="рисунок животного"/>
                        <p className="w-50 text-primary" style={{minWidth: '250px'}}>id:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>{props.pet.id}</p>

                        <p className="w-50 text-primary" style={{minWidth: '250px'}}>Имя:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>{props.pet.name}</p>

                        <p className="w-50 text-primary" style={{minWidth: '250px'}}>Телефон:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>{props.pet.phone}</p>

                        <p className="w-50 text-primary" style={{minWidth: '250px'}}>Вид животного:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>{props.pet.kind}</p>

                        <p className="w-50 text-primary" style={{minWidth: '300px'}}>Описание:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>{props.pet.description}</p>

                        <p className="w-50 text-primary" style={{minWidth: '300px'}}>Номер чипа:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>{props.pet.mark}</p>

                        <p className="w-50 text-primary" style={{minWidth: '300px'}}>Район:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>{props.pet.district}</p>

                        <p className="w-50 text-primary" style={{minWidth: '300px'}}>Дата:</p>
                        <p className="w-50" style={{minWidth: '300px'}}>{props.pet.date}</p>
                </div>

    );
};

export default Card;