import React from 'react';
import InputField from './InputField';
import DateField from './DateField';

const ReservationForm = ({reservation, onSave, onChange}) => {

	return (
		<form >
			<InputField name="firstName"
				value={reservation.firstName}
				label="First Name"
				onChange={onChange}/>

			<InputField name="lastName"
				value={reservation.lastName}
				label="Last Name"
				onChange={onChange}/>

			<DateField name="diningDate"
				value={reservation.diningDate}
				label="Dining Date"
				onChange={onChange}/>

			<InputField name="time"
				value={reservation.time}
				label="Time"
				onChange={onChange}/>

			<InputField name="partySize"
				value={reservation.partySize}
				label="How many people?"
				onChange={onChange}/>

			<InputField name="phone"
				value={reservation.phone}
				label="Phone"
				onChange={onChange}/>

			<input
				type="submit"
				className="btn btn-primary"
				onClick={onSave}
				/>
		
		</form>
	);
};

export default ReservationForm;