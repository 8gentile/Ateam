class CreateInvites < ActiveRecord::Migration
  def change
    create_table :invites do |t|
      t.string :email
      t.integer :team_id
      t.boolean :pending
      t.timestamps null: false
    end

    add_index :invites, :email
    add_index :invites, :team_id
  end
end
