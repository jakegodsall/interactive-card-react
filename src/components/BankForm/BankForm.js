import React from 'react';
import Button from '../UI/Button/Button';

import './BankForm.css';

const BankForm = props => {

    const formHandler = e => {
        e.preventDefault();
    }

    return (
        <form className="bank-form" onSubmit={formHandler}>
            <div className="bank-form__row">
                <label className="bank-form__label">cardholder name</label>
                <input type="text" />
            </div>
            <div className="bank-form__row">
                <label className="bank-form__label">card number</label>
                <input type="number" />
            </div>
            <div className="bank-form__row-final">
                <div className="bank-form__col1">
                    <label className="bank-form__label">exp. date (mm/yy)</label>
                    <div>
                        <input type="number" />
                        <input type="number" />
                    </div>
                </div>
                <div className="bank-form__col2">
                    <label className="bank-form__label">cvc</label>
                    <input type="number" />
                </div>
                
                
            </div>
            <Button />
        </form>
    );
};

export default BankForm;