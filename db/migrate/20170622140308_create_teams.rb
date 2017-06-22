class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :manager_id
      t.timestamps
    end

    add_index :teams, :manager_id
  end
end
