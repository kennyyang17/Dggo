class ReservationsController < ApplicationController

    def index 
        reservations = Reservations.all
        render json: reservations
    end 

    def show 
        reservation = Reservation.find(params[:id])
		render json: reservation
    end 

    def create
        @reservation = Reservation.create(reservation_params)
    end 

    private 

    def researvation_params 
        params.require(:reservation).permit(:time, :date, :party_size)
    end

end
