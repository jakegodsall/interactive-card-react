import React, { useState } from 'react';
import Button from '../UI/Button/Button';

import './BankForm.css';

const BankForm = props => {

    const [holderName, setHolderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvc, setCvc] = useState('');

    const holderNameHandler = e => {
        setHolderName(e.target.value);
    };

    const cardNumberHandler = e => {
        setCardNumber(e.target.value);
    };

    const expMonthHandler = e => {
        setExpMonth(e.target.value);
    };

    const expYearHandler = e => {
        setExpYear(e.target.value);
    };

    const cvcHandler = e => {
        setCvc(e.target.value);
    };

    const formHandler = e => {
        e.preventDefault();

        // create user data object
        const userData = {
            name: holderName,
            cardNumber: cardNumber,
            expMonth: expMonth,
            expYear: expYear,
            cvc: cvc,
            id: Math.random().toString()
        };

        console.log(userData);

        // reset form values
        setHolderName('');
        setCardNumber('');
        setExpMonth('');
        setExpYear('');
        setCvc('');
    };

    return (
        <form className="bank-form" onSubmit={formHandler}>
            <div className="bank-form__row">
                <label className="bank-form__label">cardholder name</label>
                <input className="bank-form__input" type="text" value={holderName} onChange={holderNameHandler} />
            </div>
            <div className="bank-form__row">
                <label className="bank-form__label">card number</label>
                <input className="bank-form__input" type="number" value={cardNumber} onChange={cardNumberHandler} />
            </div>
            <div className="bank-form__row final">
                <div className="bank-form__col1">
                    <label className="bank-form__label">exp. date (mm/yy)</label>
                    <div className="bank-form__exp-date">
                        <input className="bank-form__input" type="number" value={expMonth} onChange={expMonthHandler} />
                        <input className="bank-form__input" type="number" value={expYear} onChange={expYearHandler} />
                    </div>
                </div>
                <div className="bank-form__col2">
                    <label className="bank-form__label">cvc</label>
                    <input className="bank-form__input" type="number" value={cvc} onChange={cvcHandler} />
                </div>
            </div>
            <Button />
        </form>
    );
};

export default BankForm;