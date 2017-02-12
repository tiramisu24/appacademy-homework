class AddPeople < ActiveRecord::Migration[5.0]
  def change
    create_table :people do |person|
      person.string :name
      person.integer :house_id
      person.timestamp

    end
  end
end
