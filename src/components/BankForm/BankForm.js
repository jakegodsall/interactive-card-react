import React, { useState } from 'react';

import FormInput from './FormInput';
import Button from '../UI/Button/Button';

import './BankForm.css';

const BankForm = props => {
	const [values, setValues] = useState({
		name: '',
		cardNumber: '',
		expMonth: '',
		expYear: '',
		cvc: '',
	});

	const inputs = [
		{
			id: 1,
			name: 'name',
			label: 'cardholder name',
			placeholder: 'e.g. Jane Appleseed',
			type: 'text',
			errorMessage:
				'Please enter your full name (first name and surname separated by a space)',
			required: true,
		},
		{
			id: 2,
			name: 'cardNumber',
			label: 'card number',
			placeholder: 'e.g. 1234 5678 9123 0000',
			type: 'number',
			errorMessage: 'Wrong format, numbers only',
			required: true,
		},
		{
			id: 3,
			name: 'expMonth',
			label: 'exp. date',
			placeholder: 'MM',
			type: 'number',
			errorMessage: 'Must be a month in the range 00-12',
			required: true,
		},
		{
			id: 4,
			name: 'expYear',
			label: '(mm/yy)',
			placeholder: 'YY',
			type: 'number',
			errorMessage: 'Must be a year in the range (00-22)',
			required: true,
		},
		{
			id: 5,
			name: 'cvc',
			label: 'cvc',
			placeholder: 'e.g. 123',
			type: 'number',
			errorMessage: 'Enter a valid CVC (3 digits)',
			required: true,
		},
	];

	const submitHandler = e => {
		e.preventDefault();
	};

	const onChange = e => {
		console.log(e.target.value, e.target.name);
		setValues({ ...values, [e.target.name]: e.target.value });
		console.log(values);
	};

	return (
		<form
			className='bank-form'
			onSubmit={submitHandler}
		>
			<FormInput
				className='bank-form__row'
				key={inputs[0].id}
				name={inputs[0].name}
				label={inputs[0].label}
				type={inputs[0].type}
				placeholder={inputs[0].placeholder}
				errorMessage={inputs[0].errorMessage}
				required={inputs[0].required}
				value={values[inputs[0].name]}
				onChange={onChange}
			/>

			<FormInput
				className='bank-form__row'
				key={inputs[1].id}
				name={inputs[1].name}
				label={inputs[1].label}
				type={inputs[1].type}
				placeholder={inputs[1].placeholder}
				errorMessage={inputs[1].errorMessage}
				required={inputs[1].required}
				value={values[inputs[1].name]}
				onChange={onChange}
			/>

			<div className='bank-form__final-row'>
				<FormInput
					className='bank-form__row'
					inputClassName='bank-form__exp-date'
					key={inputs[2].id}
					name={inputs[2].name}
					label={inputs[2].label}
					type={inputs[2].type}
					placeholder={inputs[2].placeholder}
					errorMessage={inputs[2].errorMessage}
					required={inputs[2].required}
					value={values[inputs[2].name]}
					onChange={onChange}
				/>

				<FormInput
					className='bank-form__row'
					inputClassName='bank-form__exp-date'
					key={inputs[3].id}
					name={inputs[3].name}
					label={inputs[3].label}
					type={inputs[3].type}
					placeholder={inputs[3].placeholder}
					errorMessage={inputs[3].errorMessage}
					required={inputs[3].required}
					value={values[inputs[3].name]}
					onChange={onChange}
				/>

				<FormInput
					className='bank-form__row'
					inputClassName='bank-form__cvc'
					key={inputs[4].id}
					name={inputs[4].name}
					label={inputs[4].label}
					type={inputs[4].type}
					placeholder={inputs[4].placeholder}
					errorMessage={inputs[4].errorMessage}
					required={inputs[4].required}
					value={values[inputs[4].name]}
					onChange={onChange}
				/>
			</div>

			<Button />
		</form>
	);
};

export default BankForm;
