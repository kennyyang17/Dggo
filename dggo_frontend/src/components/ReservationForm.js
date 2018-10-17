import React from 'react';
import InputField from './InputField';
import DateField from './DateField';

const ReservationForm = ({reservation, onSave}) => {

	return (
		<form >
			<InputField name="firstName"
				value={reservation.firstName}
				label="First Name"
				/>

			<InputField name="lastName"
				value={reservation.lastName}
				label="Last Name"
				/>

			<DateField name="diningDate"
				value={reservation.diningDate}
				label="Dining Date"
				/>

			<InputField name="time"
				value={reservation.time}
				label="Time"
				/>

			<InputField name="partySize"
				value={reservation.partySize}
				label="How many people?"
				/>

			<InputField name="phone"
				value={reservation.phone}
				label="Phone"
				/>

			<input
				type="submit"
				className="btn btn-primary"
				onClick={onSave}
				/>
		
		</form>
	);
};

export default ReservationForm;