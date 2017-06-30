class Removecolumnfromcommentstable < ActiveRecord::Migration
  def change
    add_column :comments, :event_id, :integer
    add_column :comments, :todo_id, :integer
    add_index :comments, :event_id
    add_index :comments, :todo_id
  end
end
