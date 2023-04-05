import PropTypes from 'prop-types';
import { useState } from "react";

export const AddCategorie = ({ onSubmitCategorie }) => {

	const [inputCategorie, setInputCategorie] = useState('');

	const onInputCategorieChange = ({ target: { value } }) => {
		setInputCategorie(value);
	};

	const OnSubmitInput = (event) => {
		event.preventDefault();

		if (inputCategorie.trim()) onSubmitCategorie(inputCategorie.trim());

		setInputCategorie("");
	};

	return (
		<form onSubmit={OnSubmitInput} aria-label="form">
			<input
				type="text"
				onChange={onInputCategorieChange}
				value={inputCategorie} />
		</form>
	);
};

AddCategorie.propTypes = {
	onSubmitCategorie: PropTypes.func.isRequired
};