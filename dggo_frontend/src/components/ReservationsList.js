import React from 'react';
import ReservationApi from './ReservationApi';
import ReservationView from './ReservationViewSingle';

class ReservationsList extends React.Component {
	constructor (props, context) {
		super(props, context);

		this.state = {
			reservations: []
		};
		this.assignSeat = this.assignSeat.bind(this);
	}
	componentWillReceiveProps(nextProps){
		this.setState({reservations: nextProps.reservations});
	}

	componentDidMount() {
		fetch('http://localhost:3000/reservations', {
		method: 'GET',
		}).then(res=>res.json())
		.then(data => {
			this.setState({
				reservations: data
			})
		})
	}

	assignSeat(reservation){
		ReservationApi.updateReservation(reservation)
			.then((reservations)=>{
				this.setState({
					reservations: reservations
				});
			});
	}
	// let tests = this.state.reservations.filter(reservation => reservation.user_id === 2);
	// console.log(tests)
	
	render(){
		
		return (
			<div>
				<h4>Reservations</h4>
				{this.state.reservations.map(reservation => 
						(reservation.user_id === this.props.currentUser)
					? <ReservationView key={reservation.reservationId} reservation={reservation} assignSeat={this.assignSeat} />
					: null
					
				)}
			</div>
		);
	}
}


export default ReservationsList;