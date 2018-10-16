
import React from 'react';
import ReservationApi from './ReservationApi';

const ReservationView = ({reservation, assignSeat}) => {
	// let onSeatAssign = function(){
	// 	if(confirm(`Are you sure you want to seat ${reservation.firstName}?`)){
	// 		assignSeat(reservation);
	// 	}
	// };
	return (
		<div>
			<h3>{reservation.firstName} {reservation.lastName}</h3>
			<small>reservation #{reservation.reservationId}</small><br/>
			<small>Time: {reservation.diningDate}</small><br/>
			<small>Party Size: {reservation.partySize}</small><br/>
			<small>Phone: {reservation.phone}</small><br/>
			<div>
				<p className="pull-right">
					{(() => {
						if (!reservation.isSeated) {
							return <button type="button" title="click to seat" onClick={assignSeat} className="btn btn-warning">Not seated</button>;
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