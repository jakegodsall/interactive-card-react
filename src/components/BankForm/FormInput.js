import React from 'react';

import './FormInput.css';

const FormInput = props => {
	return (
		<div className={props.className}>
			<label
				className='form-input__label'
				htmlFor={props.name}
			>
				{props.label}
			</label>
			<input
				className={`form-input__input ${props.inputClassName}`}
				placeholder={props.placeholder}
				id={props.name}
				name={props.name}
				required={props.required}
				onChange={props.onChange}
			/>
			<span className='form-input__error-message'>
				{props.errorMessage}
			</span>
		</div>
	);
};

export default FormInput;
