import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => setInputValue(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.length > 2) {
			setCategories((cat) => [inputValue, ...cat]);
			setInputValue('');
		} else {
			alert('Es necesario colocar una serie');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Ingresa una palabra..."
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
};
AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
export default AddCategory;
