# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Reservation.destroy_all

kenny = User.create(user_name: 'ken', password: 'ken')

reservation1 = Reservation.create(user: kenny, party_size: 5, date: 'November 26, 2018', time: '7:00 PM' )

