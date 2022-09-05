import React, { useState } from 'react';
import Button from '../UI/Button/Button';

import './BankForm.css';

const BankForm = props => {
	// input states
	const [holderName, setHolderName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [expMonth, setExpMonth] = useState('');
	const [expYear, setExpYear] = useState('');
	const [cvc, setCvc] = useState('');

	// error states
	const [holderNameError, setHolderNameError] = useState('');
	const [cardNumberError, setCardNumberError] = useState('');
	const [expMonthError, setExpMonthError] = useState('');
	const [expYearError, setExpYearError] = useState('');
	const [cvcError, setCvcError] = useState('');

	const onlyNumbers = value => {
		const valuesArray = value.split('');
		const nums = '0123456789';

		valuesArray.forEach(el => {
			if (!nums.includes(el)) {
				return false;
			}
		});
		return true;
	};

	const holderNameHandler = e => {
		setHolderName(e.target.value);
	};

	const cardNumberHandler = e => {
		const value = e.target.value;

		setCardNumber(value);

		// reset error message
		if (value.length === 0) {
			setCardNumberError('');
		}

		// validate every character is a number
		if (onlyNumbers(value)) {
			setCardNumberError('Wrong format, numbers only');
		}
	};

	const expMonthHandler = e => {
		setExpMonth(e.target.value);
	};

	const expYearHandler = e => {
		setExpYear(e.target.value);
	};

	const cvcHandler = e => {
		const value = e.target.value;
		setCvc(e.target.value);

		console.log(cvc);

		// reset error message
		if (value.length === 0) {
			setCvcError('');
		}
	};

	const submitHandler = e => {
		e.preventDefault();

		// name onsubmit validation
		if (holderName.length === 0) {
			setHolderNameError("Can't be blank");
		} else if (holderName.split(' ').length !== 2) {
			setHolderNameError('Please enter your forename and surname');
		}

		// card number onsubmit validation
		if (cardNumber.length === 0) {
			setCardNumberError("Can't be blank");
		} else if (cardNumber.length < 16 || cardNumber.length > 18) {
			setCardNumberError('Card number is not the correct length');
		} else {
			setCardNumberError('');
		}

		// expiry month onsubmit validation
		if (expMonthError.length === 0) {
			setExpMonthError("Can't be blank");
		}

		// expiry year onsubmit validation
		if (expYearError.length === 0) {
			setExpYearError("Can't be blank");
		}

		if (cvc.length === 0) {
			// cvc on submitvalidation
			setCvcError("Can't be blank");
		} else if (cvc.length !== 3) {
			setCvcError('Must be exactly three digits');
		} else {
			setCvcError('');
		}

		// create user data object
		const userData = {
			name: holderName,
			cardNumber: cardNumber,
			expMonth: expMonth,
			expYear: expYear,
			cvc: cvc,
			id: Math.random().toString(),
		};

		console.log(userData);
	};

	return (
		<form
			className='bank-form'
			onSubmit={submitHandler}
		>
			<div className='bank-form__row'>
				<label className='bank-form__label'>cardholder name</label>
				<input
					className='bank-form__input'
					type='text'
					value={holderName}
					onChange={holderNameHandler}
				/>
				{<p>{holderNameError}</p>}
			</div>
			<div className='bank-form__row'>
				<label className='bank-form__label'>card number</label>
				<input
					className='bank-form__input'
					type='text'
					value={cardNumber}
					onChange={cardNumberHandler}
				/>
				{<p>{cardNumberError}</p>}
			</div>
			<div className='bank-form__row final'>
				<div className='bank-form__col1'>
					<label className='bank-form__label'>
						exp. date (mm/yy)
					</label>
					<div className='bank-form__exp-date'>
						<input
							className='bank-form__input'
							type='number'
							value={expMonth}
							onChange={expMonthHandler}
						/>
						{<p>{expMonthError}</p>}
						<input
							className='bank-form__input'
							type='number'
							value={expYear}
							onChange={expYearHandler}
						/>
						{<p>{expYearError}</p>}
					</div>
				</div>
				<div className='bank-form__col2'>
					<label className='bank-form__label'>cvc</label>
					<input
						className='bank-form__input'
						type='number'
						value={cvc}
						onChange={cvcHandler}
					/>
					{<p>{cvcError}</p>}
				</div>
			</div>
			<Button />
		</form>
	);
};

export default BankForm;
