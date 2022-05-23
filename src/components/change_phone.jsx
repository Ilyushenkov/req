import React, {useState} from 'react';

const ChangePhone = () => {
    let [phone, setPhone]=useState({phone: ''})
    function send(e){
        e.preventDefault()
        let body=JSON.stringify(phone)
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${localStorage.token}`)
        myHeaders.append("Content-Type", "application/json")
        let request_options={headers: myHeaders, body: body, method: 'PATCH'}
        fetch('http://pets.сделай.site/api/users/phone', request_options)

            .then(response=>{let status=response.status
                switch(status){
                case 200: document.getElementById('message').style.display='block'
                          document.getElementById('error').style.display='none'
                    break
                case 401: document.getElementById('message').style.display='none'
                          document.getElementById('error').style.display='block'
                    break
            }}
            )}
    return (
        <div>
            <form onSubmit={send}>
            <h1 className={'text-center text-white bg-info p-1'}>Изменение номера телефона</h1>
            <input type={'tel'} placeholder={'Введите новый номер телефона'} onChange={(e)=>setPhone({phone: e.target.value})}/>
            <input type={'submit'} value={'Отправить'} className={'bg-info text-white'}/>
            </form>
            <div className={'text-center border-1 border-info rounded-1 border p-1 m-3'} id={'message'} style={{display: 'none'}}>Вы успешно измели номер телефона</div>
            <div className={'text-center border-1 border-danger rounded-1 border p-1 m-3'} id={'error'} style={{display: 'none'}}>Вы не авторизовались</div>
        </div>
    );
};

export default ChangePhone;