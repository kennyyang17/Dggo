class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.belongs_to :user
      t.integer :party_size
      t.date :date
      t.time :time
      
      t.timestamps
    end
  end
end
