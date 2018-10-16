const reservations = [{
	reservationId: 1,
	firstName: 'Ryhan',
	lastName: 'Chowdhury',
	diningDate: '22/12/2018',
	phone: '0758752983',
	time: '7:00pm',
	partySize: 4
}];

class ReservationApi {
	static saveReservation(reservation){
		return new Promise((resolve, reject) => {
			reservation.reservationId = ++ReservationApi.lastId;
			reservations.splice(0, 0, reservation);
			resolve(reservation);
		});
	}

	static updateReservation(reservationToUpdate){
		return new Promise((resolve,reject)=> {
			let index = reservations.findIndex((reservation)=> reservation.reservationId === reservationToUpdate.reservationId);
			reservations[index].isSeated = true;
			resolve(reservations);
		});
	}
	static listReservations() {
		return new Promise((resolve, reject) => {
			resolve(reservations);
		});
	}
}

ReservationApi.lastId = 2;
export default ReservationApi;