import React from 'react';

const Form = () => {

    function send(e){

        e.preventDefault()
        let form1= new FormData()
        form1.append('name', 'Леонид')
        let form=new FormData(document.getElementById('form'))


        let headers=new Headers()

        headers.append('Authorization', 'Bearer 61ZtPrxgRVbzlp27tooVTdpoPx2WRUKmawZaOf28zljptnNucGElU9Tyn9W0nHWnahNSBqK5CPEOCnGv')
        let request_options={method: 'POST', 'headers':headers, 'body':form}
        console.log(headers)
        fetch('http://pets.сделай.site/api/pets', request_options)
            .then(response=>response.text())
            .then(response=>console.log(response))
    }

    return (
        <form onSubmit={send} id={'form'} className={'d-flex flex-wrap flex-row'} method={'POST'}>
            <input type={'text'} name={'name'} placeholder={'Введите Ваше имя'} className={'w-50'} style={{minWidth: '300px'}}/>
            <input type={"tel"} name={'phone'} placeholder={'Введите номер телефоны'} className={'w-50'} style={{minWidth: '300px'}}/>
            <input type={'email'} name={'email'} placeholder={'Введите e-mail'} className={'w-50'} style={{minWidth: '300px'}}/>
            <input type={'password'} name={'password'} placeholder={'Введите пароль'} className={'w-50'} style={{minWidth: '300px'}}/>
            <input type={'text'} name={'kind'} placeholder={'Введите вид животного'} className={'w-50'} style={{minWidth: '300px'}}/>
            <input type={'file'} name={'photos1'} placeholder={'Загрузите фотографию'} className={'w-50'} style={{minWidth: '300px'}}/>
            <input type={'file'} name={'photos2'} placeholder={'Загрузите фотографию'} className={'w-50'} style={{minWidth: '300px'}}/>
            <input type={'file'} name={'photos3'} placeholder={'Загрузите фотографию'} className={'w-50'} style={{minWidth: '300px'}}/>
            <input type={'text'} name={'description'} placeholder={'Опишите животное'} className={'w-50'} style={{minWidth: '300px'}}/>
            <input type={'text'} name={'mark'} placeholder={'Номер чипа'} className={'w-50'} style={{minWidth: '300px'}}/>
            <input type={'text'} name={'district'} placeholder={'Укажите район'} className={'w-50'} style={{minWidth: '300px'}}/>
            <input type={'radio'} name={'confirm'} placeholder={'Подвердите согласие на обработку данных'} className={'w-50'} style={{minWidth: '300px'}}/>
            <input type={'radio'} name={'registred'} placeholder={'Зарегистрироваться'} className={'w-50'} style={{minWidth: '300px'}}/>
            <input type={'submit'} value={'Отправить'} className={'w-50'} style={{minWidth: '300px'}}/>
            <input type={'reset'} value={'Очитстить'} className={'w-50'} style={{minWidth: '300px'}}/>
        </form>
    );
};

export default Form;