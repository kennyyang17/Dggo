
import React from 'react';

const DateField = ({name, label, value, onChange}) => {
	return (
		<div className="form-group">
			<label htmlFor="{name}Input">
				{label}
			</label>
			<input type="date" value={value} 
				className="form-control" 
				name={name}
				onChange={onChange}
				placeholder="dd-MM-yyyy"/>
		</div>
	);
};

export default DateField;