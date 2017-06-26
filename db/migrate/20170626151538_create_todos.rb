class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.string :body
      t.integer :team_id, null: false
      t.boolean :done,  default: false
      t.string :user_id, null: false
      t.timestamps
    end

    add_index :todos, :team_id
    add_index :todos, :user_id
  end
end
