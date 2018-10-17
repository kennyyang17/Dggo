
import React from 'react';
import { browserHistory } from 'react-router';
// import toastr from 'toastr';
import ReservationApi from './ReservationApi';
import ReservationForm from './ReservationForm';
import ReservationsList from './ReservationsList';

class ReservationPage extends React.Component {
	constructor(props, context){
		super(props, context);

		this.state = {
			reservation: {},
			reservationsList: [], 
			firstName: '', 
			lastName: '',
			diningDate: '',
			time: '',
			partySize: '',
			phone: ''
		};

		this.onFieldChange =this.onFieldChange.bind(this);
	}

	componentDidMount() {
		ReservationApi.listReservations()
			.then((reservations)=>{
				this.setState({reservationsList: reservations});
			});
	}

	onFieldChange(event) {
		const field = event.target.name;
		let reservation = this.state.reservation;
		reservation[field] = event.target.value;
		return this.setState({reservation: reservation});
	}

	onSaveForm = (e) => {
		e.preventDefault();
		console.log('clicked')
		console.log(this.state.reservation)
		// let history = this.props.history;console.log('clicked')
		ReservationApi.saveReservation(this.state.reservation)
		.then(()=>{
			// toastr.success('Reservation saved');
			this.setState({reservation: {}});
			// browserHistory.push('/seatings');
		});
		console.log(this.state.reservation)
		  fetch('http://localhost:3000/reservations', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			}, 
			body: JSON.stringify({
					user_id: this.props.currentUser.id,
					first_name: e.target.parentElement[0].value,
					last_name: e.target.parentElement[1].value,
					date: e.target.parentElement[2].value,
					time: e.target.parentElement[3].value,
					party_size: e.target.parentElement[4].value,
					phone: e.target.parentElement[5].value 	
			})
		  })
		  .then(resp => resp.json())
		  .then(data => { 
			console.log(data)
			if (!data.error) {
			  this.setState({
				currentUser: data
			  });
			}      
		  })

	}

	render() {
		return (
		<div className="row">
			<div className="jumbotron">
				<h1>Make a reservation</h1>
				<ReservationForm reservation={this.state.reservation}
					onSave={this.onSaveForm}
	
					/>
			</div>
			<div className="col-lg-3">	 
			 <ReservationsList reservations={this.state.reservationsList}  currentUser = {this.props.currentUser.id}/>		
			</div>
		</div>
		);
	}
}

export default ReservationPage;