
import React from 'react';
import ReservationApi from './ReservationApi';

const ReservationView = ({reservation, assignSeat}) => {
	// let onSeatAssign = function(){
	// 	if(confirm(`Are you sure you want to seat ${reservation.firstName}?`)){
	// 		assignSeat(reservation);
	// 	}
	// };
	console.log(reservation)
	return (
		<div>
			<h3>{reservation.first_name} {reservation.last_name}</h3>
			<small>reservation #{reservation.id}</small><br/>
			<small>Time: {reservation.time}</small><br/>
			<small>Date: {reservation.date}</small><br/>
			<small>Party Size: {reservation.party_size}</small><br/>
			<small>Phone: {reservation.phone}</small><br/>
			<div>
				<p className="pull-right">
					{(() => {
						if (!reservation.isSeated) {
							return <button type="button" title="click to seat" className="btn btn-warning">Not seated</button>;
						} else {
							return <div className="success">Seated</div>;
						}
					})()}
				</p>
				<br/>
			</div>
			<hr/>
		</div>
	);
};

export default ReservationView;