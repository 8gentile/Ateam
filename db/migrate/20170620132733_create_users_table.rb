class CreateUsersTable < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name
      t.string :password_digest, null: false
      t.string :session_token
      t.timestamps
    end

    add_index :users, :name
    add_index :users, :email
    add_index :users, :session_token
  end
end
