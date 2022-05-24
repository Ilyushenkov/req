import React from 'react';

const Form = () => {
    function send(e){
        e.preventDefault()
        let form=new FormData(document.getElementById('form'))
        console.log(form.getAll('password'))
    }

    return (
        <form onSubmit={send} id={'form'}>
            <input type={'text'} name={'login'} placeholder={'Введите логин'}/>
            <input type={'password'} name={'password'} placeholder={'Введите пароль'}/>
            <input type={'submit'} value={'Отправить'}/>

        </form>
    );
};

export default Form;