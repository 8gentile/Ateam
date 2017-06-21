class UpdateUsersTable < ActiveRecord::Migration
  def change
    remove_column :users, :name
    add_column :users, :fname, :string, null: false
    add_column :users, :lname, :string, null: false
  end
end
