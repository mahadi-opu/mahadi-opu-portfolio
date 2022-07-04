import React, {useState} from 'react';
import './form.css';



const Form = () => {

const [enteredName, setEnteredName]= useState('')
const [enteredEmail, setEnteredEmail]= useState('')
const [enteredMessage, setEnteredMessage]= useState('')

const submitHandler =(e)=>{
    e.preventDefault()
    console.log('submitted')
}

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className='form__input'>
                <input type="text" placeholder='Your Name' value={enteredName} onChange={e=> setEnteredName(e.target.value)} />
            </div>
            <div className='form__input'>
                <input type="email" placeholder='Your Email' value={enteredEmail} onChange={e=> setEnteredEmail(e.target.value)} />
            </div>
            <div className='form__input'>
                <textarea placeholder='Write Massage' value={enteredMessage} onChange={e=> setEnteredMessage(e.target.value)}> </textarea>
            </div>
            <button className='submit__btn' type='submit'>
                submit
            </button>
        </form>
    );
};

export default Form;