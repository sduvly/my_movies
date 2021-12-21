class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.integer :price
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :movie, null: false, foreign_key: true

      t.timestamps
    end
  end
end
