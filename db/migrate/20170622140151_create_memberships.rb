class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.integer :user_id
      t.integer :team_id
      t.timestamps
    end

    add_index :memberships, :user_id
    add_index :memberships, :team_id
  end
end
