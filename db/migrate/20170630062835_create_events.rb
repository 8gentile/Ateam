class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :notes
      t.date :date, null: false
      t.integer :team_id, null: false
      t.timestamps null: false
    end

    add_index :events, :team_id
  end
end
