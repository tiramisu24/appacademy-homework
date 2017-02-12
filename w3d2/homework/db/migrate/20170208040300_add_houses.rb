class AddHouses < ActiveRecord::Migration[5.0]
  def change
    create_table :houses do |house|
      house.string :address
      house.timestamp
    end
  end
end
